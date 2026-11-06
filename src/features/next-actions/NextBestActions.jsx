import { useState } from 'react';
import { Card } from '../../components/ui';
import ActionCard from './ActionCard.jsx';

export default function NextBestActions({ actions, onAction }) {
  const [dismissed, setDismissed] = useState([]);
  const visible = actions.filter((a) => !dismissed.includes(a.id));

  if (visible.length === 0) return null;

  return (
    <Card>
      <div className="nba">
        <div className="nba__intro">
          <h2>Next Best Actions For You</h2>
          <p>Get your account ready with these simple actions.</p>
        </div>
        <div className="nba__list">
          {visible.map((a) => (
            <ActionCard
              key={a.id}
              action={a}
              onDismiss={(id) => setDismissed((d) => [...d, id])}
              onClick={onAction}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
