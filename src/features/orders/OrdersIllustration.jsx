export default function OrdersIllustration() {
  return (
    <svg width="220" height="170" viewBox="0 0 220 170" fill="none" aria-hidden="true">
      {/* laptop / screen */}
      <rect x="22" y="24" width="96" height="140" rx="8" fill="#6d5bd0" />
      {/* document */}
      <path d="M46 6h62l26 24v108H46V6z" fill="#b9c4f2" />
      <path d="M108 6l26 24h-26V6z" fill="#98a7e6" />
      <circle cx="90" cy="62" r="26" fill="#eef1ff" stroke="#8d9de3" strokeWidth="3" />
      <path d="M78 60l12-7 12 7v12l-12 7-12-7V60z" stroke="#6d5bd0" strokeWidth="2.5" fill="none" />
      <path d="M78 60l12 7 12-7M90 67v12" stroke="#6d5bd0" strokeWidth="2.5" />
      <rect x="60" y="102" width="62" height="5" rx="2.5" fill="#8d9de3" />
      <rect x="60" y="116" width="50" height="5" rx="2.5" fill="#8d9de3" />
      <rect x="60" y="130" width="56" height="5" rx="2.5" fill="#8d9de3" />
      {/* person */}
      <circle cx="170" cy="46" r="9" fill="#2f3140" />
      <path d="M156 62c0-5 6-9 14-9s14 4 14 9v36h-28V62z" fill="#555a6e" />
      <path d="M158 66l-22 12" stroke="#555a6e" strokeWidth="7" strokeLinecap="round" />
      <path d="M162 98v52M178 98v52" stroke="#2f3140" strokeWidth="9" strokeLinecap="round" />
      {/* box */}
      <rect x="10" y="150" width="22" height="16" rx="2" fill="#d9a064" />
    </svg>
  );
}
