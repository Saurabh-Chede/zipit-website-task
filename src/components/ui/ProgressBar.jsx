export default function ProgressBar({ value, max, label }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="progress">
      <span className="progress__label">{label ?? `${value} of ${max} tasks complete`}</span>
      <div
        className="progress__track"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div className="progress__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
