import { Package, Download, Landmark } from 'lucide-react';

export const setupTasks = [
  {
    id: 'add-order',
    title: 'Add Order',
    description:
      'Create your first order in minutes, or connect your sales channel to fetch orders automatically',
    duration: 'Takes less than 3 mins',
    completed: true,
  },
  {
    id: 'recharge',
    title: 'Recharge Wallet',
    description: 'Add balance to your wallet and start shipping instantly.',
    duration: 'Takes less than 2 mins',
    completed: false,
    actionLabel: 'Recharge Wallet',
    offer: {
      text: '100% cashback on recharge of Rs.500',
      extra: '+2 Offers Available',
      actionLabel: 'Apply Now',
    },
  },
  {
    id: 'kyc',
    title: 'Complete KYC',
    description: 'Verify your KYC to unlock shipping access.',
    completed: true,
  },
];

export const helpVideos = [
  { id: 'kyc', title: 'How to Complete your KYC', accent: '#7c4dff', highlight: 'KYC' },
  { id: 'bank', title: 'How to Add Bank Details', accent: '#2dd4a7', highlight: 'Bank' },
];

export const nextActions = [
  {
    id: 'ship',
    icon: Package,
    title: 'Ship Orders',
    description: 'Start shipping your synced orders with just one click',
    duration: 'Takes less than a min',
    cta: 'Ship Order',
    dismissible: true,
  },
  {
    id: 'invoice',
    icon: Download,
    title: 'Download Invoice',
    description: 'Ensure your packages are ready for pickup.',
    duration: 'Takes less than a min',
    cta: 'Download',
    dismissible: true,
  },
  {
    id: 'bank',
    icon: Landmark,
    title: 'Setup Bank Details',
    description: 'Add your account details to receive remittances within a few days',
    duration: 'Takes less than 2 mins',
    cta: 'Add Details',
    dismissible: false,
  },
];

export const attentionTabs = [
  { id: 'operational', label: 'Operational' },
  { id: 'exceptions', label: 'Exceptions' },
  { id: 'others', label: 'Others' },
];

export const attentionStats = {
  operational: [
    { id: 'new-orders', label: 'New Orders', value: 1 },
    { id: 'poor-address', label: 'Poor Address Orders', value: 1 },
  ],
  exceptions: [
    { id: 'ndr', label: 'NDR Pending', value: 0 },
    { id: 'rto', label: 'RTO In Transit', value: 0 },
  ],
  others: [
    { id: 'weight', label: 'Weight Discrepancies', value: 0 },
    { id: 'pickup', label: 'Pickup Pending', value: 0 },
  ],
};

export const communityStats = [
  { id: 'sellers', value: '2 Lakh', label: 'Active Sellers', icon: 'users' },
  { id: 'pincodes', value: '19,000+', label: 'Pincodes', icon: 'pin' },
  { id: 'couriers', value: '250+', label: 'Courier Partners', icon: 'truck' },
  { id: 'orders', value: '50 Crore', label: 'Orders Delivered', icon: 'box' },
];
