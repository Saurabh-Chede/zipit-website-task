import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Select } from '../../components/ui';
import { pageSizes } from '../../data/ordersData.js';

export default function PaginationFooter({
  pageSize,
  onPageSizeChange,
  page,
  total,
  onPrev,
  onNext,
}) {
  const lastPage = Math.max(1, Math.ceil(total / pageSize));

  return (
    <footer className="pagination">
      <label className="pagination__size">
        Items per page:
        <Select
          variant="compact"
          options={pageSizes}
          value={String(pageSize)}
          onChange={(v) => onPageSizeChange(Number(v))}
          aria-label="Items per page"
        />
      </label>

      <div className="pagination__nav">
        <button className="pagination__btn" onClick={onPrev} disabled={page <= 1}>
          <ArrowLeft size={15} /> PREV
        </button>
        <button className="pagination__btn" onClick={onNext} disabled={page >= lastPage}>
          NEXT <ArrowRight size={15} />
        </button>
      </div>
    </footer>
  );
}
