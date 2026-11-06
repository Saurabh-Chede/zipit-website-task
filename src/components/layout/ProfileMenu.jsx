import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function ProfileMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => !ref.current?.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div className="profile" ref={ref}>
      <button
        className="topbar__avatar"
        aria-label="Profile menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <User size={18} />
      </button>

      {open && (
        <div className="profile__menu" role="menu">
          <div className="profile__info">
            <strong>{user?.name}</strong>
            <span>{user?.email}</span>
          </div>
          <button className="profile__item" role="menuitem" onClick={handleLogout}>
            <LogOut size={15} /> Log out
          </button>
        </div>
      )}
    </div>
  );
}
