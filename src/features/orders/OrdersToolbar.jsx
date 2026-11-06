import { Calendar, Filter, Layers, Download } from 'lucide-react';
import { Select } from '../../components/ui';
import { dateRanges, bulkActions } from '../../data/ordersData.js';

export default function OrdersToolbar({
  dateRange,
  onDateRangeChange,
  bulkAction,
  onBulkActionChange,
  hasSelection,
  onMoreFilters,
  onManifest,
  onExport,
}) {
  return (
    <div className="orders-toolbar">
      <div className="orders-toolbar__left">
        <Select
          className="orders-toolbar__date"
          icon={Calendar}
          options={dateRanges}
          value={dateRange}
          onChange={onDateRangeChange}
          aria-label="Date range"
        />
        <button className="toolbar-btn" onClick={onMoreFilters}>
          <Filter size={16} /> More Filters
        </button>
      </div>

      <div className="orders-toolbar__right">
        <button className="toolbar-btn toolbar-btn--icon" aria-label="Bulk labels" onClick={onManifest}>
          <Layers size={18} />
        </button>
        <button className="toolbar-btn toolbar-btn--icon" aria-label="Export" onClick={onExport}>
          <Download size={18} />
        </button>
        <Select
          className="orders-toolbar__bulk"
          options={bulkActions}
          value={bulkAction}
          onChange={onBulkActionChange}
          disabled={!hasSelection}
          aria-label="Bulk action"
        />
      </div>
    </div>
  );
}
