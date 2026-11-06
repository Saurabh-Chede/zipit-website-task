export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`l-heading l-heading--${align}`}>
      {eyebrow && <span className="l-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
