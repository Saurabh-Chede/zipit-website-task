import { Percent } from 'lucide-react';
import { Button } from '../../components/ui';

export default function OfferBanner({ text, extra, actionLabel, onApply }) {
  return (
    <div className="offer">
      <span className="offer__text">
        <span className="offer__tag">
          <Percent size={11} />
        </span>
        <span>{text}</span>
        <span className="offer__extra">{extra}</span>
      </span>
      <Button variant="ghost" size="sm" onClick={onApply}>
        {actionLabel}
      </Button>
    </div>
  );
}
