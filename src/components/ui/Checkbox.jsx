export default function Checkbox({ checked, onChange, indeterminate = false, ...rest }) {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      ref={(el) => el && (el.indeterminate = indeterminate)}
      onChange={(e) => onChange(e.target.checked)}
      {...rest}
    />
  );
}
