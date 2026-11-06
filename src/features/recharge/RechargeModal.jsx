// import { useEffect, useState } from 'react';
// import { Wallet } from 'lucide-react';
// import { Modal, Button } from '../../components/ui';
// import AmountInput from './AmountInput.jsx';
// import CouponCard from './CouponCard.jsx';
// import BillSummary from './BillSummary.jsx';

// const PRESETS = [500, 1000, 2000, 5000];
// const DEFAULT_AMOUNT = 500;

// const COUPON = {
//   code: 'FLAT500',
//   minAmount: 500,
//   maxCashback: 500,
//   description: '100% cashback on recharge of Rs.500',
//   note: 'Cashback amount will expire in 30 days.',
// };

// const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

// export default function RechargeModal({ open, onClose, balance = 0, onPay }) {
//   const [amount, setAmount] = useState(DEFAULT_AMOUNT);
//   const [couponApplied, setCouponApplied] = useState(true);

//   // Reset every time the popup is reopened
//   useEffect(() => {
//     if (open) {
//       setAmount(DEFAULT_AMOUNT);
//       setCouponApplied(true);
//     }
//   }, [open]);

//   const eligible = couponApplied && amount >= COUPON.minAmount;
//   const cashback = eligible ? Math.min(amount, COUPON.maxCashback) : 0;
//   const credited = amount + cashback;

//   return (
//     <Modal open={open} onClose={onClose} labelledBy="recharge-title" width={400}>
//       <div className="recharge">
//         <header className="recharge__head">
//           <h2 id="recharge-title">Recharge Your Wallet</h2>
//           <span className="recharge__balance">
//             <Wallet size={15} /> ₹{balance.toFixed(2)}
//           </span>
//         </header>

//         <AmountInput value={amount} onChange={setAmount} presets={PRESETS} />

//         <hr className="recharge__divider" />
//         <h3 className="recharge__section">Offers &amp; Bill Summary</h3>

//         {couponApplied ? (
//           <CouponCard
//             coupon={COUPON}
//             onRemove={() => setCouponApplied(false)}
//             onViewAll={() => {}}
//           />
//         ) : (
//           <button className="recharge__apply" onClick={() => setCouponApplied(true)}>
//             Apply coupon {COUPON.code}
//           </button>
//         )}

//         {!eligible && couponApplied && (
//           <p className="recharge__warn">Add at least {inr(COUPON.minAmount)} to get the cashback.</p>
//         )}

//         <BillSummary amount={amount} cashback={cashback} credited={credited} />

//         <Button
//           block
//           disabled={amount <= 0}
//           className="recharge__pay"
//           onClick={() => onPay?.({ amount, cashback, credited })}
//         >
//           Pay {inr(amount)}
//         </Button>
//       </div>
//     </Modal>
//   );
// }

import { useEffect, useState } from 'react';
import { Wallet } from 'lucide-react';
import { Modal, Button } from '../../components/ui';
import AmountInput from './AmountInput.jsx';
import CouponCard from './CouponCard.jsx';
import BillSummary from './BillSummary.jsx';
import CouponSuccess from './CouponSuccess.jsx';

const PRESETS = [500, 1000, 2000, 5000];
const DEFAULT_AMOUNT = 500;

const COUPON = {
  code: 'FLAT500',
  minAmount: 500,
  maxCashback: 500,
  description: '100% cashback on recharge of Rs.500',
  note: 'Cashback amount will expire in 30 days.',
};

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

export default function RechargeModal({ open, onClose, balance = 0, onPay, celebrateOnOpen = false }) {
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [couponApplied, setCouponApplied] = useState(true);
  const [successOpen, setSuccessOpen] = useState(false);

  // Reset every time the popup is reopened
  useEffect(() => {
    if (!open) {
      setSuccessOpen(false);
      return undefined;
    }
    setAmount(DEFAULT_AMOUNT);
    setCouponApplied(true);
    // Opened via "Apply Now": show the coupon popup once the modal has settled
    if (!celebrateOnOpen) return undefined;
    const t = setTimeout(() => setSuccessOpen(true), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const eligible = couponApplied && amount >= COUPON.minAmount;
  const cashback = eligible ? Math.min(amount, COUPON.maxCashback) : 0;
  const credited = amount + cashback;

  return (
    <Modal open={open} onClose={onClose} labelledBy="recharge-title" width={400}>
      <div className="recharge">
        <header className="recharge__head">
          <h2 id="recharge-title">Recharge Your Wallet</h2>
          <span className="recharge__balance">
            <Wallet size={15} /> ₹{balance.toFixed(2)}
          </span>
        </header>

        <AmountInput value={amount} onChange={setAmount} presets={PRESETS} />

        <hr className="recharge__divider" />
        <h3 className="recharge__section">Offers &amp; Bill Summary</h3>

        {couponApplied ? (
          <CouponCard
            coupon={COUPON}
            onRemove={() => setCouponApplied(false)}
            onViewAll={() => {}}
          />
        ) : (
          <button
            className="recharge__apply"
            onClick={() => {
              setCouponApplied(true);
              setSuccessOpen(amount >= COUPON.minAmount);
            }}
          >
            Apply coupon {COUPON.code}
          </button>
        )}

        {!eligible && couponApplied && (
          <p className="recharge__warn">Add at least {inr(COUPON.minAmount)} to get the cashback.</p>
        )}

        <BillSummary amount={amount} cashback={cashback} credited={credited} />

        <Button
          block
          disabled={amount <= 0}
          className="recharge__pay"
          onClick={() => onPay?.({ amount, cashback, credited })}
        >
          Pay {inr(amount)}
        </Button>
      </div>

      <CouponSuccess
        open={successOpen && eligible}
        code={COUPON.code}
        amount={cashback}
        onClose={() => setSuccessOpen(false)}
      />
    </Modal>
  );
}

