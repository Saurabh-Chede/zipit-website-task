import { X } from 'lucide-react';

const MAX_DIGITS = 6;

export default function AmountInput({ value, onChange, presets = [] }) {
  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, MAX_DIGITS);
    onChange(digits === '' ? 0 : Number(digits));
  };

  return (
    <div className="amount">
      <label className="amount__label" htmlFor="recharge-amount">
        Enter Amount to Add
      </label>

      <div className="amount__field">
        <span className="amount__symbol">₹</span>
        <input
          id="recharge-amount"
          className="amount__input"
          inputMode="numeric"
          value={value || ''}
          placeholder="0"
          onChange={handleChange}
          size={Math.max(String(value || 0).length, 1)}
        />
        {value > 0 && (
          <button className="amount__clear" aria-label="Clear amount" onClick={() => onChange(0)}>
            <X size={11} />
          </button>
        )}
      </div>
      <div className="amount__underline" />

      <div className="amount__chips">
        {presets.map((p) => (
          <button
            key={p}
            className={`chip ${value === p ? 'chip--active' : ''}`}
            onClick={() => onChange(p)}
          >
            ₹{p}
          </button>
        ))}
      </div>
    </div>
  );
}
