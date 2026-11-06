import SectionHeading from './SectionHeading.jsx';
import { steps } from '../../data/landingData.js';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="l-section l-section--tint">
      <div className="l-container">
        <SectionHeading
          eyebrow="How it works"
          title="Up and running in three steps"
          subtitle="No long onboarding. Sign up, add orders and start shipping."
        />
        <ol className="l-steps">
          {steps.map((s, i) => (
            <li key={s.title} className="l-step">
              <span className="l-step__num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
