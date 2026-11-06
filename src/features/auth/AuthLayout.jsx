import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Logo from '../../components/layout/Logo.jsx';
import { brand } from '../../config/brand.js';

const points = [
  'Compare courier rates in seconds',
  'Create and ship orders in a few clicks',
  'Track every delivery from one dashboard',
];

export default function AuthLayout({ children }) {
  return (
    <div className="auth">
      <aside className="auth__panel">
        <Link to="/" aria-label={`${brand.name} home`}>
          <img className='w-[200px]' src="https://zipit.co.in/__l5e/assets-v1/fcd52a27-9bc8-4c27-84b3-8484ebfce3f6/zipit-horizontal.png" alt="" />
        </Link>
        <div>
          <h2 className="auth__headline">{brand.tagline}</h2>
          <ul className="auth__points">
            {points.map((p) => (
              <li key={p}>
                <CheckCircle2 size={18} /> {p}
              </li>
            ))}
          </ul>
        </div>
        <small className="auth__copy">© {new Date().getFullYear()} {brand.name}</small>
      </aside>

      <main className="auth__main">
        <Link to="/" className="auth__back">
          <ArrowLeft size={15} /> Back to home
        </Link>
        <div className="auth__card">{children}</div>
      </main>
    </div>
  );
}
