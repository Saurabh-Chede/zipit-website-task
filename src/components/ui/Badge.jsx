import { CheckCircle2 } from 'lucide-react';

export default function Badge({ variant = 'success', icon = true, children }) {
  return (
    <span className={`badge badge--${variant}`}>
      {icon && variant === 'success' && (
        <CheckCircle2 size={16} fill="var(--green)" color="#fff" />
      )}
      {children}
    </span>
  );
}
