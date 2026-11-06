import { Link } from 'react-router-dom';

export default function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon: Icon,
  iconRight: IconRight,
  to,
  children,
  className = '',
  ...rest
}) {
  const cls = ['btn', `btn--${variant}`, `btn--${size}`, block && 'btn--block', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {Icon && <Icon size={14} />}
      {children}
      {IconRight && <IconRight size={13} />}
    </>
  );

  // With `to`, render a router link that looks like the button
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
