import { BarChart3 } from 'lucide-react';

export default function NoDataState({ className = 'py-12' }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className="grid size-12 place-items-center rounded-full bg-brand-soft text-brand">
        <BarChart3 size={24} aria-hidden="true" />
      </span>
      <p className="mt-4 text-base font-semibold text-ink">No Data Available!</p>
      <p className="mt-2.5 max-w-[250px] text-[13px] leading-relaxed text-ink-muted">
        Once you start creating shipments, your data will appear here.
      </p>
    </div>
  );
}
