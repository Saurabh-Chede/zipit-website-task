import { Users, MapPin, Truck, Package } from 'lucide-react';
import { IconCircle } from '../../components/ui';

const icons = { users: Users, pin: MapPin, truck: Truck, box: Package };

export default function CommunityStat({ value, label, icon }) {
  return (
    <div className="cstat">
      <IconCircle icon={icons[icon]} size="lg" iconSize={18} />
      <div className="cstat__value">{value}</div>
      <div className="cstat__label">{label}</div>
    </div>
  );
}
