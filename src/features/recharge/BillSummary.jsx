import { useState } from 'react';
import { Wallet, ChevronDown } from 'lucide-react';

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

export default function BillSummary({ amount, cashback, credited }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bill">
      <div className="bill__row bill__row--main">
        <span className="bill__credit">
          <Wallet size={15} />
          Amount to be credited: <strong>{inr(credited)}</strong>
        </span>
        <button className="bill__toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          View Bill Summary
          <ChevronDown size={14} style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
        </button>
      </div>

      {open && (
        <dl className="bill__details">
          <div>
            <dt>Recharge amount</dt>
            <dd>{inr(amount)}</dd>
          </div>
          <div>
            <dt>Cashback</dt>
            <dd className="bill__green">+ {inr(cashback)}</dd>
          </div>
          <div className="bill__total">
            <dt>Total credited</dt>
            <dd>{inr(credited)}</dd>
          </div>
        </dl>
      )}
    </div>
  );
}
