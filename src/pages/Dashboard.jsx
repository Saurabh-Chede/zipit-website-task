import { useState } from 'react';
import GetStarted from '../features/get-started/GetStarted.jsx';
import RechargeModal from '../features/recharge/RechargeModal.jsx';
import RateCalculator from '../features/rate-calculator/RateCalculator.jsx';
import QuickHelp from '../features/quick-help/QuickHelp.jsx';
import NextBestActions from '../features/next-actions/NextBestActions.jsx';
import ActionsNeedingAttention from '../features/attention/ActionsNeedingAttention.jsx';
import CommunityBanner from '../features/community/CommunityBanner.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import {
  setupTasks,
  helpVideos,
  nextActions,
  attentionTabs,
  attentionStats,
  communityStats,
} from '../data/dashboardData.js';

export default function Dashboard() {
  const { user } = useAuth();
  const [rechargeOpen, setRechargeOpen] = useState(false);

  const handleTaskAction = (task) => {
    if (task.id === 'recharge') setRechargeOpen(true);
  };

  return (
    <main className="page">
      <div className="page__greeting">
        <h1>Welcome {user.name}!</h1>
        <p>You’re few steps away from shipping your first order.</p>
      </div>

      <div className="page__grid">
        <div className="page__col">
          <GetStarted tasks={setupTasks} onTaskAction={handleTaskAction} />
          <NextBestActions actions={nextActions} onAction={(a) => console.log('action', a.id)} />
          {/* <ActionsNeedingAttention tabs={attentionTabs} stats={attentionStats} /> */}
        </div>

        <aside className="page__col">
          <RateCalculator onCalculate={(v) => console.log('rates for', v)} />
          <QuickHelp videos={helpVideos} />
        </aside>
      </div>

      <CommunityBanner stats={communityStats} />

      <RechargeModal
        open={rechargeOpen}
        onClose={() => setRechargeOpen(false)}
        onPay={(payload) => {
          console.log('pay', payload);
          setRechargeOpen(false);
        }}
      />
    </main>
  );
}
