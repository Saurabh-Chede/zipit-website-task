
import { useState } from 'react';
import {
  Search,
  Mic,
  Wallet,
  Plus,
  RotateCw,
  HelpCircle,
  Zap,
  Grid3x3,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu.jsx';
import RechargeModal from '../../features/recharge/RechargeModal.jsx'

export default function Topbar({ walletBalance = 0, score = { current: 3, total: 7 } }) {
  const { pathname } = useLocation();
  const searchBy = pathname.startsWith('/orders') ? 'SKU' : 'Order ID';
  const [refreshing, setRefreshing] = useState(false);
  const [rechargeOpen, setRechargeOpen] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    // add your refresh logic here (e.g. refetch data)
  };

  return (
    <header className="topbar">
      <label className="topbar__search">
        <Search size={15} />
        <input placeholder={`Search via '${searchBy}'`} aria-label="Search" />
        <span className="topbar__kbd">Ctrl+K</span>
        <span className="topbar__mic">
          <Mic size={13} />
        </span>
      </label>

      <button className='shimmer-btn' >Radar Dashboard</button>

      <span className="topbar__divider" />
      <div className="topbar__score">
        <span className="topbar__score-ring">
          {score.current}/{score.total}
        </span>
        Business Success Score
      </div>
      <span className="topbar__divider" />

      <div className="topbar__wallet">
        <Wallet size={16} />
        ₹{walletBalance}
        <button
          className="topbar__wallet-add"
          aria-label="Add money"
          onClick={() => setRechargeOpen(true)}
        >
          <Plus size={13} />
        </button>
      </div>
      <button
        className="topbar__icon-btn"
        aria-label="Refresh"
        onClick={handleRefresh}
      >
        <RotateCw
          size={16}
          className={refreshing ? 'spin-once' : ''}
          onAnimationEnd={() => setRefreshing(false)}
        />
      </button>
      <span className="topbar__divider" />

      <button className="topbar__pill">
        <HelpCircle size={15} /> Need Help
      </button>
      <button className="topbar__pill" aria-label="Quick actions">
        <Zap size={15} />
      </button>
      <span className="topbar__divider" />

      <button className="topbar__products">
        ALL PRODUCTS <Grid3x3 size={12} />
      </button>
      <ProfileMenu />

      <RechargeModal
        open={rechargeOpen}
        onClose={() => setRechargeOpen(false)}
        balance={Number(walletBalance)}
        onPay={({ amount, cashback, credited }) => {
          // yahan apna payment logic daalo
          setRechargeOpen(false);
        }}
      />
    </header>
  );
}