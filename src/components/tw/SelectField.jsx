import { ChevronDown } from 'lucide-react';

export default function SelectField({
  options,
  value,
  onChange,
  icon: Icon,
  disabled = false,
  className = '',
  ...rest
}) {
  return (
    <label
      className={`relative inline-flex items-center rounded-md border border-line text-[13px] focus-within:border-brand ${
        disabled ? 'bg-[#f6f6f9] text-ink-light' : 'bg-white text-ink'
      } ${className}`}
    >
      {Icon && <Icon size={16} className="pointer-events-none absolute left-3" />}
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`h-[38px] w-full cursor-pointer appearance-none bg-transparent pr-9 outline-none disabled:cursor-not-allowed ${
          Icon ? 'pl-10' : 'pl-3'
        }`}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown size={15} className="pointer-events-none absolute right-2.5" />
    </label>
  );
}
