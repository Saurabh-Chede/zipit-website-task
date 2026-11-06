import { stats } from '../../data/landingData.js';

export default function StatsStrip() {
  return (
    <section id="stats" className="l-stats">
      <div className="l-container l-stats__inner">
        {stats.map((s) => (
          <div key={s.label} className="l-stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
