export default function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="segmented" role="tablist">
      {options.map((o) => (
        <button
          key={o.id}
          role="tab"
          aria-selected={value === o.id}
          className={`segmented__item ${value === o.id ? 'segmented__item--active' : ''}`}
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
