import Logo from '../../components/layout/Logo.jsx';
import { brand } from '../../config/brand.js';
import { footerLinks } from '../../data/landingData.js';

export default function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-container l-footer__inner">
        <div className="l-footer__brand">
          <Logo showName tone="dark" />
          <p>{brand.tagline}.</p>
        </div>
        {footerLinks.map((col) => (
          <div key={col.title} className="l-footer__col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="l-container l-footer__bottom">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
