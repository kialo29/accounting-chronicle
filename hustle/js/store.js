// ---------------------------------------------------------------
// store.js – single source of truth, saved to localStorage.
// All data stays on this device. Export/import JSON for backups.
// ---------------------------------------------------------------
import { uid, today, toISO, addMonths, addDays, monthKey, parseDate } from './util.js';
import { BUSINESS_TYPES, CHANNEL_PRESETS, UK_TAX_DEFAULTS, CURRENCIES } from './templates.js';

const KEY = 'hustlehq.v1';
const SCHEMA = 1;

export function defaultSettings() {
  return {
    schema: SCHEMA,
    onboarded: false,
    businessName: '',
    ownerName: '',
    type: 'general',
    currency: 'GBP',
    locale: 'en-GB',
    country: 'UK',
    email: '', phone: '', address: '', website: '',
    hourlyRate: 25,
    vatRegistered: false,
    vatRate: 20,
    invoicePrefix: 'INV-',
    nextInvoiceNo: 1,
    nextOrderNo: 1,
    paymentTerms: 14,
    paymentDetails: '',
    invoiceFooter: 'Thank you for your business.',
    goalRevenue: 1000,
    goalProfit: 500,
    otherIncome: 0,
    tax: { ...UK_TAX_DEFAULTS },
    theme: 'system',
    demo: false,
  };
}

function emptyState() {
  return {
    settings: defaultSettings(),
    stages: [],
    channels: [],
    customers: [],
    products: [],
    orders: [],
    invoices: [],
    expenses: [],
    timeEntries: [],
    tasks: [],
    processes: [],
    timer: null, // { startedAt, customerId, description }
  };
}

class Store {
  constructor() {
    this.state = emptyState();
    this.listeners = new Set();
    this.load();
  }
  load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const data = JSON.parse(raw);
        this.state = { ...emptyState(), ...data, settings: { ...defaultSettings(), ...(data.settings || {}) } };
        this.state.settings.tax = { ...UK_TAX_DEFAULTS, ...(this.state.settings.tax || {}) };
      }
    } catch (e) { console.warn('Could not load saved data', e); }
  }
  save() {
    try { localStorage.setItem(KEY, JSON.stringify(this.state)); }
    catch (e) { console.warn('Could not save', e); }
    this.emit();
  }
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  emit() { for (const fn of this.listeners) fn(this.state); }

  // ---- generic CRUD ----
  list(coll) { return this.state[coll]; }
  get(coll, id) { return this.state[coll].find(x => x.id === id); }
  add(coll, obj) {
    const rec = { id: uid(), createdAt: new Date().toISOString(), ...obj };
    this.state[coll].push(rec);
    this.save();
    return rec;
  }
  update(coll, id, patch) {
    const rec = this.get(coll, id);
    if (!rec) return null;
    Object.assign(rec, typeof patch === 'function' ? patch(rec) : patch, { updatedAt: new Date().toISOString() });
    this.save();
    return rec;
  }
  remove(coll, id) {
    const i = this.state[coll].findIndex(x => x.id === id);
    if (i >= 0) { this.state[coll].splice(i, 1); this.save(); }
  }
  setSettings(patch) { Object.assign(this.state.settings, patch); this.save(); }
  get settings() { return this.state.settings; }
  get type() { return BUSINESS_TYPES[this.state.settings.type] || BUSINESS_TYPES.general; }

  // ---- numbering ----
  nextNumber(kind) {
    const s = this.state.settings;
    if (kind === 'invoice') { const n = s.nextInvoiceNo++; return `${s.invoicePrefix}${String(n).padStart(4, '0')}`; }
    const n = s.nextOrderNo++; return `#${String(n).padStart(4, '0')}`;
  }

  // ---- setup / templates ----
  applyTemplate(typeKey, { seedProducts = true } = {}) {
    const t = BUSINESS_TYPES[typeKey] || BUSINESS_TYPES.general;
    const s = this.state;
    s.settings.type = t.key;
    if (!s.stages.length) s.stages = t.stages.map((st, i) => ({ id: uid('st_'), name: st.name, order: i }));
    for (const ch of t.channels) if (!s.channels.find(c => c.id === ch)) s.channels.push({ ...CHANNEL_PRESETS[ch] });
    if (seedProducts && !s.products.length) for (const p of t.products) s.products.push({ id: uid(), createdAt: new Date().toISOString(), trackStock: p.type === 'product' && p.stockIn !== undefined, stockIn: 0, feePct: null, feeFixed: null, shippingCost: 0, active: true, ...p });
    if (!s.processes.length) for (const pr of t.processes) s.processes.push({ id: uid(), name: pr.name, steps: pr.steps.map(text => ({ id: uid(), text })) });
    if (!s.tasks.length) t.launch.forEach((title, i) => s.tasks.push({ id: uid(), title, done: false, priority: i < 3 ? 'high' : 'normal', due: addDays(today(), 7 + i * 3), createdAt: new Date().toISOString(), tag: 'Launch checklist' }));
    this.save();
  }
  setCurrency(code) {
    const c = CURRENCIES.find(x => x.value === code) || CURRENCIES[0];
    this.setSettings({ currency: c.value, locale: c.locale });
  }

  // ---- data management ----
  exportJSON() { return JSON.stringify({ app: 'HustleHQ', exportedAt: new Date().toISOString(), data: this.state }, null, 2); }
  importJSON(text) {
    const parsed = JSON.parse(text);
    const data = parsed.data || parsed;
    if (!data || !data.settings || !Array.isArray(data.orders)) throw new Error('That file is not a HustleHQ backup.');
    this.state = { ...emptyState(), ...data, settings: { ...defaultSettings(), ...data.settings } };
    this.save();
  }
  reset() { this.state = emptyState(); try { localStorage.removeItem(KEY); } catch {} this.save(); }

  // ---- recurring expenses: create this month's copies ----
  materializeRecurring() {
    const s = this.state; let changed = false;
    const tdy = today();
    for (const e of [...s.expenses]) {
      if (!e.recurring || e.recurring === 'none' || e.parentId) continue;
      let next = e.lastGenerated ? step(e.lastGenerated, e.recurring) : step(e.date, e.recurring);
      let guard = 0;
      while (next <= tdy && guard++ < 120) {
        s.expenses.push({ ...e, id: uid(), parentId: e.id, recurring: 'none', lastGenerated: undefined, date: next, createdAt: new Date().toISOString() });
        e.lastGenerated = next; next = step(next, e.recurring); changed = true;
      }
    }
    if (changed) this.save();
    function step(iso, r) { return r === 'weekly' ? addDays(iso, 7) : r === 'yearly' ? addMonths(iso, 12) : addMonths(iso, 1); }
  }

  // ---- orders helpers ----
  createOrder(data) {
    const stage = this.state.stages[0];
    const o = this.add('orders', { number: this.nextNumber('order'), stageId: stage ? stage.id : null, paid: false, cancelled: false, delivery: {}, items: [], ...data });
    this.save();
    return o;
  }
  createInvoiceFromOrder(order) {
    const s = this.state.settings;
    const inv = this.add('invoices', {
      number: this.nextNumber('invoice'),
      date: today(), dueDate: addDays(today(), s.paymentTerms || 14),
      customerId: order.customerId, orderId: order.id,
      items: order.items.map(it => ({ description: it.name, qty: it.qty, unitPrice: it.unitPrice })),
      shipping: order.shippingCharged || 0, discount: order.discount || 0,
      vatRate: s.vatRegistered ? s.vatRate : 0,
      status: 'draft', notes: '',
    });
    this.update('orders', order.id, { invoiceId: inv.id });
    return inv;
  }
  markOrderPaid(id, paid = true, method) {
    const o = this.update('orders', id, { paid, paidAt: paid ? today() : null, paymentMethod: method || null });
    if (o && o.invoiceId) this.update('invoices', o.invoiceId, { status: paid ? 'paid' : 'sent', paidAt: paid ? today() : null });
  }
  markInvoicePaid(id, paid = true) {
    const inv = this.update('invoices', id, { status: paid ? 'paid' : 'sent', paidAt: paid ? today() : null });
    if (inv && inv.orderId) this.update('orders', inv.orderId, { paid, paidAt: paid ? today() : null });
  }

  // ---- demo data ----
  loadDemo(typeKey = 'reseller') {
    this.reset();
    const t = BUSINESS_TYPES[typeKey] || BUSINESS_TYPES.general;
    const s = this.state;
    Object.assign(s.settings, { onboarded: true, demo: true, businessName: demoNames[typeKey] || 'Demo Hustle', ownerName: 'Sam', paymentDetails: 'Sort code 12-34-56 · Account 12345678 · Ref: invoice number', email: 'hello@example.com', goalRevenue: 1200, goalProfit: 600 });
    this.applyTemplate(typeKey);
    const custNames = ['Amara Osei', 'Ben Whitfield', 'Chloe Nguyen', 'Dev Patel', 'Ella Rossi', 'Farah Khan', 'George Hill', 'Hana Sato'];
    for (const n of custNames) s.customers.push({ id: uid(), name: n, email: n.split(' ')[0].toLowerCase() + '@example.com', phone: '', notes: '', createdAt: new Date().toISOString() });
    const prods = s.products;
    const channels = s.channels;
    const stages = s.stages;
    let rnd = 7;
    const rand = () => { rnd = (rnd * 9301 + 49297) % 233280; return rnd / 233280; };
    const pick = arr => arr[Math.floor(rand() * arr.length)];
    const tdy = today();
    // 5 months of sales
    for (let m = 5; m >= 0; m--) {
      const count = 4 + Math.floor(rand() * 6) + (5 - m);
      for (let i = 0; i < count; i++) {
        const day = 1 + Math.floor(rand() * 27);
        const base = parseDate(tdy); base.setMonth(base.getMonth() - m); base.setDate(Math.min(day, 28));
        const date = toISO(base);
        if (date > tdy) continue;
        const p = pick(prods); const qty = p.type === 'product' ? 1 + Math.floor(rand() * 2) : 1;
        const ch = pick(channels);
        const isLast = m === 0 && rand() > 0.5;
        const stageId = isLast ? pick(stages).id : stages[stages.length - 1].id;
        const ship = p.type === 'product' ? 3.2 : 0;
        s.orders.push({ id: uid(), number: this.nextNumber('order'), date, customerId: pick(s.customers).id, channelId: ch.id, stageId, cancelled: false,
          items: [{ productId: p.id, name: p.name, qty, unitPrice: p.price, unitCost: p.cost }],
          shippingCharged: ship ? 3.5 : 0, shippingCost: ship, discount: 0, paid: !isLast || rand() > 0.4, paidAt: date, delivery: { method: p.type === 'product' ? 'post' : 'in-person', carrier: p.type === 'product' ? 'Royal Mail' : '', tracking: '' }, notes: '', createdAt: new Date().toISOString() });
      }
    }
    // keep stock positive: pretend we bought what we sold plus a few spare
    for (const p of prods) if (p.trackStock) { let sold = 0; for (const o of s.orders) for (const it of o.items) if (it.productId === p.id) sold += it.qty; p.stockIn = sold + (p === prods[0] ? 1 : 4); }
    // a couple of invoices
    const unpaid = s.orders.filter(o => !o.paid).slice(0, 3);
    for (const o of unpaid) { const inv = this.createInvoiceFromOrder(o); inv.status = 'sent'; inv.date = addDays(o.date, 0); inv.dueDate = addDays(o.date, 14); }
    // expenses
    const cats = ['Stock & goods for resale', 'Postage & packaging', 'Software & subscriptions', 'Marketing & advertising', 'Travel & mileage', 'Materials & ingredients'];
    for (let m = 5; m >= 0; m--) {
      for (let i = 0; i < 3 + Math.floor(rand() * 3); i++) {
        const base = parseDate(tdy); base.setMonth(base.getMonth() - m); base.setDate(1 + Math.floor(rand() * 27));
        const date = toISO(base); if (date > tdy) continue;
        s.expenses.push({ id: uid(), date, category: pick(cats), description: pick(['Car boot haul', 'Mailing bags x50', 'Canva Pro', 'Instagram boost', 'Petrol to post office', 'Packaging tissue', 'Label printer', 'Thank-you cards']), amount: Math.round((4 + rand() * 60) * 100) / 100, vendor: pick(['Amazon', 'Royal Mail', 'Local shop', 'Canva', 'Meta']), recurring: 'none', createdAt: new Date().toISOString() });
      }
    }
    s.expenses.push({ id: uid(), date: addMonths(tdy, -3), category: 'Software & subscriptions', description: 'Canva Pro (monthly)', amount: 12.99, vendor: 'Canva', recurring: 'monthly', createdAt: new Date().toISOString() });
    // time entries (if hourly)
    if (t.hourly) for (let i = 0; i < 6; i++) s.timeEntries.push({ id: uid(), date: addDays(tdy, -i * 2), customerId: pick(s.customers).id, description: pick(['Session', 'Prep work', 'Site visit', 'Admin']), minutes: 60 + Math.floor(rand() * 3) * 30, rate: s.settings.hourlyRate, billable: true, invoiced: i > 3, createdAt: new Date().toISOString() });
    // tasks
    s.tasks.push({ id: uid(), title: 'Post this week’s orders', done: false, priority: 'high', due: tdy, createdAt: new Date().toISOString() });
    s.tasks.push({ id: uid(), title: 'Chase overdue invoices', done: false, priority: 'normal', due: addDays(tdy, 2), createdAt: new Date().toISOString() });
    this.materializeRecurring();
    this.save();
  }
}

const demoNames = { reseller: 'Second Thread', maker: 'Wick & Wonder', tutor: 'Bright Spark Tutoring', trader: 'Spotless by Sam', freelancer: 'Sam Creative', food: 'Bake It Till You Make It', creator: 'The Sam Channel', general: 'Side Hustle HQ' };

export const store = new Store();
export { monthKey };
