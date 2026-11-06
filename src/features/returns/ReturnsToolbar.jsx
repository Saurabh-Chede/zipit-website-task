import { Calendar, Filter, Layers, Download } from 'lucide-react';
import { SelectField, ToolbarButton } from '../../components/tw';
import { dateRanges, returnReasons, bulkActions } from '../../data/returnsData.js';

export default function ReturnsToolbar({
  dateRange,
  onDateRangeChange,
  reason,
  onReasonChange,
  bulkAction,
  onBulkActionChange,
  hasSelection,
  onMoreFilters,
  onManifest,
  onExport,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <SelectField
          className="w-[219px]"
          icon={Calendar}
          options={dateRanges}
          value={dateRange}
          onChange={onDateRangeChange}
          aria-label="Date range"
        />
        <SelectField
          className="w-[200px]"
          options={returnReasons}
          value={reason}
          onChange={onReasonChange}
          aria-label="Return reason"
        />
        <ToolbarButton icon={Filter} onClick={onMoreFilters}>
          More Filters
        </ToolbarButton>
      </div>

      <div className="flex items-center gap-4">
        <ToolbarButton iconOnly icon={Layers} aria-label="Bulk labels" onClick={onManifest} />
        <ToolbarButton iconOnly icon={Download} aria-label="Export" onClick={onExport} />
        <SelectField
          className="w-[168px]"
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
