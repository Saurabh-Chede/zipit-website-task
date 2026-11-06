// Small label + value block. tone="white" is the nested variant used inside grey panels.
export default function StatTile({ label, value, tone = 'grey', small = false, className = '' }) {
  return (
    <div
      className={`rounded-md border border-line p-4 ${
        tone === 'white' ? 'bg-white' : 'bg-[#f9fafc]'
      } ${className}`}
    >
      <p className={`${small ? 'text-xs' : 'text-sm'} text-ink-muted`}>{label}</p>
      <p className={`mt-2 font-bold text-ink ${small ? 'text-sm' : 'text-[15px]'}`}>{value}</p>
    </div>
  );
}
