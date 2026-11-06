import { Card, Button } from '../../components/ui';
import VideoCard from './VideoCard.jsx';
import TrainingCard from './TrainingCard.jsx';

export default function QuickHelp({ videos, onViewAll, onPlay, onSchedule }) {
  return (
    <Card
      title="Quick Help & Learning"
      action={
        <Button variant="ghost" size="sm" onClick={onViewAll}>
          View All
        </Button>
      }
    >
      <div className="help__videos">
        {videos.map((v) => (
          <VideoCard key={v.id} {...v} onPlay={() => onPlay?.(v)} />
        ))}
      </div>
      <TrainingCard onSchedule={onSchedule} />
    </Card>
  );
}
