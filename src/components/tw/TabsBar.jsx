export default function TabsBar({ tabs, active, onChange, className = '' }) {
  return (
    <div
      role="tablist"
      className={`flex gap-10 overflow-x-auto whitespace-nowrap border-b border-line ${className}`}
    >
      {tabs.map((t) => {
        const isActive = active === t.id;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(t.id)}
            className={`-mb-px border-b-2 px-1.5 pb-3.5 text-[14.5px] transition-colors ${
              isActive
                ? 'border-brand font-medium text-brand'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
