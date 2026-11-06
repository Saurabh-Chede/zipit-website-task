import {
  PackageCheck,
  Bike,
  Warehouse,
  Truck,
  Plane,
  Ship,
  Rocket,
  ShoppingBag,
  MessageCircle,
  Megaphone,
  TrendingUp,
  Landmark,
  Gauge,
  Network,
} from 'lucide-react';

// `to` is where "Get Started" navigates. Products without a route just close the panel.
export const products = {
  domestic: {
    id: 'domestic',
    title: 'Domestic Shipping',
    description: 'Multiple couriers, SDD/NDD, widest reach',
    icon: PackageCheck,
    tone: '#dcdfea',
    to: '/dashboard',
  },
  instant: {
    id: 'instant',
    title: 'Instant Deliveries',
    description: 'Multiple couriers, Hyperlocal, Intracity',
    icon: Bike,
    tone: '#cbb0e8',
  },
  warehousing: {
    id: 'warehousing',
    title: 'Warehousing',
    description: 'End-to-end brand fulfilment',
    icon: Warehouse,
    tone: '#cfe5fa',
  },
  cargo: {
    id: 'cargo',
    title: 'Cargo',
    description: 'Heavy shipments, FTL & PTL',
    icon: Truck,
    tone: '#f9dfc0',
  },
  intlParcels: {
    id: 'intlParcels',
    title: 'International Parcels',
    description: 'Ship to 220+ countries',
    icon: Plane,
    tone: '#bcc5fa',
  },
  intlCargo: {
    id: 'intlCargo',
    title: 'International Cargo',
    description: 'Air & Ocean freight',
    icon: Ship,
    tone: '#c9f5f7',
  },
  brandLaunch: {
    id: 'brandLaunch',
    title: 'Brand Launch',
    description: 'Expand your brand globally',
    icon: Rocket,
    tone: '#d3e6fb',
  },
  checkout: {
    id: 'checkout',
    title: 'Checkout',
    description: 'Simplified one-click checkout',
    icon: ShoppingBag,
    tone: '#b9d0fa',
  },
  whatsapp: {
    id: 'whatsapp',
    title: 'Whatsapp Solutions',
    description: 'Marketing, commerce, chatbot & more',
    icon: MessageCircle,
    tone: '#c3e0c4',
  },
  marketing: {
    id: 'marketing',
    title: 'Marketing',
    description: 'Digital and influencer marketing & more',
    icon: Megaphone,
    tone: '#d2b9f7',
  },
  trends: {
    id: 'trends',
    title: 'Trends',
    description: 'E-commerce analytics for Bharat',
    icon: TrendingUp,
    tone: '#e8b5b9',
  },
  loan: {
    id: 'loan',
    title: 'Business Loan',
    description: 'Flexible Business loan up to ₹20 Lakhs',
    icon: Landmark,
    tone: '#dccdf7',
  },
  credit: {
    id: 'credit',
    title: 'Credit Score',
    description: 'Check your credit score for free',
    icon: Gauge,
    tone: '#b8dce0',
  },
  omnichannel: {
    id: 'omnichannel',
    title: 'Omnichannel',
    description: 'Manage all sales channels - online + offline at one place',
    icon: Network,
    tone: '#f1fad2',
  },
};

export const recentlyUsed = ['instant'];

export const productSections = [
  { id: 'shipping', title: 'Shipping & Fulfilment in India', items: ['domestic', 'instant', 'warehousing', 'cargo'] },
  { id: 'cross-border', title: 'Cross Border Commerce', items: ['intlParcels', 'intlCargo', 'brandLaunch'] },
  { id: 'growth', title: 'Growth & Marketing Solutions', items: ['checkout', 'whatsapp', 'marketing', 'trends'] },
  { id: 'finance', title: 'Financial Services', items: ['loan', 'credit'] },
  { id: 'other', title: 'Other Services', items: ['omnichannel'] },
];
