import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function CouponCard({ coupon, onRemove, onViewAll }) {
  return (
    <div className="coupon">
      <div className="coupon__head">
        <span className="coupon__applied">
          <CheckCircle2 size={16} fill="var(--green)" color="#fff" />
          Code {coupon.code} applied!
        </span>
        <button className="coupon__remove" onClick={onRemove}>
          Remove
        </button>
      </div>
      <p className="coupon__desc">{coupon.description}</p>
      <button className="coupon__all" onClick={onViewAll}>
        View All Coupons <ChevronRight size={13} />
      </button>
      <p className="coupon__note">Note: {coupon.note}</p>
    </div>
  );
}
