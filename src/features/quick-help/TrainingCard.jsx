import { Button } from '../../components/ui';
import { brand } from '../../config/brand.js';

export default function TrainingCard({ onSchedule }) {
  return (
    <div className="training">
      <div>
        <h3>Book Training Session</h3>
        <p>Get a guided demo to understand {brand.name} tools and start shipping with ease.</p>
      </div>
      <Button variant="outline" size="sm" onClick={onSchedule}>
        Schedule Now
      </Button>
    </div>
  );
}
