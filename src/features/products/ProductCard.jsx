import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  const { title, description, icon: Icon, tone } = product;
  return (
    <article className="product">
      <div className="product__art" style={{ background: tone }} aria-hidden="true">
        <span className="product__icon">
          <Icon size={44} strokeWidth={1.4} />
        </span>
      </div>
      <h3 className="product__title">{title}</h3>
      {description && <p className="product__desc">{description}</p>}
      <button className="product__cta" onClick={() => onSelect(product)}>
        Get Started <ArrowRight size={14} />
      </button>
    </article>
  );
}
