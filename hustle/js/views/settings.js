import { h, fmt, field, input, select, textarea, checkbox, grid, btn, toast, confirmDialog, downloadFile, copyText, formValues, table, openModal } from '../util.js';
import { BUSINESS_TYPES, TEMPLATE_ORDER, CURRENCIES, UK_TAX_DEFAULTS } from '../templates.js';

export default {
  title: 'Settings',
  subtitle: () => 'Business details, invoices, pipeline stages, tax rates and backups',
  render(ctx) {
    const { state, store } = ctx; const s = state.settings;
    const root = h('div.grid.grid-2');

    // ---- business ----
    const bf = h('form.form', { onSubmit: e => { e.preventDefault(); saveBiz(); } },
      grid(2, field('Business name', input({ name: 'businessName', value: s.businessName })), field('Your name', input({ name: 'ownerName', value: s.ownerName }))),
      grid(2, field('Type of business', select({ name: 'type', value: s.type }, TEMPLATE_ORDER.map(k => ({ value: k, label: `${BUSINESS_TYPES[k].icon} ${BUSINESS_TYPES[k].label}` }))), 'Changes labels and tips, keeps your data'), field('Currency', select({ name: 'currency', value: s.currency }, CURRENCIES))),
      grid(2, field('Email', input({ name: 'email', type: 'email', value: s.email })), field('Phone', input({ name: 'phone', value: s.phone }))),
      field('Address (shown on invoices)', textarea({ name: 'address', value: s.address, rows: 2 })),
      grid(3, field('Your hourly rate', input({ name: 'hourlyRate', type: 'number', min: 0, value: s.hourlyRate })), field('Monthly revenue goal', input({ name: 'goalRevenue', type: 'number', min: 0, value: s.goalRevenue })), field('Monthly profit goal', input({ name: 'goalProfit', type: 'number', min: 0, value: s.goalProfit }))),
      h('div', btn('Save business details', saveBiz)));
    function saveBiz() { const v = formValues(bf); const cur = v.currency; delete v.currency; store.setSettings(v); store.setCurrency(cur); toast('Saved'); }
    root.appendChild(h('div.card', h('div.card-head', h('h3', 'Business')), bf));

    // ---- invoices ----
    const inf = h('form.form', { onSubmit: e => { e.preventDefault(); saveInv(); } },
      grid(3, field('Invoice prefix', input({ name: 'invoicePrefix', value: s.invoicePrefix })), field('Next invoice number', input({ name: 'nextInvoiceNo', type: 'number', min: 1, step: 1, value: s.nextInvoiceNo })), field('Payment terms (days)', input({ name: 'paymentTerms', type: 'number', min: 0, step: 1, value: s.paymentTerms }))),
      field('How to pay (bank details, PayPal, payment link)', textarea({ name: 'paymentDetails', value: s.paymentDetails, rows: 3, placeholder: 'Account name\nSort code 00-00-00\nAccount number 12345678\nReference: invoice number' })),
      field('Footer note on invoices', input({ name: 'invoiceFooter', value: s.invoiceFooter })),
      h('div.row', checkbox({ name: 'vatRegistered', checked: s.vatRegistered }, 'VAT registered'), h('div', { style: { width: '100px' } }, input({ name: 'vatRate', type: 'number', min: 0, value: s.vatRate, 'aria-label': 'VAT rate' })), h('span.muted', '% VAT'), h('div', { style: { flex: 1, minWidth: '140px' } }, input({ name: 'vatNumber', value: s.vatNumber || '', placeholder: 'VAT number' }))),
      h('p.muted', { style: { fontSize: '.82rem' } }, 'Most side hustles are not VAT registered. You only need to register once turnover passes £90,000 in a year.'),
      h('div', btn('Save invoice settings', saveInv)));
    function saveInv() { const v = formValues(inf); v.nextInvoiceNo = Math.max(1, Math.round(v.nextInvoiceNo || 1)); store.setSettings(v); toast('Saved'); }
    root.appendChild(h('div.card', h('div.card-head', h('h3', 'Invoices')), inf));

    // ---- stages ----
    const stagesCard = h('div.card', h('div.card-head', h('h3', `${ctx.type.salesLabel} pipeline stages`), h('small', 'Shown on the board, in order')));
    const list = h('div.list');
    state.stages.forEach((st, i) => {
      const name = input({ value: st.name, onChange: e => store.update('stages', st.id, { name: e.target.value.trim() || st.name }) });
      list.appendChild(h('div.list-item', h('span.muted', `${i + 1}.`), h('div.li-main', name),
        btn('↑', () => move(i, -1), 'btn-sm btn-ghost', { disabled: i === 0 }), btn('↓', () => move(i, 1), 'btn-sm btn-ghost', { disabled: i === state.stages.length - 1 }),
        btn('✕', async () => { if (state.stages.length <= 1) { toast('Keep at least one stage', 'err'); return; } if (await confirmDialog(`Remove “${st.name}”? Sales in it move to the first stage.`, { okText: 'Remove' })) { const first = state.stages.find(x => x.id !== st.id); state.orders.forEach(o => { if (o.stageId === st.id) o.stageId = first.id; }); store.remove('stages', st.id); } }, 'btn-sm btn-ghost')));
    });
    function move(i, d) { const a = state.stages; const j = i + d; if (j < 0 || j >= a.length) return; [a[i], a[j]] = [a[j], a[i]]; store.save(); }
    const newStage = input({ placeholder: 'New stage name' });
    stagesCard.append(list, h('div.row', { style: { marginTop: '10px' } }, h('div', { style: { flex: 1 } }, newStage), btn('Add stage', () => { if (!newStage.value.trim()) return; store.add('stages', { name: newStage.value.trim() }); }, 'btn-sm')));
    root.appendChild(stagesCard);

    // ---- tax ----
    const t = s.tax;
    const tf = h('form.form', { onSubmit: e => { e.preventDefault(); saveTax(); } },
      grid(3, field('Personal allowance', input({ name: 'personalAllowance', type: 'number', value: t.personalAllowance })), field('Basic rate limit', input({ name: 'basicRateLimit', type: 'number', value: t.basicRateLimit })), field('Higher rate limit', input({ name: 'higherRateLimit', type: 'number', value: t.higherRateLimit }))),
      grid(3, field('Basic rate', input({ name: 'basicRate', type: 'number', step: 0.01, value: t.basicRate })), field('Higher rate', input({ name: 'higherRate', type: 'number', step: 0.01, value: t.higherRate })), field('Additional rate', input({ name: 'additionalRate', type: 'number', step: 0.01, value: t.additionalRate }))),
      grid(3, field('Class 4 NI main rate', input({ name: 'class4MainRate', type: 'number', step: 0.01, value: t.class4MainRate })), field('Class 4 NI upper rate', input({ name: 'class4UpperRate', type: 'number', step: 0.01, value: t.class4UpperRate })), field('Trading allowance', input({ name: 'tradingAllowance', type: 'number', value: t.tradingAllowance }))),
      grid(2, field('Mileage rate per mile', input({ name: 'mileageRate', type: 'number', step: 0.01, value: t.mileageRate }))),
      h('div.row', btn('Save tax rates', saveTax), btn('Reset to 2025/26 defaults', () => { store.setSettings({ tax: { ...UK_TAX_DEFAULTS } }); toast('Reset'); }, 'btn-ghost')));
    function saveTax() { const v = formValues(tf); store.setSettings({ tax: { ...t, ...v, class4LowerLimit: v.personalAllowance, class4UpperLimit: v.basicRateLimit } }); toast('Saved'); }
    root.appendChild(h('div.card', h('div.card-head', h('h3', 'Tax rates (UK)'), h('small', 'Used for the estimate on Reports')), tf));

    // ---- data ----
    const fileIn = h('input', { type: 'file', accept: 'application/json,.json', hidden: true, onChange: async e => { const f = e.target.files[0]; if (!f) return; try { const text = await f.text(); if (await confirmDialog('Restore this backup? It replaces everything currently in the app.', { okText: 'Restore' })) { store.importJSON(text); toast('Backup restored'); location.reload(); } } catch (err) { toast(err.message || 'Could not read that file', 'err'); } } });
    const counts = `${state.orders.length} sales · ${state.invoices.length} invoices · ${state.expenses.length} expenses · ${state.customers.length} customers · ${state.products.length} products`;
    root.appendChild(h('div.card', h('div.card-head', h('h3', 'Your data')),
      h('p.muted', { style: { fontSize: '.88rem', marginBottom: '10px' } }, `Everything lives in this browser on this device (${counts}). Clearing browser data or switching devices loses it, so download a backup regularly. Backups are a single file you can restore here on any device.`),
      h('div.row',
        btn('Download backup', () => { if (!downloadFile(`hustlehq-backup-${new Date().toISOString().slice(0, 10)}.json`, store.exportJSON(), 'application/json')) toast('Download blocked in this viewer, use Copy instead', 'err'); }),
        btn('Copy backup to clipboard', async () => { if (await copyText(store.exportJSON())) toast('Copied. Paste it into a note or file.'); }, 'btn-ghost'),
        btn('Restore from file', () => fileIn.click(), 'btn-ghost'), fileIn,
        btn('Paste a backup', () => { const ta = textarea({ rows: 8, placeholder: 'Paste the backup text here' }); const m = openModal({ title: 'Restore from pasted backup', body: ta, footer: [btn('Cancel', () => m.close(), 'btn-ghost'), btn('Restore', async () => { try { if (await confirmDialog('Replace everything with this backup?', { okText: 'Restore' })) { store.importJSON(ta.value); m.close(); toast('Restored'); location.reload(); } } catch (err) { toast(err.message, 'err'); } })] }); }, 'btn-ghost')),
      h('h4', { style: { marginTop: '16px' } }, 'Danger zone'),
      h('div.row', { style: { marginTop: '8px' } },
        btn('Load sample data', async () => { if (await confirmDialog('Replace everything with sample data for your business type?', { okText: 'Load sample' })) { const keep = { businessName: s.businessName, ownerName: s.ownerName }; store.loadDemo(s.type); store.setSettings(keep); location.hash = 'dashboard'; } }, 'btn-ghost'),
        btn('Erase everything', async () => { if (await confirmDialog('Erase all data on this device? Download a backup first. This cannot be undone.', { okText: 'Erase everything' })) { store.reset(); location.hash = ''; location.reload(); } }, 'btn-danger'))));
    return root;
  },
};
