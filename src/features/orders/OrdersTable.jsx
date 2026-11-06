import { Checkbox, EmptyState } from '../../components/ui';
import { tableColumns } from '../../data/ordersData.js';
import OrdersIllustration from './OrdersIllustration.jsx';

function OrderRow({ order, selected, onToggle }) {
  const { id, date, customer, product, package: pkg, payment, pickup, status } = order;
  return (
    <div className="orders-table__row">
      <Checkbox checked={selected} onChange={() => onToggle(id)} aria-label={`Select order ${id}`} />
      <div>
        <strong>{id}</strong>
        <span className="muted">{date}</span>
      </div>
      <div>
        <strong>{customer.name}</strong>
        <span className="muted">{customer.phone}</span>
      </div>
      <div>
        <strong>{product.name}</strong>
        <span className="muted">
          SKU: {product.sku} · Qty {product.quantity}
        </span>
      </div>
      <div>
        <strong>{pkg.weight}</strong>
        <span className="muted">{pkg.dimensions}</span>
      </div>
      <div>
        <strong>₹{payment.amount}</strong>
        <span className="muted">{payment.method}</span>
      </div>
      <div>{pickup}</div>
      <div>{status}</div>
      <div>
        <button className="link-btn">Ship Now</button>
      </div>
    </div>
  );
}

export default function OrdersTable({ orders, selectedIds, onToggle, onToggleAll, onAddOrder }) {
  const allSelected = orders.length > 0 && selectedIds.length === orders.length;
  const someSelected = selectedIds.length > 0 && !allSelected;

  return (
    <div className="orders-table">
      <div className="orders-table__head">
        <Checkbox
          checked={allSelected}
          indeterminate={someSelected}
          onChange={onToggleAll}
          disabled={orders.length === 0}
          aria-label="Select all orders"
        />
        {tableColumns.map((c) => (
          <span key={c.key}>{c.label}</span>
        ))}
      </div>

      {orders.length === 0 ? (
        <EmptyState
          illustration={<OrdersIllustration />}
          title="No orders yet"
          description="Add your first order or connect your sales channel to fetch orders automatically."
        >
          <button className="link-btn" onClick={onAddOrder}>
            + Add Order
          </button>
        </EmptyState>
      ) : (
        orders.map((o) => (
          <OrderRow
            key={o.id}
            order={o}
            selected={selectedIds.includes(o.id)}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
}
