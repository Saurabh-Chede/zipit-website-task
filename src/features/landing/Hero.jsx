import { ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui';
import HeroVisual from './HeroVisual.jsx';

export default function Hero({ ctaTo, isAuthenticated }) {
  return (
    <section className="l-hero">
      <div className="l-container l-hero__inner">
        <div className="l-hero__copy">
          <span className="l-eyebrow">Shipping for online sellers</span>
          <h1>
            Ship orders across India, <span>without the hassle</span>
          </h1>
          <p>
            Compare courier rates, create shipments in minutes and track every delivery from one
            simple dashboard.
          </p>
          <div className="l-hero__cta">
            <Button to={ctaTo} iconRight={ArrowRight} className="l-btn-lg">
              {isAuthenticated ? 'Go to Dashboard' : 'Start Shipping Free'}
            </Button>
            {!isAuthenticated && (
              <Button to="/login" variant="outline" className="l-btn-lg">
                Log in
              </Button>
            )}
          </div>
          <p className="l-hero__note">Free to sign up. No setup fees.</p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
