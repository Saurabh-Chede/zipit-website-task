// Order shape expected by <OrdersTable>:
// {
//   id, date,
//   customer: { name, phone },
//   product: { name, sku, quantity },
//   package: { weight, dimensions },
//   payment: { method, amount },
//   pickup: string,
//   status: string
// }
export const orders = [];

export const shipmentTypes = [
  { value: 'domestic', label: 'Domestic' },
  { value: 'international', label: 'International' },
];

export const searchRanges = [
  { value: 'week', label: 'Last week' },
  { value: 'month', label: 'Last month' },
  { value: 'year', label: 'Last one year' },
];

export const dateRanges = [
  { value: 'today', label: 'Today' },
  { value: '7', label: 'Last 7 days' },
  { value: '30', label: 'Last 30 days' },
  { value: '90', label: 'Last 90 days' },
];

export const orderTabs = [
  { id: 'new', label: 'New' },
  { id: 'ready', label: 'Ready To Ship' },
  { id: 'pickups', label: 'Pickups & Manifests' },
  { id: 'transit', label: 'In Transit' },
  { id: 'delivered', label: 'Delivered' },
  { id: 'rto', label: 'RTO' },
  { id: 'all', label: 'All' },
];

export const orderSubTabs = [
  { id: 'new', label: 'New' },
  { id: 'duplicate', label: 'Duplicate Orders' },
  { id: 'hold', label: 'On Hold' },
];

export const bulkActions = [
  { value: '', label: 'Select Bulk Action' },
  { value: 'ship', label: 'Ship Selected' },
  { value: 'hold', label: 'Put On Hold' },
  { value: 'cancel', label: 'Cancel Orders' },
];

export const tableColumns = [
  { key: 'order', label: 'Order Details' },
  { key: 'customer', label: 'Customer details' },
  { key: 'product', label: 'Product Details' },
  { key: 'package', label: 'Package Details' },
  { key: 'payment', label: 'Payment' },
  { key: 'pickup', label: 'Pickup Address' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' },
];

export const pageSizes = [15, 30, 50, 100].map((n) => ({ value: String(n), label: String(n) }));
