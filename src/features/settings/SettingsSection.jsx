import SettingCard from './SettingCard.jsx';

export default function SettingsSection({ id, title, icon: Icon, items, onSelect }) {
  return (
    <section aria-labelledby={`${id}-title`} className="rounded-lg bg-white px-4 pb-6 pt-4 shadow-card sm:px-5">
      <header className="mb-4 flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eef0f4] text-teal-700">
          <Icon size={18} aria-hidden="true" />
        </span>
        <h2 id={`${id}-title`} className="text-base font-medium uppercase tracking-wide text-ink">
          {title}
        </h2>
      </header>

      <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <SettingCard key={item.id} {...item} onSelect={() => onSelect?.(item)} />
        ))}
      </div>
    </section>
  );
}
