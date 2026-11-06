import { Checkbox } from '../../components/ui';
import OrdersIllustration from '../orders/OrdersIllustration.jsx';
import { returnColumns } from '../../data/returnsData.js';

// Checkbox + 7 columns. Shared by the header row and every data row so they line up.
const GRID =
  'grid grid-cols-[24px_1.2fr_1.2fr_1.3fr_1fr_1.3fr_1.2fr_0.8fr] items-center gap-x-2 px-4';

function ReturnRow({ item, selected, onToggle }) {
  const { id, awb, date, buyer, product, dimensions, warehouse, refund } = item;
  return (
    <div className={`${GRID} mt-2 rounded-lg bg-white py-3.5 text-[13px] shadow-card`}>
      <Checkbox checked={selected} onChange={() => onToggle(id)} aria-label={`Select return ${id}`} />
      <div>
        <p className="font-semibold">{id}</p>
        <p className="mt-0.5 text-xs text-ink-muted">{awb}</p>
        <p className="text-xs text-ink-muted">{date}</p>
      </div>
      <div>
        <p className="font-semibold">{buyer.name}</p>
        <p className="mt-0.5 text-xs text-ink-muted">{buyer.phone}</p>
      </div>
      <div>
        <p className="font-semibold">{product.name}</p>
        <p className="mt-0.5 text-xs text-ink-muted">
          SKU: {product.sku} · Qty {product.quantity}
        </p>
      </div>
      <p>{dimensions}</p>
      <p>{warehouse}</p>
      <div>
        <p className="font-semibold">₹{refund.amount}</p>
        <p className="mt-0.5 text-xs text-ink-muted">{refund.status}</p>
      </div>
      <button className="justify-self-start text-[13px] font-medium text-brand hover:underline">
        View
      </button>
    </div>
  );
}

export default function ReturnsTable({ items, selectedIds, onToggle, onToggleAll }) {
  const allSelected = items.length > 0 && selectedIds.length === items.length;
  const someSelected = selectedIds.length > 0 && !allSelected;

  return (
    <div className="mb-6">
      <div className={`${GRID} h-[46px] rounded-lg bg-white text-[12.5px] font-medium shadow-card`}>
        <Checkbox
          checked={allSelected}
          indeterminate={someSelected}
          onChange={onToggleAll}
          disabled={items.length === 0}
          aria-label="Select all returns"
        />
        {returnColumns.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="mt-4 flex flex-col items-center rounded-lg bg-white px-4 pb-16 pt-10 text-center">
          <OrdersIllustration />
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            We could not find any data for the applied filters.
            <br />
            Please change filters and retry.
          </p>
        </div>
      ) : (
        items.map((item) => (
          <ReturnRow
            key={item.id}
            item={item}
            selected={selectedIds.includes(item.id)}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
}
