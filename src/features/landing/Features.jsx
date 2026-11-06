import SectionHeading from './SectionHeading.jsx';
import FeatureCard from './FeatureCard.jsx';
import { features } from '../../data/landingData.js';

export default function Features() {
  return (
    <section id="features" className="l-section">
      <div className="l-container">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to ship with confidence"
          subtitle="From the first rate check to the final delivery, every step lives in one place."
        />
        <div className="l-features">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
