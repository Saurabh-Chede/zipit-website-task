export default function IconCircle({ icon: Icon, size = 'md', iconSize = 16 }) {
  return (
    <span className={`icon-circle ${size === 'lg' ? 'icon-circle--lg' : ''}`}>
      <Icon size={iconSize} />
    </span>
  );
}
