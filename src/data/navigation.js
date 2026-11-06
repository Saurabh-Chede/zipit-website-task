import {
  Home,
  BarChart3,
  ShoppingCart,
  PackageCheck,
  Unlock,
  Rocket,
  Wallet,
  UserCheck,
  Share2,
  Wrench,
  Lock,
  Truck,
  Undo2,
  Settings
} from 'lucide-react';

export const sidebarItems = [
  { id: 'home', label: 'Home', icon: Home, to: '/dashboard' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3,to:'/analytics' },
  { id: 'orders', label: 'Orders', icon: ShoppingCart, to: '/orders' },
  { id: 'returns', label: 'Returns', icon: Undo2, to: '/returns' },
  // { id: 'shipments', label: 'Shipments', icon: PackageCheck },
  // { id: 'unlock', label: 'Unlock', icon: Unlock },
  // { id: 'growth', label: 'Growth', icon: Rocket },
  // { id: 'billing', label: 'Billing', icon: Wallet },
  // { id: 'customers', label: 'Customers', icon: UserCheck },
  // { id: 'channels', label: 'Channels', icon: Share2 },
  // { id: 'tools', label: 'Tools', icon: Wrench },
  // { id: 'premium', label: 'Premium', icon: Lock },
  { id: 'settings', label: 'Settings', icon: Settings, to: '/settings' },
];

export { Truck };
