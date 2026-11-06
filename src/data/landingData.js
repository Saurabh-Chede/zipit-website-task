import {
  Calculator,
  PackageCheck,
  MapPin,
  Wallet,
  RotateCcw,
  Share2,
} from 'lucide-react';

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why us', href: '#stats' },
];

export const features = [
  {
    icon: Calculator,
    title: 'Instant rate comparison',
    description: 'Enter two pincodes and compare courier prices and delivery times side by side.',
  },
  {
    icon: PackageCheck,
    title: 'One-click shipping',
    description: 'Turn synced or manual orders into shipments, with labels and pickups arranged for you.',
  },
  {
    icon: MapPin,
    title: 'Live tracking',
    description: 'Follow every parcel from pickup to doorstep and keep customers informed.',
  },
  {
    icon: Wallet,
    title: 'Wallet and cashback',
    description: 'Recharge once, ship from your balance and pick up offers along the way.',
  },
  {
    icon: RotateCcw,
    title: 'NDR and RTO control',
    description: 'Spot failed deliveries early and act on them before they turn into returns.',
  },
  {
    icon: Share2,
    title: 'Channel integrations',
    description: 'Connect your store so new orders land in your dashboard automatically.',
  },
];

export const steps = [
  {
    title: 'Create your account',
    description: 'Sign up with your email and finish a quick KYC to unlock shipping.',
  },
  {
    title: 'Add your orders',
    description: 'Create orders by hand or connect your sales channel to fetch them for you.',
  },
  {
    title: 'Ship and track',
    description: 'Pick a courier, print the label and follow each delivery in real time.',
  },
];

// Placeholder numbers for the demo. Replace with your real figures.
export const stats = [
  { value: '19,000+', label: 'Pincodes served' },
  { value: '25+', label: 'Courier partners' },
  { value: '60 sec', label: 'To create a shipment' },
  { value: '24x7', label: 'Order tracking' },
];

export const footerLinks = [
  { title: 'Product', links: ['Features', 'Rate calculator', 'Tracking', 'Integrations'] },
  { title: 'Company', links: ['About us', 'Careers', 'Blog', 'Contact'] },
  { title: 'Support', links: ['Help centre', 'Training', 'Terms', 'Privacy'] },
];
