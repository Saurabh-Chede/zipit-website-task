import { IconCircle } from '../../components/ui';

export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="l-feature">
      <IconCircle icon={icon} size="lg" iconSize={20} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
