import { brand } from '../../config/brand.js';

export default function Logo({ showName = false, size = 34, tone = 'light' }) {
  return (
    <span className={`logo logo--${tone}`}>
      <svg width={size} height={size} viewBox="0 0 34 34" fill="none" aria-label="Logo">
        <path
          d="M8 5l20 12L8 29V5z"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M14 12l8 5-8 5v-10z" fill="#3fd17a" />
      </svg>
      {showName && <span className="logo__name">{brand.name}</span>}
    </span>
  );
}
