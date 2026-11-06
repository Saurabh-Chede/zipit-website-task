import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

// Full-screen layer with a close button. Escape closes it and page scroll is locked.
export default function Overlay({ open, onClose, children, labelledBy }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="overlay" role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
      <button className="overlay__close" aria-label="Close" onClick={onClose}>
        <X size={20} />
      </button>
      {children}
    </div>,
    document.body
  );
}
