import { Badge, Button } from '../../components/ui';
import OfferBanner from './OfferBanner.jsx';

export default function TaskItem({ index, task, onAction }) {
  const { title, description, duration, completed, actionLabel, offer } = task;

  const content = (
    <>
      <span className="task__num">{index}</span>
      <div className="task__body">
        <div className="task__row">
          <div>
            <h3 className="task__title">{title}</h3>
            <p className="task__desc">{description}</p>
            {duration && <span className="task__time">{duration}</span>}
          </div>
          {completed ? (
            <Badge variant="success">COMPLETED</Badge>
          ) : (
            actionLabel && <Button onClick={() => onAction?.(task)}>{actionLabel}</Button>
          )}
        </div>
      </div>
    </>
  );

  if (offer) {
    return (
      <div className="task task--offer">
        <div style={{ width: '100%' }}>
          <OfferBanner {...offer} onApply={() => onAction?.(task)} />
          <div className="task__inner">{content}</div>
        </div>
      </div>
    );
  }

  return <div className="task">{content}</div>;
}
