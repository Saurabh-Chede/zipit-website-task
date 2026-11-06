import { HelpCircle } from 'lucide-react';

export default function Tabs({ tabs, active, onChange, showHelp = true, className = '' }) {
  return (
    <div className={`tabs ${className}`} role="tablist">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={active === t.id}
          className={`tabs__tab ${active === t.id ? 'tabs__tab--active' : ''}`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
          {showHelp && <HelpCircle size={13} color="var(--text-light)" />}
        </button>
      ))}
    </div>
  );
}
