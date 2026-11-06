import { Card, ProgressBar } from '../../components/ui';
import TaskItem from './TaskItem.jsx';
import { brand } from '../../config/brand.js';

export default function GetStarted({ tasks, onTaskAction }) {
  const done = tasks.filter((t) => t.completed).length;

  return (
    <Card
      title="Get Started"
      subtitle={`Follow these simple steps to set up your ${brand.name} account`}
      action={<ProgressBar value={done} max={tasks.length} />}
    >
      {tasks.map((task, i) => (
        <TaskItem key={task.id} index={i + 1} task={task} onAction={onTaskAction} />
      ))}
    </Card>
  );
}
