import { Button } from '../../components/ui';

export default function CtaBanner({ ctaTo, isAuthenticated }) {
  return (
    <section className="l-section">
      <div className="l-container">
        <div className="l-cta">
          <h2>Ready to ship your first order?</h2>
          <p>Create a free account and be ready to ship in a few minutes.</p>
          <Button to={ctaTo} className="l-btn-lg l-cta__btn">
            {isAuthenticated ? 'Go to Dashboard' : 'Create Free Account'}
          </Button>
        </div>
      </div>
    </section>
  );
}
