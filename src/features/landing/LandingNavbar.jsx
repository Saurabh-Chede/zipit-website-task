import { Link } from 'react-router-dom';
import Logo from '../../components/layout/Logo.jsx';
import { Button } from '../../components/ui';
import { navLinks } from '../../data/landingData.js';

export default function LandingNavbar({ isAuthenticated }) {
  return (
    <header className="l-nav">
      <div className="l-container l-nav__inner">
        <Link to="/" aria-label="Home">
          <Logo showName tone="dark" />
        </Link>

        <nav className="l-nav__links" aria-label="Sections">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="l-nav__actions">
          {isAuthenticated ? (
            <Button to="/dashboard">Go to Dashboard</Button>
          ) : (
            <>
              <Button to="/login" variant="ghost" className="l-nav__login">
                Log in
              </Button>
              <Button to="/signup">Get Started</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
