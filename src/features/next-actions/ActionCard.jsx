import { X, ArrowRight } from 'lucide-react';
import { Button, IconCircle } from '../../components/ui';

export default function ActionCard({ action, onDismiss, onClick }) {
  const { icon, title, description, duration, cta, dismissible } = action;
  return (
    <article className="action">
      {dismissible && (
        <button className="action__close" aria-label="Dismiss" onClick={() => onDismiss(action.id)}>
          <X size={14} />
        </button>
      )}
      <IconCircle icon={icon} />
      <h3 className="action__title">{title}</h3>
      <p className="action__desc">{description}</p>
      <span className="action__time">{duration}</span>
      <div className="action__cta">
        <Button variant="ghost" iconRight={ArrowRight} onClick={() => onClick?.(action)}>
          {cta}
        </Button>
      </div>
    </article>
  );
}
