import { NavLink } from 'react-router-dom';
import { sidebarItems } from '../../data/navigation.js';
import Logo from './Logo.jsx';

export default function Sidebar({ items = sidebarItems }) {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      <div className="sidebar__logo">
        <img className='invert-90' src="https://zipit.co.in/__l5e/assets-v1/6d8e5991-08e6-475c-a3b1-eba3330e3e98/zipit-vertical-web.png" alt="" />
      </div>
      {items.map(({ id, label, icon: Icon, to }) =>
        to ? (
          <NavLink
            key={id}
            to={to}
            title={label}
            aria-label={label}
            className={({ isActive }) =>
              `sidebar__item ${isActive ? 'sidebar__item--active' : ''}`
            }
          >
            <Icon size={20} />
          </NavLink>
        ) : (
          <button key={id} title={label} aria-label={label} className="sidebar__item">
            <Icon size={20} />
          </button>
        )
      )}
    </nav>
  );
}
