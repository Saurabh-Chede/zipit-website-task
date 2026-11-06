import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import SettingsSection from '../features/settings/SettingsSection.jsx';
import { settingsSections } from '../data/settingsData.js';

export default function Settings() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return settingsSections;
    return settingsSections
      .map((s) => ({
        ...s,
        items: s.items.filter((i) => `${i.title} ${i.description}`.toLowerCase().includes(q)),
      }))
      .filter((s) => s.items.length > 0);
  }, [query]);

  const handleSelect = (item) => {
    if (item.to) navigate(item.to);
    else console.log('open setting', item.id);
  };

  return (
    <main className="px-4 pb-10 pt-4">
      <div className="mb-5 grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
        <h1 className="text-xl font-bold leading-tight text-ink">Settings</h1>

        <label className="flex h-10 w-full items-center gap-2.5 rounded-md border border-line bg-white px-3 text-ink-muted focus-within:border-brand md:w-[412px]">
          <Search size={15} className="shrink-0" aria-hidden="true" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for any setting or feature"
            aria-label="Search settings"
            className="min-w-0 flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-ink-light"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery('')}
              className="grid size-5 shrink-0 place-items-center rounded-full bg-[#e3e4ea] text-ink-muted hover:bg-[#d5d7e0]"
            >
              <X size={11} />
            </button>
          )}
        </label>
      </div>

      {sections.length === 0 ? (
        <div className="rounded-lg bg-white px-4 py-16 text-center shadow-card">
          <p className="text-base text-ink-muted">
            No settings match &ldquo;{query.trim()}&rdquo;. Try a different keyword.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {sections.map((section) => (
            <SettingsSection key={section.id} {...section} onSelect={handleSelect} />
          ))}
        </div>
      )}
    </main>
  );
}
