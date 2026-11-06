import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, children, width = 400, labelledBy }) {
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
    <div className="modal__backdrop" onMouseDown={onClose}>
      <button className="modal__close" aria-label="Close" onClick={onClose}>
        <X size={18} />
      </button>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        style={{ width }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
