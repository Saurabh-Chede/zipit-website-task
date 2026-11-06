import { Search, Plus } from 'lucide-react';
import { Button, Select } from '../../components/ui';
import { shipmentTypes, searchRanges } from '../../data/ordersData.js';

export default function OrdersHeader({
  shipment,
  onShipmentChange,
  range,
  onRangeChange,
  query,
  onQueryChange,
  onAddOrder,
  onConnectChannel,
}) {
  return (
    <div className="orders-header">
      <h1 className="orders-header__title">Orders</h1>

      <Select
        className="orders-header__shipment"
        options={shipmentTypes}
        value={shipment}
        onChange={onShipmentChange}
        aria-label="Shipment type"
      />

      <div className="orders-header__search">
        <Select
          variant="pill"
          options={searchRanges}
          value={range}
          onChange={onRangeChange}
          aria-label="Search range"
        />
        <Search size={15} className="orders-header__search-icon" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search via 'SKU'"
          aria-label="Search orders"
        />
      </div>

      <div className="orders-header__actions">
        <Button icon={Plus} onClick={onAddOrder}>
          Add Order
        </Button>
        <Button variant="ghost" onClick={onConnectChannel}>
          Connect Channel
        </Button>
      </div>
    </div>
  );
}
