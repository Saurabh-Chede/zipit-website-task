import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { SelectField, TabsBar } from '../components/tw';
import AnalyticsFilters from '../features/analytics/AnalyticsFilters.jsx';
import AnalyticsSection from '../features/analytics/AnalyticsSection.jsx';
import NoDataState from '../features/analytics/NoDataState.jsx';
import NdrReport from '../features/analytics/NdrReport.jsx';
import WeightDiscrepancies from '../features/analytics/WeightDiscrepancies.jsx';
import CodRemittance from '../features/analytics/CodRemittance.jsx';
import {
  analytics,
  analyticsTabs,
  chartSections,
  dashboardViews,
  tabSections,
} from '../data/analyticsData.js';

export default function Analytics() {
  const [view, setView] = useState('domestic');
  const [tab, setTab] = useState('overview');
  const [dateRange, setDateRange] = useState('30');
  const [compare, setCompare] = useState('previous-period');
  const [paymentMode, setPaymentMode] = useState('');

  const isOverview = tab === 'overview';
  const show = (id) => isOverview || tabSections[tab]?.includes(id);

  return (
    <main className="px-4 pb-10 pt-4">
      <div className="flex flex-wrap items-center gap-4">
        <h1 className="text-xl font-bold leading-tight text-ink">Dashboard</h1>
        <SelectField
          className="w-[120px]"
          options={dashboardViews}
          value={view}
          onChange={setView}
          aria-label="Dashboard type"
        />

        <button
          type="button"
          onClick={() => console.log('switch to old dashboard')}
          className="ml-auto inline-flex h-9 items-center gap-2 rounded-md border border-brand bg-white px-4 text-xs font-medium text-brand transition-colors hover:bg-brand-soft"
        >
          <ArrowLeftRight size={15} aria-hidden="true" /> Switch to Old Dashboard
        </button>
      </div>

      <TabsBar className="mt-4 px-1" tabs={analyticsTabs} active={tab} onChange={setTab} />

      <div className="mt-5">
        <AnalyticsFilters
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          compare={compare}
          onCompareChange={setCompare}
          paymentMode={paymentMode}
          onPaymentModeChange={setPaymentMode}
          onMoreFilters={() => console.log('more filters')}
        />
        <p className="mt-2 text-xs text-ink-muted">
          Shipments assigned to a courier, created during the selected date range.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {chartSections
          .filter((s) => show(s.id))
          .map((s) => (
            <AnalyticsSection key={s.id} id={s.id} title={s.title} hint={s.hint}>
              {/* Replace with a chart once `s.data` has rows */}
              <NoDataState className="py-14" />
            </AnalyticsSection>
          ))}

        {isOverview && (
          <>
            <NdrReport data={analytics.ndr} />
            <WeightDiscrepancies data={analytics.weight} />
            <CodRemittance data={analytics.cod} />
          </>
        )}
      </div>
    </main>
  );
}
