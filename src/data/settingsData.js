import {
  Building2,
  Globe,
  Landmark,
  Sparkles,
  Truck,
  Undo2,
  SlidersHorizontal,
} from 'lucide-react';
import { brand } from '../config/brand.js';

// Item shape: { id, title, description, badge?: 'New', comingSoon?: boolean, to?: '/route' }
// Cards without `to` just fire onSelect (the page logs them for now).
export const settingsSections = [
  {
    id: 'company-setup',
    title: 'Company Setup',
    icon: Building2,
    items: [
      { id: 'company-details', title: 'Company Details', description: 'View, edit and update the company related details like brand name, email, logo.' },
      { id: 'domestic-kyc', title: 'Domestic KYC', description: 'Submit Know Your Customer (KYC) Information for uninterrupted shipping.' },
      { id: 'pickup-addresses', title: 'Pickup Addresses', description: 'Manage all your pickup addresses here' },
      { id: 'billing-gstin', title: 'Billing & GSTIN', description: 'Add your billing address or set up GSTIN invoicing.' },
      { id: 'label-settings', title: 'Label Settings', description: 'Choose the suitable label format for your company' },
      { id: 'invoice-settings', title: 'Invoice Settings', badge: 'New', description: 'Choose the suitable invoice format for your company' },
      { id: 'password-security', title: 'Password & Login Security', description: 'Manage and update your account password & Login Security here.' },
    ],
  },
  {
    id: 'international-shipping',
    title: 'International Shipping',
    icon: Globe,
    items: [
      { id: 'international-kyc', title: 'International KYC', description: 'Update the organizational details and documents entered which are necessary for International logistics' },
      { id: 'courier-partners', title: 'Courier Partners', description: 'View the courier partners for your International logistics' },
      { id: 'order-preferences', title: 'Order Preferences', description: 'Pre-select your order preferences like shipment purpose, currency, etc , which will be auto-applied to all orders.' },
      { id: 'international-taxes', title: 'International Taxes', description: 'Manage your international tax services, such as IOSS and EORI numbers, which will be auto-applied to all orders.' },
      { id: 'international-documents', title: 'International Documents', description: 'Upload any additional documents required for processing international shipments.' },
      { id: 'international-bank', title: 'International Bank Account', description: 'Add bank account details for international shipping.' },
    ],
  },
  {
    id: 'seller-remittance',
    title: 'Seller Remittance',
    icon: Landmark,
    items: [
      { id: 'bank-details', title: 'Bank Details', description: 'Add bank account details where you want your COD to be remitted.' },
      { id: 'cash-on-demand', title: 'Cash on Demand', badge: 'New', description: 'Access instant business funds whenever you need them, with limits refreshed daily based on your business activity.' },
      { id: 'early-cod', title: 'Early COD Remittance', description: 'Receive guaranteed early COD remittance within 2-4 days from the shipment delivered date as per chosen plan.' },
      { id: 'postpaid-plan', title: 'Postpaid Plan', description: 'Convert your COD remittance into shipping credits for uninterrupted shipping experience.' },
    ],
  },
  {
    id: 'value-added-services',
    title: 'Value Added Services',
    icon: Sparkles,
    items: [
      { id: 'rto-score', title: 'RTO Score', description: 'Enable RTO Score to improve your Delivery Success Rate and reduce RTO risk' },
      { id: 'auto-secure', title: 'Auto-Secure Shipments', description: 'Automatically secure all shipments above Rs 5,000 without any manual intervention' },
      { id: 'delivery-boost', title: 'Delivery Boost', description: 'Smart AI powered engine to increase your delivery conversion' },
      { id: 'secure-x', title: 'Secure X', description: 'Safeguard your International shipments against in-transit risks' },
      { id: 'brand-boost', title: 'Brand Boost', description: 'Personalized branded tracking page with cross-sell and social integration features' },
      { id: 'notify', title: 'Notify', description: 'A seamless tool designed to send real-time order tracking updates directly to buyers via WhatsApp, Email & SMS' },
      { id: 'shipsure', title: 'Shipsure', description: 'RTOs? Get your money back with ShipSure' },
    ],
  },
  {
    id: 'courier-management',
    title: 'Courier Management',
    icon: Truck,
    items: [
      { id: 'courier-priority', title: 'Courier Priority', description: 'Set your courier priority ranking on basis of which they will be assigned to orders during bulk courier assignment' },
      { id: 'courier-selection', title: 'Courier Selection', description: 'Activate or deactivate couriers, and block/unblock RTO or ODA pincodes for individual couriers' },
      { id: 'courier-rules', title: 'Courier Rules', description: 'Gain more shipping control by creating custom courier rules which will be auto-applied during bulk shipments' },
      { id: 'courier-logs', title: 'Courier Activity Logs', description: 'Records of courier activation & deactivation actions' },
      { id: 'courier-auto-assign', title: 'Courier Auto Assignment', description: 'Automatically assign orders to couriers based on your preferences' },
      { id: 'block-stressed', title: 'Block Stressed Couriers', description: 'Automatically hides couriers with high delivery risk.' },
      { id: 'pincode-block', title: 'Pincode Block List', description: 'Block delivery to specific pincodes across all orders and shipments' },
    ],
  },
  {
    id: 'returns-exchange',
    title: 'Returns & Exchange',
    icon: Undo2,
    items: [
      { id: 'return-settings', title: 'Return Settings', description: 'Set up and enable return settings as per your preference' },
      { id: 'exchange-settings', title: 'Exchange Settings', comingSoon: true, description: 'Set up and enable exchange settings as per your preference' },
      { id: 'refund-settings', title: 'Refund Settings', description: 'Set up and enable refund settings as per your preferences' },
    ],
  },
  {
    id: 'additional-settings',
    title: 'Additional Settings',
    icon: SlidersHorizontal,
    items: [
      { id: 'shipment-features', title: 'Shipment Features', description: 'Manage orders and shipments with advanced controls like split shipment, order verification, etc.' },
      { id: 'manage-users', title: 'Manage Users', description: `Create users & give them ${brand.name} access for selected functions based on their roles` },
      { id: 'reports', title: 'Reports', description: 'Add email ids and contact numbers to receive business & operational related communications.' },
      { id: 'api-users', title: 'API Users', description: 'Add API users to start using our external APIs' },
      { id: 'webhooks', title: 'Webhooks', description: 'Set up & manage webhooks for real-time shipment updates' },
      { id: 'custom-order-form', title: 'Customise Order Form', description: 'Customise the Add Order form with fields that fit your business needs from settings.' },
      { id: 'gateway-settings', title: 'Company Gateway Settings', description: 'Customise Company Gateway Settings.' },
      { id: 'security-console', title: 'Security Console', description: 'Review order activity, PII access logs, and security posture for your company.' },
      { id: 'order-intelligence', title: 'Order Intelligence', badge: 'New', description: 'Control duplicate orders and manage order merging with intelligent rules and settings.' },
      { id: 'connect-exotel', title: 'Connect your Exotel', badge: 'New', description: `Place direct calls from the NDR panel using your own Exotel account credentials instead of ${brand.name}'s bridge.` },
      { id: 'sandbox', title: 'Sandbox', badge: 'New', description: 'Enable sandbox access, manage sandbox users and test your integrations without affecting live data.' },
    ],
  },
];
