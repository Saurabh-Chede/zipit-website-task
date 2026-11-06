import ProductCard from './ProductCard.jsx';

export default function ProductSection({ title, products, onSelect }) {
  return (
    <section className="products__section">
      <h2 className="products__section-title">{title}</h2>
      <div className="products__grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
