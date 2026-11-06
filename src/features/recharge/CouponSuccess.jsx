import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import Confetti from '../../components/ui/Confetti.jsx';

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

// "'FLAT500' applied — You Got Extra ₹500" popup with a confetti burst.
export default function CouponSuccess({ open, code, amount, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    // Capture phase + stopPropagation: Esc closes only this popup, not the recharge modal under it
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      e.stopPropagation();
      onClose?.();
    };
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <>
      <div
        className="coupon-win__backdrop"
        onMouseDown={(e) => {
          e.stopPropagation();
          onClose?.();
        }}
      >
        <div
          className="coupon-win"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="coupon-win-title"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <button className="coupon-win__close" aria-label="Close" onClick={onClose}>
            <X size={16} />
          </button>

          <div className="coupon-win__badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 12.5l4 4 8-9" />
            </svg>
          </div>

          <p id="coupon-win-title" className="coupon-win__applied">
            &lsquo;{code}&rsquo; applied
          </p>
          <p className="coupon-win__amount">
            You Got Extra <b>{inr(amount)}</b>
          </p>
          <p className="coupon-win__note">With this coupon code</p>
        </div>
      </div>
      <Confetti />
    </>,
    document.body
  );
}
