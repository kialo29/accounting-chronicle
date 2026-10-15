// ---------------------------------------------------------------
// templates.js – business-type presets: pipeline stages, channels,
// products, processes, launch checklist and tips
// ---------------------------------------------------------------

export const CHANNEL_PRESETS = {
  direct:   { id: 'direct',   name: 'Direct / cash',    feePct: 0,    feeFixed: 0 },
  bank:     { id: 'bank',     name: 'Bank transfer',    feePct: 0,    feeFixed: 0 },
  vinted:   { id: 'vinted',   name: 'Vinted',           feePct: 0,    feeFixed: 0 },
  ebay:     { id: 'ebay',     name: 'eBay',             feePct: 0,    feeFixed: 0 },
  depop:    { id: 'depop',    name: 'Depop',            feePct: 0,    feeFixed: 0 },
  etsy:     { id: 'etsy',     name: 'Etsy',             feePct: 10.5, feeFixed: 0.40 },
  amazon:   { id: 'amazon',   name: 'Amazon',           feePct: 15,   feeFixed: 0 },
  shopify:  { id: 'shopify',  name: 'Own website',      feePct: 1.7,  feeFixed: 0.25 },
  stripe:   { id: 'stripe',   name: 'Stripe / card link', feePct: 1.5, feeFixed: 0.20 },
  paypal:   { id: 'paypal',   name: 'PayPal',           feePct: 2.9,  feeFixed: 0.30 },
  sumup:    { id: 'sumup',    name: 'Card reader',      feePct: 1.69, feeFixed: 0 },
  market:   { id: 'market',   name: 'Market stall',     feePct: 0,    feeFixed: 0 },
  agency:   { id: 'agency',   name: 'Agency / platform', feePct: 20,  feeFixed: 0 },
  fb:       { id: 'fb',       name: 'Facebook Marketplace', feePct: 0, feeFixed: 0 },
};

export const EXPENSE_CATEGORIES = [
  'Stock & goods for resale', 'Materials & ingredients', 'Platform & payment fees', 'Postage & packaging',
  'Travel & mileage', 'Marketing & advertising', 'Software & subscriptions', 'Equipment & tools',
  'Phone & internet', 'Training & books', 'Insurance', 'Professional fees', 'Home office', 'Other',
];

export const PRIORITIES = ['low', 'normal', 'high'];

const launchCommon = [
  'Open a separate bank account (or pot) just for the business',
  'Decide your prices with the margin calculator in Products',
  'Set up your invoice details and payment info in Settings',
  'Record every expense from day one, even the small ones',
  'Check whether you need to register with HMRC for Self Assessment (over £1,000 trading income)',
  'Set a monthly revenue goal in Settings',
];

export const BUSINESS_TYPES = {
  reseller: {
    key: 'reseller', label: 'Reseller', icon: '👕', tagline: 'Vinted, eBay, Depop, Facebook Marketplace',
    salesLabel: 'Orders', customerLabel: 'Buyers', hourly: false, stock: true,
    stages: [{ name: 'Sold' }, { name: 'Packed' }, { name: 'Shipped' }, { name: 'Delivered' }],
    channels: ['vinted', 'ebay', 'depop', 'fb', 'direct'],
    products: [
      { name: 'Vintage denim jacket', type: 'product', price: 28, cost: 6, stockIn: 1, category: 'Clothing' },
      { name: 'Branded trainers', type: 'product', price: 45, cost: 15, stockIn: 1, category: 'Footwear' },
    ],
    processes: [
      { name: 'List a new item', steps: ['Photograph in natural light (front, back, label, flaws)', 'Measure and note condition', 'Check sold prices for the same item', 'Write title with brand, size, colour, keywords', 'Set price with margin calculator', 'List and share to followers'] },
      { name: 'Fulfil an order', steps: ['Print the shipping label', 'Pack with thank-you note', 'Drop off and keep proof of postage', 'Mark as Shipped in the app', 'Message the buyer with tracking'] },
    ],
    launch: ['Decide what you sell and where you source it (charity shops, car boots, wholesale)', 'Buy packaging in bulk (mailers, tissue, tape)', ...launchCommon],
    tips: ['Vinted and Depop buyers pay the platform fee, so your margin is price minus what you paid minus postage you cover.', 'Log the price you paid for every item when you buy it. Your profit is only accurate if your costs are.', 'Keep proof of postage. Lost parcels without it come out of your pocket.'],
  },
  maker: {
    key: 'maker', label: 'Maker / Crafter', icon: '🧶', tagline: 'Handmade goods, Etsy, markets, custom orders',
    salesLabel: 'Orders', customerLabel: 'Customers', hourly: false, stock: true,
    stages: [{ name: 'New order' }, { name: 'Making' }, { name: 'Packed' }, { name: 'Shipped' }, { name: 'Delivered' }],
    channels: ['etsy', 'market', 'shopify', 'direct'],
    products: [
      { name: 'Hand-poured soy candle', type: 'product', price: 16, cost: 4.2, stockIn: 20, category: 'Candles' },
      { name: 'Custom name print (A4)', type: 'product', price: 22, cost: 3.5, stockIn: 0, category: 'Prints' },
    ],
    processes: [
      { name: 'Make a batch', steps: ['Check material stock and reorder if low', 'Cost the batch (materials ÷ units)', 'Make, cure, quality check', 'Update stock in Products', 'Photograph new designs'] },
      { name: 'Ship an order', steps: ['Pack securely with branded insert', 'Print label and post', 'Mark Shipped and add tracking', 'Ask for a review after delivery'] },
    ],
    launch: ['Work out the true unit cost of each product (materials, packaging, your time)', 'Check product safety labelling rules for what you make (e.g. CLP for candles)', ...launchCommon],
    tips: ['Price for the business, not for your mates. Materials + packaging + fees + your time, then a margin on top.', 'Etsy charges a listing fee, a transaction fee and a payment fee. The app treats them as one combined rate you can adjust.', 'Track hours on custom work so you know your real hourly rate.'],
  },
  tutor: {
    key: 'tutor', label: 'Tutor / Coach', icon: '📚', tagline: 'Private tuition, music lessons, coaching, PT',
    salesLabel: 'Bookings', customerLabel: 'Students / clients', hourly: true, stock: false,
    stages: [{ name: 'Enquiry' }, { name: 'Booked' }, { name: 'Delivered' }, { name: 'Invoiced' }],
    channels: ['bank', 'direct', 'agency', 'stripe'],
    products: [
      { name: '1:1 session (60 min)', type: 'service', price: 35, cost: 0, category: 'Sessions' },
      { name: 'Block of 5 sessions', type: 'service', price: 160, cost: 0, category: 'Sessions' },
      { name: 'Exam prep pack', type: 'product', price: 15, cost: 2, stockIn: 10, category: 'Resources' },
    ],
    processes: [
      { name: 'Onboard a new student', steps: ['Free 15-minute intro call', 'Agree goals, level and schedule', 'Send terms, cancellation policy and payment details', 'Create them as a customer in the app', 'Book the first session'] },
      { name: 'End of month admin', steps: ['Log all sessions in Time', 'Create invoices for unbilled time', 'Chase anything overdue', 'Record expenses (books, travel, subscriptions)'] },
    ],
    launch: ['Get a DBS check if you work with children', 'Write a short cancellation and payment policy', 'Decide hourly rate and block-booking discount', ...launchCommon],
    tips: ['Use the timer in Time for every session, then turn unbilled hours into an invoice in one click.', 'Charge for blocks up front. Cash in hand beats chasing invoices.', 'Travel to a student’s home counts as a business cost. Log mileage.'],
  },
  trader: {
    key: 'trader', label: 'Trades & Services', icon: '🔧', tagline: 'Cleaning, gardening, handyman, beauty, dog walking',
    salesLabel: 'Jobs', customerLabel: 'Clients', hourly: true, stock: false,
    stages: [{ name: 'Quote' }, { name: 'Booked' }, { name: 'In progress' }, { name: 'Complete' }],
    channels: ['bank', 'direct', 'sumup', 'agency'],
    products: [
      { name: 'Standard visit (2 hours)', type: 'service', price: 50, cost: 0, category: 'Services' },
      { name: 'Hourly rate', type: 'hourly', price: 25, cost: 0, category: 'Services' },
      { name: 'Deep clean / one-off', type: 'service', price: 120, cost: 10, category: 'Services' },
    ],
    processes: [
      { name: 'Quote a job', steps: ['Visit or call to scope the job', 'Estimate hours and materials', 'Send written quote with validity date', 'Follow up after 3 days', 'Book it in when accepted'] },
      { name: 'Complete a job', steps: ['Confirm the day before', 'Do the job, take before/after photos', 'Log time and materials', 'Invoice on the spot', 'Ask for a review or referral'] },
    ],
    launch: ['Get public liability insurance', 'Decide your call-out area and minimum charge', 'Set up a card reader or payment link for on-the-spot payment', ...launchCommon],
    tips: ['Invoice on the day. The longer you wait, the longer you wait to be paid.', 'Materials bought for a job go on the job so you can see its true margin.', 'Mileage at 45p per mile adds up fast. Log every trip.'],
  },
  freelancer: {
    key: 'freelancer', label: 'Freelancer / Creative', icon: '💻', tagline: 'Design, writing, video, photography, dev',
    salesLabel: 'Projects', customerLabel: 'Clients', hourly: true, stock: false,
    stages: [{ name: 'Brief' }, { name: 'In progress' }, { name: 'In review' }, { name: 'Delivered' }],
    channels: ['bank', 'stripe', 'paypal', 'agency'],
    products: [
      { name: 'Day rate', type: 'service', price: 300, cost: 0, category: 'Services' },
      { name: 'Hourly rate', type: 'hourly', price: 45, cost: 0, category: 'Services' },
      { name: 'Logo package', type: 'service', price: 450, cost: 0, category: 'Packages' },
    ],
    processes: [
      { name: 'Start a project', steps: ['Agree scope, deliverables and revisions in writing', 'Take a 50% deposit', 'Create the project and a customer in the app', 'Track time against it', 'Deliver, invoice the balance'] },
      { name: 'Monthly admin', steps: ['Invoice all delivered work', 'Chase overdue invoices', 'Log subscriptions and software costs', 'Review profit by client'] },
    ],
    launch: ['Write a simple terms-of-work template (scope, revisions, payment terms)', 'Build a one-page portfolio', ...launchCommon],
    tips: ['Deposits protect you from clients who vanish. Make them the default.', 'Fixed-price work still needs time tracking, or you never learn which jobs are worth it.', 'Software subscriptions are allowable expenses. Log them once as recurring and forget about it.'],
  },
  food: {
    key: 'food', label: 'Food & Drink', icon: '🧁', tagline: 'Baking, meal prep, cakes, market food',
    salesLabel: 'Orders', customerLabel: 'Customers', hourly: false, stock: true,
    stages: [{ name: 'Order' }, { name: 'Prep' }, { name: 'Ready' }, { name: 'Collected' }],
    channels: ['direct', 'bank', 'market', 'sumup'],
    products: [
      { name: 'Celebration cake (8")', type: 'product', price: 55, cost: 12, category: 'Cakes' },
      { name: 'Box of 12 cupcakes', type: 'product', price: 24, cost: 6, category: 'Cupcakes' },
      { name: 'Brownie box', type: 'product', price: 14, cost: 3.5, stockIn: 10, category: 'Treats' },
    ],
    processes: [
      { name: 'Take a custom order', steps: ['Confirm date, size, flavour, allergens, collection', 'Cost it and quote', 'Take deposit', 'Add to Orders with the due date', 'Buy ingredients and log the expense'] },
      { name: 'Weekly reset', steps: ['Check stock and ingredients', 'Plan baking days', 'Update menu and prices', 'Record all receipts'] },
    ],
    launch: ['Register your food business with the council (free, 28 days before trading)', 'Get a Level 2 food hygiene certificate', 'Set up allergen labelling', ...launchCommon],
    tips: ['Ingredients are your biggest cost. Weigh and cost every recipe once, then reuse it.', 'Deposits on custom orders stop no-shows eating your profit.', 'Packaging and labels are part of unit cost, not an afterthought.'],
  },
  creator: {
    key: 'creator', label: 'Content Creator', icon: '🎥', tagline: 'YouTube, newsletters, digital products, sponsorships',
    salesLabel: 'Deals', customerLabel: 'Sponsors / clients', hourly: false, stock: false,
    stages: [{ name: 'Pitch' }, { name: 'Agreed' }, { name: 'In production' }, { name: 'Published' }],
    channels: ['bank', 'paypal', 'stripe', 'agency'],
    products: [
      { name: 'Sponsored video', type: 'service', price: 500, cost: 0, category: 'Sponsorships' },
      { name: 'Digital template', type: 'product', price: 12, cost: 0, category: 'Digital' },
      { name: 'Newsletter ad slot', type: 'service', price: 80, cost: 0, category: 'Ads' },
    ],
    processes: [
      { name: 'Close a sponsorship', steps: ['Send media kit and rates', 'Agree deliverables, dates and usage rights', 'Invoice 50% up front', 'Produce and send for approval', 'Publish, send final invoice with link'] },
    ],
    launch: ['Create a one-page media kit with your numbers', 'Decide your rates per deliverable', ...launchCommon],
    tips: ['Ad revenue, sponsorships, affiliates and products are all income. Log each as a sale so you can see what actually pays.', 'Equipment over a few hundred pounds can still be claimed; keep the receipt.', 'Give every digital product a cost of zero and a channel fee so margin is realistic.'],
  },
  general: {
    key: 'general', label: 'Something else', icon: '✨', tagline: 'Any small business or side hustle',
    salesLabel: 'Sales', customerLabel: 'Customers', hourly: true, stock: true,
    stages: [{ name: 'New' }, { name: 'In progress' }, { name: 'Done' }],
    channels: ['direct', 'bank', 'stripe'],
    products: [{ name: 'Example product', type: 'product', price: 20, cost: 8, stockIn: 10, category: 'General' }, { name: 'Example service', type: 'service', price: 50, cost: 0, category: 'General' }],
    processes: [{ name: 'Weekly admin', steps: ['Record sales and expenses', 'Chase unpaid invoices', 'Check stock', 'Review profit and margin on the dashboard'] }],
    launch: [...launchCommon],
    tips: ['Record everything the day it happens. Catch-up bookkeeping is where side hustles die.', 'Margin, not revenue, tells you if this is worth your time.', 'Export a backup from Settings once a month.'],
  },
};

export const TEMPLATE_ORDER = ['reseller', 'maker', 'tutor', 'trader', 'freelancer', 'food', 'creator', 'general'];

export const CURRENCIES = [
  { value: 'GBP', label: '£ GBP – British pound', locale: 'en-GB' },
  { value: 'USD', label: '$ USD – US dollar', locale: 'en-US' },
  { value: 'EUR', label: '€ EUR – Euro', locale: 'en-IE' },
  { value: 'AUD', label: '$ AUD – Australian dollar', locale: 'en-AU' },
  { value: 'CAD', label: '$ CAD – Canadian dollar', locale: 'en-CA' },
  { value: 'NZD', label: '$ NZD – New Zealand dollar', locale: 'en-NZ' },
  { value: 'INR', label: '₹ INR – Indian rupee', locale: 'en-IN' },
  { value: 'ZAR', label: 'R ZAR – South African rand', locale: 'en-ZA' },
];

// UK Self Assessment figures for 2025/26 (sole trader). Editable in Settings.
export const UK_TAX_DEFAULTS = {
  personalAllowance: 12570,
  basicRateLimit: 50270,
  higherRateLimit: 125140,
  basicRate: 0.20,
  higherRate: 0.40,
  additionalRate: 0.45,
  class4LowerLimit: 12570,
  class4UpperLimit: 50270,
  class4MainRate: 0.06,
  class4UpperRate: 0.02,
  tradingAllowance: 1000,
  mileageRate: 0.45,
};
