// ---------------------------------------------------------------
// forms.js – create/edit dialogs shared across views
// ---------------------------------------------------------------
import { h, field, input, select, textarea, checkbox, grid, openModal, confirmDialog, toast, fmt, today, addDays, uid, round2, formValues, btn, setChildren } from './util.js';
import { store } from './store.js';
import { orderTotals, invoiceTotals, productEconomics, priceForMargin, stockOnHand, channelFor, unbilledTime } from './calc.js';
import { EXPENSE_CATEGORIES, PRIORITIES } from './templates.js';

const S = () => store.state;

function footer(m, onSave, { saveText = 'Save', onDelete, deleteText = 'Delete' } = {}) {
  return [
    onDelete ? h('button.btn.btn-danger.left', { type: 'button', onClick: onDelete }, deleteText) : null,
    h('button.btn.btn-ghost', { type: 'button', onClick: m.close }, 'Cancel'),
    h('button.btn.btn-primary', { type: 'button', onClick: onSave }, saveText),
  ];
}
function modalWithFooter(opts, onSave, extra) {
  const m = openModal({ ...opts, footer: [] });
  const foot = m.panel.querySelector('.modal-foot');
  for (const b of footer(m, onSave, extra)) if (b) foot.appendChild(b);
  return m;
}

// ---------- customers ----------
export function customerForm(existing, onDone) {
  const f = h('form.form', { onSubmit: e => { e.preventDefault(); save(); } },
    grid(2,
      field('Name', input({ name: 'name', value: existing?.name || '', required: true, placeholder: 'Jane Smith' })),
      field('Email', input({ name: 'email', type: 'email', value: existing?.email || '' })),
      field('Phone', input({ name: 'phone', type: 'tel', value: existing?.phone || '' })),
      field('Where they found you', input({ name: 'source', value: existing?.source || '', placeholder: 'Instagram, referral, Vinted…' })),
    ),
    field('Address', textarea({ name: 'address', value: existing?.address || '', rows: 2 })),
    field('Notes', textarea({ name: 'notes', value: existing?.notes || '', placeholder: 'Preferences, allergies, sizes, how they like to pay…' })),
  );
  const m = modalWithFooter({ title: existing ? 'Edit customer' : 'New customer', body: f }, save, existing ? { onDelete: async () => { if (await confirmDialog('Delete this customer? Their sales stay but lose the link.')) { store.remove('customers', existing.id); m.close(); onDone && onDone(null); } } } : {});
  function save() {
    const v = formValues(f); if (!v.name.trim()) { toast('Name is required', 'err'); return; }
    const rec = existing ? store.update('customers', existing.id, v) : store.add('customers', v);
    m.close(); toast(existing ? 'Customer updated' : 'Customer added'); onDone && onDone(rec);
  }
  return m;
}

/** select of customers with a "+ new" shortcut */
export function customerPicker(value, { allowNone = true } = {}) {
  const opts = [...(allowNone ? [{ value: '', label: '— No customer / walk-in —' }] : []), ...S().customers.map(c => ({ value: c.id, label: c.name })), { value: '__new', label: '+ Add a new customer…' }];
  const sel = select({ name: 'customerId', value: value || '' }, opts);
  sel.addEventListener('change', () => {
    if (sel.value === '__new') {
      sel.value = value || '';
      customerForm(null, rec => { if (!rec) return; sel.insertBefore(h('option', { value: rec.id }, rec.name), sel.lastElementChild); sel.value = rec.id; });
    }
  });
  return sel;
}

// ---------- products ----------
export function productForm(existing, onDone) {
  const t = store.type;
  const typeSel = select({ name: 'type', value: existing?.type || (t.stock ? 'product' : 'service') }, [{ value: 'product', label: 'Product (physical or digital)' }, { value: 'service', label: 'Service (fixed price)' }, { value: 'hourly', label: 'Hourly rate' }]);
  const price = input({ name: 'price', type: 'number', min: 0, value: existing?.price ?? '', placeholder: '0.00' });
  const cost = input({ name: 'cost', type: 'number', min: 0, value: existing?.cost ?? 0 });
  const ship = input({ name: 'shippingCost', type: 'number', min: 0, value: existing?.shippingCost ?? 0 });
  const feePct = input({ name: 'feePct', type: 'number', min: 0, value: existing?.feePct ?? '', placeholder: 'use channel' });
  const feeFixed = input({ name: 'feeFixed', type: 'number', min: 0, value: existing?.feeFixed ?? '', placeholder: 'use channel' });
  const track = checkbox({ name: 'trackStock', checked: existing ? !!existing.trackStock : t.stock }, 'Track stock for this item');
  const stockIn = input({ name: 'stockIn', type: 'number', min: 0, step: 1, value: existing?.stockIn ?? 0 });
  const lowStock = input({ name: 'lowStock', type: 'number', min: 0, step: 1, value: existing?.lowStock ?? 2 });
  const out = h('div.calc-out');
  const channelSel = select({ value: S().channels[0]?.id || '' }, S().channels.map(c => ({ value: c.id, label: `${c.name} (${c.feePct}% + ${fmt.money(c.feeFixed)})` })));
  const target = input({ type: 'number', min: 0, max: 95, value: 50, style: { width: '90px' } });
  function recalc() {
    const p = { price: Number(price.value), cost: Number(cost.value), shippingCost: Number(ship.value), feePct: feePct.value === '' ? null : Number(feePct.value), feeFixed: feeFixed.value === '' ? null : Number(feeFixed.value) };
    const e = productEconomics(S(), p, channelSel.value);
    const tone = e.margin < 0.2 ? 'bad' : e.margin < 0.4 ? 'warn' : 'good';
    setChildren(out, 
      h('span', 'Fees per sale'), h('b', fmt.money(e.fees)),
      h('span', 'Profit per sale'), h('b', { class: e.profit < 0 ? 'bad' : '' }, fmt.money(e.profit)),
      h('span', 'Margin'), h('b', { class: tone }, fmt.pct(e.margin)),
      h('span', 'Markup on cost'), h('b', isFinite(e.markup) ? fmt.pct(e.markup) : '–'),
    );
    const suggested = priceForMargin(p.cost, feePct.value === '' ? channelFor(S(), channelSel.value).feePct : Number(feePct.value), feeFixed.value === '' ? channelFor(S(), channelSel.value).feeFixed : Number(feeFixed.value), p.shippingCost, Number(target.value) / 100);
    sugg.textContent = isNaN(suggested) ? 'not possible with those fees' : fmt.money(suggested);
  }
  const sugg = h('b');
  const useSugg = h('button.btn.btn-sm', { type: 'button', onClick: () => { const v = sugg.textContent.replace(/[^\d.]/g, ''); if (v) { price.value = v; recalc(); } } }, 'Use this price');
  [price, cost, ship, feePct, feeFixed, channelSel, target].forEach(el => el.addEventListener('input', recalc));
  const stockBox = h('div', grid(2, field('Stock received (total units bought/made)', stockIn, 'On hand = stock received − units sold'), field('Low stock warning at', lowStock)));
  const syncStock = () => { stockBox.hidden = !track.querySelector('input').checked || typeSel.value !== 'product'; };
  track.addEventListener('change', syncStock); typeSel.addEventListener('change', syncStock);
  const f = h('form.form', { onSubmit: e => { e.preventDefault(); save(); } },
    grid(2,
      field('Name', input({ name: 'name', value: existing?.name || '', required: true, placeholder: 'What you sell' })),
      field('Type', typeSel),
      field('Category', input({ name: 'category', value: existing?.category || '', placeholder: 'optional' })),
      field('SKU / code', input({ name: 'sku', value: existing?.sku || '', placeholder: 'optional' })),
    ),
    h('h4', 'Pricing & cost'),
    grid(3,
      field('Selling price', price),
      field('Unit cost (what it costs you)', cost, 'Materials, stock price, ingredients'),
      field('Postage you pay per sale', ship),
    ),
    grid(2,
      field('Fee override %', feePct, 'Leave blank to use the channel’s fee'),
      field('Fee override fixed', feeFixed),
    ),
    h('h4', 'Margin check'),
    h('div.row', h('span.muted', 'Selling via'), channelSel),
    out,
    h('div.row', h('span.muted', 'Price for a'), target, h('span.muted', '% margin:'), sugg, useSugg),
    h('h4', 'Stock'),
    track, stockBox,
    field('Notes', textarea({ name: 'notes', value: existing?.notes || '', rows: 2 })),
  );
  syncStock(); recalc();
  const m = modalWithFooter({ title: existing ? 'Edit product' : 'New product or service', body: f, size: 'lg' }, save, existing ? { onDelete: async () => { if (await confirmDialog('Delete this item from your catalogue? Past sales keep their details.')) { store.remove('products', existing.id); m.close(); onDone && onDone(null); } } } : {});
  function save() {
    const v = formValues(f);
    if (!v.name.trim()) { toast('Name is required', 'err'); return; }
    if (v.price === null) v.price = 0;
    v.feePct = feePct.value === '' ? null : Number(feePct.value);
    v.feeFixed = feeFixed.value === '' ? null : Number(feeFixed.value);
    v.active = existing ? existing.active !== false : true;
    const rec = existing ? store.update('products', existing.id, v) : store.add('products', v);
    m.close(); toast(existing ? 'Saved' : 'Added to catalogue'); onDone && onDone(rec);
  }
  return m;
}

export function stockAdjustForm(product, onDone) {
  const qty = input({ type: 'number', step: 1, value: 1 });
  const cost = input({ type: 'number', min: 0, value: round2((Number(product.cost) || 0)) });
  const log = checkbox({ checked: true }, 'Also record the purchase as an expense');
  const f = h('div.form',
    h('p.muted', `On hand now: ${stockOnHand(S(), product)}. Enter how many you received (negative to write off).`),
    grid(2, field('Units received', qty), field('Cost per unit', cost)),
    log);
  const m = modalWithFooter({ title: `Add stock: ${product.name}`, body: f, size: 'sm' }, () => {
    const n = Number(qty.value) || 0;
    store.update('products', product.id, { stockIn: (Number(product.stockIn) || 0) + n });
    if (log.querySelector('input').checked && n > 0 && Number(cost.value) > 0) store.add('expenses', { date: today(), category: 'Stock & goods for resale', description: `${n} × ${product.name}`, amount: round2(n * Number(cost.value)), vendor: '', recurring: 'none' });
    m.close(); toast('Stock updated'); onDone && onDone();
  }, { saveText: 'Update stock' });
}

// ---------- line items ----------
function lineEditor(items, { withCost = true, onChange }) {
  const wrap = h('div.lines');
  const products = S().products.filter(p => p.active !== false);
  const head = h('div.line', { class: withCost ? 'with-cost' : '' }, h('span.line-head', 'Item'), h('span.line-head', 'Qty'), h('span.line-head', 'Price'), h('span.line-head', withCost ? 'Unit cost' : ''), h('span'));
  if (!withCost) head.classList.add('no-cost');
  wrap.appendChild(head);
  const rows = [];
  function addRow(it = { qty: 1, unitPrice: 0, unitCost: 0, name: '' }) {
    const row = { ...it };
    const name = input({ value: row.name || '', placeholder: 'Describe the item', list: undefined });
    const sel = select({ value: row.productId || '' }, [{ value: '', label: 'Type a custom item…' }, ...products.map(p => ({ value: p.id, label: p.name }))]);
    const qty = input({ type: 'number', min: 0, step: 'any', value: row.qty ?? 1 });
    const price = input({ type: 'number', min: 0, value: row.unitPrice ?? 0 });
    const cost = input({ type: 'number', min: 0, value: row.unitCost ?? 0 });
    const first = h('div', { style: { display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0 } }, sel, name);
    name.hidden = !!row.productId;
    sel.addEventListener('change', () => {
      const p = products.find(x => x.id === sel.value);
      row.productId = sel.value || null;
      if (p) { row.name = p.name; name.value = p.name; price.value = p.price; cost.value = p.cost || 0; row.unitPrice = Number(p.price); row.unitCost = Number(p.cost) || 0; name.hidden = true; }
      else { name.hidden = false; name.focus(); }
      sync();
    });
    const del = h('button.icon-btn', { type: 'button', 'aria-label': 'Remove line', onClick: () => { rows.splice(rows.indexOf(entry), 1); el.remove(); sync(); } }, '✕');
    const el = h('div.line', { class: withCost ? 'with-cost' : '' }, first, qty, price, withCost ? cost : h('span'), del);
    const entry = { row, name, qty, price, cost, el };
    rows.push(entry); wrap.insertBefore(el, addBtn);
    [name, qty, price, cost].forEach(i => i.addEventListener('input', sync));
  }
  const addBtn = h('button.btn.btn-sm.btn-ghost', { type: 'button', onClick: () => addRow() }, '+ Add line');
  wrap.appendChild(addBtn);
  function sync() { onChange && onChange(get()); }
  function get() {
    return rows.map(r => ({ productId: r.row.productId || null, name: r.name.value.trim() || (r.row.productId ? r.row.name : ''), qty: Number(r.qty.value) || 0, unitPrice: Number(r.price.value) || 0, unitCost: withCost ? Number(r.cost.value) || 0 : 0 })).filter(x => x.name);
  }
  (items && items.length ? items : [{ qty: 1, unitPrice: 0, unitCost: 0 }]).forEach(addRow);
  return { el: wrap, get };
}

// ---------- orders / sales ----------
export function orderForm(existing, onDone, presets = {}) {
  const st = S(); const t = store.type;
  const o = existing || { date: today(), customerId: presets.customerId || '', channelId: st.channels[0]?.id || 'direct', stageId: st.stages[0]?.id, items: [], discount: 0, shippingCharged: 0, shippingCost: 0, paid: false, delivery: { method: t.stock ? 'post' : 'in-person' }, notes: '' };
  const cust = customerPicker(o.customerId);
  const channel = select({ name: 'channelId', value: o.channelId }, st.channels.map(c => ({ value: c.id, label: c.feePct || c.feeFixed ? `${c.name} (${c.feePct}% + ${fmt.money(c.feeFixed)})` : c.name })));
  const stage = select({ name: 'stageId', value: o.stageId || '' }, st.stages.map(s => ({ value: s.id, label: s.name })));
  const discount = input({ name: 'discount', type: 'number', min: 0, value: o.discount || 0 });
  const shipCharged = input({ name: 'shippingCharged', type: 'number', min: 0, value: o.shippingCharged || 0 });
  const shipCost = input({ name: 'shippingCost', type: 'number', min: 0, value: o.shippingCost || 0 });
  const paid = checkbox({ name: 'paid', checked: !!o.paid }, 'Paid');
  const payMethod = input({ name: 'paymentMethod', value: o.paymentMethod || '', placeholder: 'Bank transfer, cash, platform…' });
  const totalsEl = h('div.totals');
  let items = o.items || [];
  const lines = lineEditor(items, { withCost: true, onChange: v => { items = v; recalc(); } });
  function recalc() {
    const draft = { ...o, items, discount: Number(discount.value), shippingCharged: Number(shipCharged.value), shippingCost: Number(shipCost.value), channelId: channel.value };
    const tt = orderTotals(st, draft);
    setChildren(totalsEl, 
      h('span', 'Subtotal'), h('span.num', fmt.money(tt.subtotal)),
      tt.discount ? h('span', 'Discount') : null, tt.discount ? h('span.num', '−' + fmt.money(tt.discount)) : null,
      tt.shippingCharged ? h('span', 'Postage charged') : null, tt.shippingCharged ? h('span.num', fmt.money(tt.shippingCharged)) : null,
      h('span.big', 'Customer pays'), h('span.num.big', fmt.money(tt.revenue)),
      h('span.muted', 'Platform / payment fees'), h('span.num.muted', '−' + fmt.money(tt.fees)),
      h('span.muted', 'Cost of items'), h('span.num.muted', '−' + fmt.money(tt.cogs)),
      tt.shippingCost ? h('span.muted', 'Postage you pay') : null, tt.shippingCost ? h('span.num.muted', '−' + fmt.money(tt.shippingCost)) : null,
      h('span.big', 'Your profit'), h('span.num.big', { class: tt.profit < 0 ? 'bad' : 'good' }, `${fmt.money(tt.profit)} (${fmt.pct(tt.margin)})`),
    );
  }
  [discount, shipCharged, shipCost, channel].forEach(el => el.addEventListener('input', recalc));
  const method = select({ name: 'method', value: o.delivery?.method || 'post' }, [{ value: 'post', label: 'Post / courier' }, { value: 'collect', label: 'Collection' }, { value: 'in-person', label: 'In person / on site' }, { value: 'digital', label: 'Digital / online' }]);
  const f = h('form.form', { onSubmit: e => { e.preventDefault(); save(); } },
    grid(3,
      field('Date', input({ name: 'date', type: 'date', value: o.date })),
      field(t.customerLabel.replace(/s$/, ''), cust),
      field('Sold via', channel),
    ),
    h('h4', 'Items'), lines.el,
    grid(3,
      field('Discount', discount),
      field('Postage charged to customer', shipCharged),
      field('Postage / delivery you pay', shipCost),
    ),
    totalsEl,
    h('h4', 'Status & delivery'),
    grid(3,
      field('Stage', stage),
      field('Delivery method', method),
      field('Due / delivery date', input({ name: 'dueDate', type: 'date', value: o.dueDate || '' })),
    ),
    grid(3,
      field('Carrier', input({ name: 'carrier', value: o.delivery?.carrier || '', placeholder: 'Royal Mail, Evri, InPost…' })),
      field('Tracking number', input({ name: 'tracking', value: o.delivery?.tracking || '' })),
      field('Address / location', input({ name: 'address', value: o.delivery?.address || '' })),
    ),
    h('h4', 'Payment'),
    h('div.row', paid, h('div', { style: { flex: 1, minWidth: '200px' } }, payMethod)),
    field('Notes', textarea({ name: 'notes', value: o.notes || '', rows: 2 })),
  );
  recalc();
  const m = modalWithFooter({ title: existing ? `Edit ${o.number || ''}` : `New ${t.salesLabel.replace(/s$/, '').toLowerCase()}`, body: f, size: 'lg' }, save,
    existing ? { onDelete: async () => { if (await confirmDialog('Delete this sale? Stock will be returned and any linked invoice unlinked.')) { store.remove('orders', existing.id); if (existing.invoiceId) store.update('invoices', existing.invoiceId, { orderId: null }); m.close(); onDone && onDone(null); } } } : {});
  function save() {
    items = lines.get();
    if (!items.length) { toast('Add at least one item', 'err'); return; }
    const v = formValues(f);
    const data = { date: v.date || today(), customerId: cust.value || null, channelId: channel.value, stageId: stage.value, items, discount: Number(discount.value) || 0, shippingCharged: Number(shipCharged.value) || 0, shippingCost: Number(shipCost.value) || 0, paid: v.paid, paidAt: v.paid ? (o.paidAt || today()) : null, paymentMethod: v.paymentMethod, dueDate: v.dueDate || null, notes: v.notes,
      delivery: { ...(o.delivery || {}), method: v.method, carrier: v.carrier, tracking: v.tracking, address: v.address } };
    let rec;
    if (existing) { rec = store.update('orders', existing.id, data); if (existing.invoiceId) store.update('invoices', existing.invoiceId, { status: data.paid ? 'paid' : undefined }); }
    else rec = store.createOrder(data);
    m.close(); toast(existing ? 'Saved' : `${t.salesLabel.replace(/s$/, '')} recorded`); onDone && onDone(rec);
  }
  return m;
}

// ---------- invoices ----------
export function invoiceForm(existing, onDone, presets = {}) {
  const s = store.settings;
  const inv = existing || { date: today(), dueDate: addDays(today(), s.paymentTerms || 14), customerId: presets.customerId || '', items: presets.items || [], discount: 0, shipping: 0, vatRate: s.vatRegistered ? s.vatRate : 0, status: 'draft', notes: '', orderId: presets.orderId || null };
  const cust = customerPicker(inv.customerId, { allowNone: false });
  const discount = input({ name: 'discount', type: 'number', min: 0, value: inv.discount || 0 });
  const shipping = input({ name: 'shipping', type: 'number', min: 0, value: inv.shipping || 0 });
  const vat = input({ name: 'vatRate', type: 'number', min: 0, value: inv.vatRate || 0 });
  const totalsEl = h('div.totals');
  let items = inv.items || [];
  const lines = lineEditor(items, { withCost: false, onChange: v => { items = v; recalc(); } });
  function recalc() {
    const tt = invoiceTotals({ items, discount: Number(discount.value), shipping: Number(shipping.value), vatRate: Number(vat.value) });
    setChildren(totalsEl, h('span', 'Subtotal'), h('span.num', fmt.money(tt.subtotal)), tt.discount ? h('span', 'Discount') : null, tt.discount ? h('span.num', '−' + fmt.money(tt.discount)) : null, tt.shipping ? h('span', 'Delivery') : null, tt.shipping ? h('span.num', fmt.money(tt.shipping)) : null, tt.vat ? h('span', `VAT ${vat.value}%`) : null, tt.vat ? h('span.num', fmt.money(tt.vat)) : null, h('span.big', 'Total due'), h('span.num.big', fmt.money(tt.total)));
  }
  [discount, shipping, vat].forEach(el => el.addEventListener('input', recalc));
  const f = h('form.form', { onSubmit: e => { e.preventDefault(); save(); } },
    grid(3, field('Bill to', cust), field('Invoice date', input({ name: 'date', type: 'date', value: inv.date })), field('Due date', input({ name: 'dueDate', type: 'date', value: inv.dueDate }))),
    h('h4', 'Items'), lines.el,
    grid(3, field('Discount', discount), field('Delivery / postage', shipping), field('VAT %', vat, s.vatRegistered ? '' : 'Leave at 0 unless VAT registered')),
    totalsEl,
    field('Notes on invoice', textarea({ name: 'notes', value: inv.notes || '', rows: 2, placeholder: 'Payment terms, thank you message, PO number…' })),
  );
  recalc();
  const m = modalWithFooter({ title: existing ? `Edit ${inv.number}` : 'New invoice', body: f, size: 'lg' }, save, existing ? { onDelete: async () => { if (await confirmDialog('Delete this invoice?')) { store.remove('invoices', existing.id); if (existing.orderId) store.update('orders', existing.orderId, { invoiceId: null }); m.close(); onDone && onDone(null); } } } : {});
  function save() {
    items = lines.get();
    if (!cust.value) { toast('Choose who to bill', 'err'); return; }
    if (!items.length) { toast('Add at least one line', 'err'); return; }
    const v = formValues(f);
    const data = { customerId: cust.value, date: v.date, dueDate: v.dueDate, items, discount: Number(discount.value) || 0, shipping: Number(shipping.value) || 0, vatRate: Number(vat.value) || 0, notes: v.notes };
    let rec;
    if (existing) rec = store.update('invoices', existing.id, data);
    else {
      rec = store.add('invoices', { number: store.nextNumber('invoice'), status: 'draft', orderId: inv.orderId || null, ...data });
      store.save();
      if (!rec.orderId) {
        // Standalone invoice: record a matching sale so reports include it
        const order = store.createOrder({ date: data.date, customerId: data.customerId, channelId: S().channels.find(c => c.id === 'bank')?.id || S().channels[0]?.id, items: items.map(it => ({ productId: it.productId, name: it.name, qty: it.qty, unitPrice: it.unitPrice, unitCost: it.productId ? (Number(S().products.find(p => p.id === it.productId)?.cost) || 0) : 0 })), discount: data.discount, shippingCharged: data.shipping, shippingCost: 0, paid: false, invoiceId: rec.id, stageId: S().stages[S().stages.length - 1]?.id, delivery: { method: 'in-person' }, notes: `From invoice ${rec.number}` });
        store.update('invoices', rec.id, { orderId: order.id });
        if (presets.timeEntryIds) for (const id of presets.timeEntryIds) store.update('timeEntries', id, { invoiced: true, invoiceId: rec.id });
      } else store.update('orders', rec.orderId, { invoiceId: rec.id });
    }
    m.close(); toast(existing ? 'Invoice saved' : `Invoice ${rec.number} created`); onDone && onDone(rec);
  }
  return m;
}

// ---------- expenses ----------
export function expenseForm(existing, onDone, presets = {}) {
  const e = existing || { date: today(), category: presets.category || EXPENSE_CATEGORIES[0], description: '', amount: '', vendor: '', recurring: 'none', orderId: presets.orderId || null };
  const mileage = input({ type: 'number', min: 0, placeholder: 'miles', style: { width: '110px' } });
  const amount = input({ name: 'amount', type: 'number', min: 0, value: e.amount, required: true });
  const cat = select({ name: 'category', value: e.category }, EXPENSE_CATEGORIES);
  const rate = store.settings.tax.mileageRate;
  const mileBox = h('div.row', h('span.muted', 'Mileage helper:'), mileage, h('span.muted', `× ${fmt.money(rate)}/mile =`), h('b', fmt.money(0)));
  mileage.addEventListener('input', () => { const v = round2(Number(mileage.value) * rate); mileBox.lastChild.textContent = fmt.money(v); amount.value = v; });
  const syncMile = () => { mileBox.hidden = cat.value !== 'Travel & mileage'; }; cat.addEventListener('change', syncMile);
  const linkOrder = select({ name: 'orderId', value: e.orderId || '' }, [{ value: '', label: '— General overhead —' }, ...S().orders.filter(o => !o.cancelled).slice(-60).reverse().map(o => ({ value: o.id, label: `${o.number} · ${fmt.date(o.date)} · ${o.items.map(i => i.name).join(', ').slice(0, 30)}` }))]);
  const f = h('form.form', { onSubmit: ev => { ev.preventDefault(); save(); } },
    grid(2, field('Date', input({ name: 'date', type: 'date', value: e.date })), field('Amount', amount)),
    grid(2, field('Category', cat), field('Paid to', input({ name: 'vendor', value: e.vendor || '', placeholder: 'Shop, website, person' }))),
    mileBox,
    field('What was it?', input({ name: 'description', value: e.description || '', placeholder: 'e.g. 50 mailing bags' })),
    grid(2, field('Repeats', select({ name: 'recurring', value: e.recurring || 'none' }, [{ value: 'none', label: 'One-off' }, { value: 'weekly', label: 'Every week' }, { value: 'monthly', label: 'Every month' }, { value: 'yearly', label: 'Every year' }]), 'Repeating costs are copied in automatically'), field('Link to a sale (optional)', linkOrder, 'Shows in that sale’s profit')),
    field('Receipt / reference', input({ name: 'receipt', value: e.receipt || '', placeholder: 'Receipt number, where the photo is saved…' })),
  );
  syncMile();
  const m = modalWithFooter({ title: existing ? 'Edit expense' : 'Record expense', body: f }, save, existing ? { onDelete: async () => { if (await confirmDialog('Delete this expense?')) { store.remove('expenses', existing.id); m.close(); onDone && onDone(null); } } } : {});
  function save() {
    const v = formValues(f);
    if (!(v.amount > 0)) { toast('Enter an amount', 'err'); return; }
    if (!v.description.trim()) v.description = v.category;
    v.orderId = v.orderId || null;
    const rec = existing ? store.update('expenses', existing.id, v) : store.add('expenses', v);
    if (!existing && v.recurring !== 'none') store.materializeRecurring();
    m.close(); toast('Expense recorded'); onDone && onDone(rec);
  }
  return m;
}

// ---------- time ----------
export function timeForm(existing, onDone, presets = {}) {
  const e = existing || { date: today(), customerId: presets.customerId || '', description: presets.description || '', minutes: presets.minutes || 60, rate: store.settings.hourlyRate, billable: true, invoiced: false };
  const hrs = input({ name: 'hours', type: 'number', min: 0, step: 0.25, value: round2((e.minutes || 0) / 60) });
  const f = h('form.form', { onSubmit: ev => { ev.preventDefault(); save(); } },
    grid(2, field('Date', input({ name: 'date', type: 'date', value: e.date })), field('Client', customerPicker(e.customerId))),
    field('What did you do?', input({ name: 'description', value: e.description || '', placeholder: 'Session, site visit, editing…' })),
    grid(2, field('Hours', hrs), field('Hourly rate', input({ name: 'rate', type: 'number', min: 0, value: e.rate }))),
    checkbox({ name: 'billable', checked: e.billable !== false }, 'Billable (can be invoiced)'),
  );
  const m = modalWithFooter({ title: existing ? 'Edit time entry' : 'Log time', body: f }, save, existing ? { onDelete: async () => { if (await confirmDialog('Delete this time entry?')) { store.remove('timeEntries', existing.id); m.close(); onDone && onDone(null); } } } : {});
  function save() {
    const v = formValues(f);
    const data = { date: v.date, customerId: v.customerId || null, description: v.description, minutes: Math.round((Number(v.hours) || 0) * 60), rate: Number(v.rate) || 0, billable: v.billable };
    if (!data.minutes) { toast('Enter the hours', 'err'); return; }
    const rec = existing ? store.update('timeEntries', existing.id, data) : store.add('timeEntries', { invoiced: false, ...data });
    m.close(); toast('Time logged'); onDone && onDone(rec);
  }
  return m;
}

// ---------- tasks ----------
export function taskForm(existing, onDone, presets = {}) {
  const t = existing || { title: presets.title || '', due: presets.due || '', priority: 'normal', notes: '', recurring: 'none', tag: presets.tag || '' };
  const f = h('form.form', { onSubmit: ev => { ev.preventDefault(); save(); } },
    field('Task', input({ name: 'title', value: t.title, required: true, placeholder: 'What needs doing?' })),
    grid(3, field('Due', input({ name: 'due', type: 'date', value: t.due || '' })), field('Priority', select({ name: 'priority', value: t.priority || 'normal' }, PRIORITIES.map(p => ({ value: p, label: p[0].toUpperCase() + p.slice(1) })))), field('Repeats', select({ name: 'recurring', value: t.recurring || 'none' }, [{ value: 'none', label: 'No' }, { value: 'daily', label: 'Daily' }, { value: 'weekly', label: 'Weekly' }, { value: 'monthly', label: 'Monthly' }]))),
    grid(2, field('Tag', input({ name: 'tag', value: t.tag || '', placeholder: 'Admin, Marketing, Orders…' })), field('Link to customer', customerPicker(t.customerId))),
    field('Notes', textarea({ name: 'notes', value: t.notes || '', rows: 2 })),
  );
  const m = modalWithFooter({ title: existing ? 'Edit task' : 'New task', body: f }, save, existing ? { onDelete: async () => { if (await confirmDialog('Delete this task?')) { store.remove('tasks', existing.id); m.close(); onDone && onDone(null); } } } : {});
  function save() {
    const v = formValues(f); if (!v.title.trim()) { toast('Give the task a name', 'err'); return; }
    v.customerId = v.customerId || null;
    const rec = existing ? store.update('tasks', existing.id, v) : store.add('tasks', { done: false, ...v });
    m.close(); onDone && onDone(rec);
  }
  return m;
}

export function processForm(existing, onDone) {
  const p = existing || { name: '', trigger: '', steps: [] };
  const stepsBox = h('div.lines');
  const stepInputs = [];
  function addStep(text = '') {
    const inp = input({ value: text, placeholder: `Step ${stepInputs.length + 1}` });
    const row = h('div.row', h('span.drag-handle', '☰'), h('div', { style: { flex: 1 } }, inp), h('button.icon-btn', { type: 'button', 'aria-label': 'Remove step', onClick: () => { stepInputs.splice(stepInputs.indexOf(inp), 1); row.remove(); } }, '✕'));
    stepInputs.push(inp); stepsBox.insertBefore(row, addBtn);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); addStep(); stepInputs[stepInputs.length - 1].focus(); } });
  }
  const addBtn = h('button.btn.btn-sm.btn-ghost', { type: 'button', onClick: () => { addStep(); stepInputs[stepInputs.length - 1].focus(); } }, '+ Add step');
  stepsBox.appendChild(addBtn);
  (p.steps.length ? p.steps : [{ text: '' }, { text: '' }, { text: '' }]).forEach(s => addStep(s.text));
  const f = h('form.form', { onSubmit: ev => { ev.preventDefault(); save(); } },
    grid(2, field('Process name', input({ name: 'name', value: p.name, required: true, placeholder: 'e.g. Fulfil an order' })), field('When do you run it?', input({ name: 'trigger', value: p.trigger || '', placeholder: 'Every new order, weekly, monthly…' }))),
    h('h4', 'Steps'), h('p.muted', 'Press Enter to add the next step.'), stepsBox,
  );
  const m = modalWithFooter({ title: existing ? 'Edit process' : 'New process / checklist', body: f }, save, existing ? { onDelete: async () => { if (await confirmDialog('Delete this process?')) { store.remove('processes', existing.id); m.close(); onDone && onDone(null); } } } : {});
  function save() {
    const v = formValues(f); if (!v.name.trim()) { toast('Give it a name', 'err'); return; }
    const steps = stepInputs.map(i => i.value.trim()).filter(Boolean).map(text => ({ id: uid(), text }));
    if (!steps.length) { toast('Add at least one step', 'err'); return; }
    const rec = existing ? store.update('processes', existing.id, { name: v.name, trigger: v.trigger, steps }) : store.add('processes', { name: v.name, trigger: v.trigger, steps });
    m.close(); onDone && onDone(rec);
  }
  return m;
}

/** Turn unbilled time for one customer into an invoice */
export function invoiceFromTime(customerId, onDone) {
  const entries = unbilledTime(S()).filter(t => (t.customerId || '') === (customerId || ''));
  if (!entries.length) { toast('No unbilled time for this client', 'err'); return; }
  const byRate = new Map();
  for (const t of entries) { const k = t.rate; if (!byRate.has(k)) byRate.set(k, { minutes: 0, descs: new Set() }); byRate.get(k).minutes += t.minutes; byRate.get(k).descs.add(t.description || 'Work'); }
  const items = [...byRate.entries()].map(([rate, g]) => ({ name: `${[...g.descs].slice(0, 3).join(', ')} – ${fmt.hours(g.minutes)}`, qty: round2(g.minutes / 60), unitPrice: rate, unitCost: 0 }));
  return invoiceForm(null, onDone, { customerId, items, timeEntryIds: entries.map(e => e.id) });
}
