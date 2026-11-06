import { Calendar, Filter } from 'lucide-react';
import { SelectField, ToolbarButton } from '../../components/tw';
import { analyticsDateRanges, compareOptions, paymentModes } from '../../data/analyticsData.js';

export default function AnalyticsFilters({
  dateRange,
  onDateRangeChange,
  compare,
  onCompareChange,
  paymentMode,
  onPaymentModeChange,
  onMoreFilters,
}) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <SelectField
        className="w-[219px]"
        icon={Calendar}
        options={analyticsDateRanges}
        value={dateRange}
        onChange={onDateRangeChange}
        aria-label="Date range"
      />
      <SelectField
        className="w-[208px]"
        prefix="Compare"
        options={compareOptions}
        value={compare}
        onChange={onCompareChange}
        aria-label="Compare with"
      />
      <span aria-hidden="true" className="hidden h-8 w-px bg-line md:block" />
      <SelectField
        className="w-[200px]"
        options={paymentModes}
        value={paymentMode}
        onChange={onPaymentModeChange}
        aria-label="Payment mode"
      />
      <ToolbarButton icon={Filter} onClick={onMoreFilters}>
        More Filters
      </ToolbarButton>
    </div>
  );
}
