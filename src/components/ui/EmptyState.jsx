export default function EmptyState({ illustration, title, description, children }) {
  return (
    <div className="empty">
      {illustration}
      {title && <h3 className="empty__title">{title}</h3>}
      {description && <p className="empty__desc">{description}</p>}
      {children}
    </div>
  );
}
