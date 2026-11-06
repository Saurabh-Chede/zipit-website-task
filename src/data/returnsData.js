import { dateRanges, bulkActions, pageSizes } from './ordersData.js';

// Return shape expected by <ReturnsTable>:
// {
//   id, awb, date,
//   buyer:     { name, phone },
//   product:   { name, sku, quantity },
//   dimensions: string,
//   warehouse:  string,
//   refund:    { amount, status },
//   status:    'new' | 'pickup' | 'transit' | 'received' | 'undelivered' | 'refund'
// }
export const returns = [];

export const returnTabs = [
  { id: 'pending', label: 'Pending Requests' },
  { id: 'new', label: 'New' },
  { id: 'pickup', label: 'Pickup Scheduled' },
  { id: 'transit', label: 'In Transit' },
  { id: 'received', label: 'Return Received' },
  { id: 'undelivered', label: 'Undelivered Returns' },
  { id: 'all', label: 'All' },
  { id: 'refund', label: 'Pending Refund' },
];

export const returnReasons = [
  { value: '', label: 'Select Reason' },
  { value: 'damaged', label: 'Damaged product' },
  { value: 'wrong-item', label: 'Wrong item received' },
  { value: 'size', label: 'Size / fit issue' },
  { value: 'not-needed', label: 'No longer needed' },
];

export const returnColumns = [
  'Return Details',
  'Buyer Details',
  'Product Details',
  'Dimensions',
  'Warehouse Address',
  'Refund Details',
  'Action',
];

// Reused from the Orders page so both stay in sync
export { dateRanges, bulkActions, pageSizes };
