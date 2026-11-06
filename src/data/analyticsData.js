// Dashboard (Analytics) page data. Everything is empty/zero for now:
// pass real arrays/numbers here and the sections render charts/values instead of the empty state.

export const dashboardViews = [
  { value: 'domestic', label: 'Domestic' },
  { value: 'international', label: 'International' },
];

export const analyticsTabs = [
  { id: 'overview', label: 'Performance Overview' },
  { id: 'shipments', label: 'Shipments' },
  { id: 'pickup', label: 'Pickup Performance' },
  { id: 'delivery', label: 'Delivery Performance' },
];

// Which sections each tab shows ('overview' shows everything)
export const tabSections = {
  shipments: ['shipment-overview'],
  pickup: ['pickup-performance'],
  delivery: ['delivery-performance', 'sla-adherence'],
};

export const analyticsDateRanges = [
  { value: '7', label: 'Last 7 Days' },
  { value: '30', label: 'Last 30 Days' },
  { value: '90', label: 'Last 90 Days' },
];

export const compareOptions = [
  { value: 'previous-period', label: 'Previous Period' },
  { value: 'previous-year', label: 'Previous Year' },
];

export const paymentModes = [
  { value: '', label: 'Payment Mode' },
  { value: 'prepaid', label: 'Prepaid' },
  { value: 'cod', label: 'COD' },
];

export const chartSections = [
  { id: 'shipment-overview', title: 'Shipment Overview', hint: 'Shipments assigned to a courier, created during the selected date range.', data: [] },
  { id: 'pickup-performance', title: 'Pickup Performance', hint: 'How quickly couriers pick up your shipments.', data: [] },
  { id: 'delivery-performance', title: 'Delivery Performance', hint: 'Delivered, in-transit and undelivered shipments.', data: [] },
  { id: 'sla-adherence', title: 'SLA Adherence', hint: 'Shipments delivered within the courier SLA.', data: [] },
];

export const analytics = {
  ndr: { shipments: 0, delivered: 0, reasons: [] },
  weight: { total: 0, open: 0, closed: 0, excessCharge: 0, openCharges: 0, closedCharges: 0 },
  cod: { upcoming: null }, // e.g. { amount: 12500, date: '12 Nov 2026' }
};
