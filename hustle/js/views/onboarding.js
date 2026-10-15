import { h, field, input, select, grid, btn, toast } from '../util.js';
import { store } from '../store.js';
import { BUSINESS_TYPES, TEMPLATE_ORDER, CURRENCIES } from '../templates.js';

export function renderOnboarding(onDone) {
  const root = h('div.onboard');
  let step = 1; let typeKey = store.settings.type && store.settings.type !== 'general' ? store.settings.type : null;
  const draw = () => {
    root.replaceChildren();
    const steps = h('div.steps', ['Pick your hustle', 'Your details', 'Ready'].map((s, i) => h('span', { class: i + 1 === step ? 'on' : '' }, `${i + 1}. ${s}`)));
    if (step === 1) {
      const grid = h('div.type-grid');
      for (const k of TEMPLATE_ORDER) {
        const t = BUSINESS_TYPES[k];
        grid.appendChild(h('button.type-card', { type: 'button', class: typeKey === k ? 'selected' : '', onClick: () => { typeKey = k; draw(); } }, h('span.ti', t.icon), h('b', t.label), h('small', t.tagline)));
      }
      root.append(h('h1', 'Welcome to Hustle HQ'), h('p.lead', 'One place to run a side hustle or small business: sales, invoices, costs and margins, delivery, time, tasks and tax. Everything is saved on this device. Start by picking the closest match, you can change anything later.'), steps, grid,
        h('div.row', { style: { marginTop: '20px', justifyContent: 'flex-end' } }, btn('Continue', () => { if (!typeKey) { toast('Pick a type to continue', 'err'); return; } step = 2; draw(); })));
    } else if (step === 2) {
      const t = BUSINESS_TYPES[typeKey];
      const name = input({ value: store.settings.businessName, placeholder: 'e.g. Second Thread, Spotless by Sam', required: true });
      const owner = input({ value: store.settings.ownerName, placeholder: 'Your name' });
      const cur = select({ value: store.settings.currency }, CURRENCIES);
      const rate = input({ type: 'number', min: 0, value: store.settings.hourlyRate });
      const goal = input({ type: 'number', min: 0, value: store.settings.goalRevenue });
      root.append(h('h1', `${t.icon} ${t.label}`), h('p.lead', 'A few details for your dashboard and invoices.'), steps,
        h('div.card', h('div.form',
          grid(2, field('Business or trading name', name), field('Your name', owner)),
          grid(3, field('Currency', cur), field('Your hourly rate', rate, 'Used for time tracking and pricing'), field('Monthly revenue goal', goal)),
        )),
        h('div.row', { style: { marginTop: '20px', justifyContent: 'space-between' } }, btn('Back', () => { step = 1; draw(); }, 'btn-ghost'), btn('Continue', () => {
          if (!name.value.trim()) { toast('Give your business a name', 'err'); return; }
          store.setSettings({ businessName: name.value.trim(), ownerName: owner.value.trim(), hourlyRate: Number(rate.value) || 0, goalRevenue: Number(goal.value) || 0 });
          store.setCurrency(cur.value);
          step = 3; draw();
        })));
    } else {
      const t = BUSINESS_TYPES[typeKey];
      root.append(h('h1', 'You’re set up'), steps,
        h('div.grid.grid-2',
          h('div.card', h('h3', 'Start with your own data'), h('p.muted', { style: { margin: '8px 0 14px' } }, `We’ll add ${t.label.toLowerCase()} pipeline stages, sales channels, a couple of example products you can edit, process checklists and a launch checklist.`), btn('Start fresh', () => { store.applyTemplate(typeKey); store.setSettings({ onboarded: true, demo: false }); onDone(); })),
          h('div.card', h('h3', 'Explore with sample data'), h('p.muted', { style: { margin: '8px 0 14px' } }, 'Six months of made-up sales, expenses and invoices so you can see every screen working. Clear it in one click later.'), btn('Load sample data', () => { const keep = { businessName: store.settings.businessName, ownerName: store.settings.ownerName, hourlyRate: store.settings.hourlyRate, currency: store.settings.currency, locale: store.settings.locale, goalRevenue: store.settings.goalRevenue }; store.loadDemo(typeKey); store.setSettings({ ...keep, businessName: keep.businessName || store.settings.businessName }); onDone(); }, 'btn-ghost')),
        ),
        h('div.row', { style: { marginTop: '16px' } }, btn('Back', () => { step = 2; draw(); }, 'btn-ghost')));
    }
  };
  draw();
  return root;
}
