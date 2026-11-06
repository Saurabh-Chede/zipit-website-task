import { ChevronRight } from 'lucide-react';

export default function SettingCard({ title, description, badge, comingSoon = false, onSelect }) {
  return (
    <button
      type="button"
      disabled={comingSoon}
      onClick={onSelect}
      className={`group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-md border border-line bg-white px-4 py-3.5 text-left outline-none transition-colors ${
        comingSoon
          ? 'cursor-not-allowed'
          : 'hover:border-brand/60 hover:bg-brand-soft/40 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/30'
      }`}
    >
      <span className={`min-w-0 ${comingSoon ? 'opacity-45' : ''}`}>
        <span className="flex flex-wrap items-center gap-2 text-sm font-medium text-ink">
          {title}
          {badge && (
            <span className="rounded-[3px] bg-[#16c60c] px-1.5 text-[9.5px] font-bold leading-4 text-white">
              {badge}
            </span>
          )}
        </span>
        <span className="mt-1.5 block text-xs leading-[1.45] text-ink-muted">{description}</span>
      </span>

      {comingSoon ? (
        <span className="absolute right-0 top-2.5 bg-brand py-0.5 pl-3 pr-2.5 text-[9px] font-medium text-white [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,7px_50%)]">
          Coming Soon
        </span>
      ) : (
        <ChevronRight
          size={16}
          aria-hidden="true"
          className="shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
        />
      )}
    </button>
  );
}
