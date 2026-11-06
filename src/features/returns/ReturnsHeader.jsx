import { Search, Plus, MessageSquareText, Info } from 'lucide-react';

export default function ReturnsHeader({ query, onQueryChange, onAddReturn, onFaq, onHelpDoc }) {
  return (
    <div className="grid grid-cols-1 items-start gap-4 pb-6 pt-2 md:grid-cols-[1fr_auto_1fr]">
      <div>
        <h1 className="text-2xl font-bold leading-tight">Returns</h1>
        <div className="mt-1 flex items-center gap-4 text-xs font-medium text-brand">
          <button className="inline-flex items-center gap-1.5 hover:underline" onClick={onFaq}>
            <MessageSquareText size={15} /> FAQs
          </button>
          <button className="inline-flex items-center gap-1.5 hover:underline" onClick={onHelpDoc}>
            <Info size={14} fill="currentColor" color="#fff" /> API Help Doc
          </button>
        </div>
      </div>

      <label className="flex h-10 w-full items-center gap-2.5 rounded-md border border-line bg-white px-3 text-ink-muted focus-within:border-brand md:w-[360px]">
        <Search size={15} className="shrink-0" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search via order ID, Product SKU, AWB..."
          aria-label="Search returns"
          className="min-w-0 flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-ink-light"
        />
      </label>

      <div className="flex md:justify-end">
        <button
          onClick={onAddReturn}
          className="inline-flex h-10 items-center gap-1.5 rounded-md bg-brand-soft px-4 text-[13px] font-medium text-brand transition-colors hover:bg-[#e6dfff]"
        >
          <Plus size={14} /> Add Return
        </button>
      </div>
    </div>
  );
}
