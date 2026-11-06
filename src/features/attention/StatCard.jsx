export default function StatCard({ label, value, onClick }) {
  return (
    <button className="stat" onClick={onClick} style={{ textAlign: 'left', font: 'inherit' }}>
      <div className="stat__label">{label}</div>
      <div className="stat__value">{value}</div>
    </button>
  );
}
