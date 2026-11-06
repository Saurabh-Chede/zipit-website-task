import { useState } from 'react';
import { Card, Tabs } from '../../components/ui';
import StatCard from './StatCard.jsx';

export default function ActionsNeedingAttention({ tabs, stats }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <Card title="Actions Needing Your Attention">
      <div className="attention__tabs">
        <Tabs tabs={tabs} active={active} onChange={setActive} />
      </div>
      <div className="stats">
        {stats[active].map((s) => (
          <StatCard key={s.id} label={s.label} value={s.value} />
        ))}
      </div>
    </Card>
  );
}
