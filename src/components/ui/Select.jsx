import { ChevronDown } from 'lucide-react';

export default function Select({
  options,
  value,
  onChange,
  icon: Icon,
  variant = 'default',
  disabled = false,
  className = '',
  ...rest
}) {
  return (
    <label
      className={`select select--${variant} ${disabled ? 'select--disabled' : ''} ${className}`}
    >
      {Icon && <Icon size={16} className="select__icon" />}
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown size={15} className="select__chevron" />
    </label>
  );
}
