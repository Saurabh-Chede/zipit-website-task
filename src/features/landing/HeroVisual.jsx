import { Truck, CheckCircle2 } from 'lucide-react';

const rates = [
  { name: 'Express', time: '2 days', price: '₹62', best: false },
  { name: 'Standard', time: '4 days', price: '₹48', best: true },
  { name: 'Economy', time: '6 days', price: '₹39', best: false },
];

const progress = ['Picked up', 'In transit', 'Out for delivery', 'Delivered'];

export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv-card hv-card--track">
        <div className="hv-head">
          <span className="hv-id">Shipment #SE20481</span>
          <span className="hv-pill">In transit</span>
        </div>
        <div className="hv-route">
          <div>
            <small>Pickup</small>
            <strong>Mumbai</strong>
          </div>
          <div className="hv-line">
            <Truck size={16} />
          </div>
          <div>
            <small>Delivery</small>
            <strong>Bengaluru</strong>
          </div>
        </div>
        <ol className="hv-steps">
          {progress.map((p, i) => (
            <li key={p} className={i < 2 ? 'is-done' : ''}>
              <span />
              {p}
            </li>
          ))}
        </ol>
      </div>

      <div className="hv-card hv-card--rates">
        <p className="hv-title">Compare rates</p>
        {rates.map((r) => (
          <div key={r.name} className={`hv-rate ${r.best ? 'is-best' : ''}`}>
            <div>
              <strong>{r.name}</strong>
              <small>{r.time}</small>
            </div>
            <span>{r.price}</span>
          </div>
        ))}
      </div>

      <div className="hv-card hv-card--badge">
        <CheckCircle2 size={18} fill="var(--green)" color="#fff" />
        Order delivered
      </div>
    </div>
  );
}
