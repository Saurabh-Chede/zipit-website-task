import { useNavigate } from 'react-router-dom';
import { Overlay } from '../../components/ui';
import ProductSection from './ProductSection.jsx';
import { products, productSections, recentlyUsed } from '../../data/productsData.js';

export default function ProductsPanel({ open, onClose }) {
  const navigate = useNavigate();

  const handleSelect = (product) => {
    onClose();
    if (product.to) navigate(product.to);
  };

  const sections = [
    { id: 'recent', title: 'Recently used products', items: recentlyUsed },
    ...productSections,
  ];

  return (
    <Overlay open={open} onClose={onClose} labelledBy="products-title">
      <div className="products">
        <header className="products__header">
          <h1 id="products-title">Select the product you would like to experience</h1>
          <p>Elevate your business with our industry-leading products.</p>
        </header>

        {sections.map((s) => (
          <ProductSection
            key={s.id}
            title={s.title}
            products={s.items.map((id) =>
              s.id === 'recent' ? { ...products[id], description: undefined } : products[id]
            )}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </Overlay>
  );
}
