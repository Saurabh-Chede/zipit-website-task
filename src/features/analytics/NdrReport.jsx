import AnalyticsSection from './AnalyticsSection.jsx';
import StatTile from './StatTile.jsx';
import NoDataState from './NoDataState.jsx';

export default function NdrReport({ data }) {
  const hasReasons = data.reasons?.length > 0;
  return (
    <AnalyticsSection id="ndr-report" title="NDR Delivery Report" hint="Non-delivery reports raised on your shipments.">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="grid gap-5">
          <StatTile label="NDR Shipments" value={data.shipments} className="flex flex-col justify-center py-8" />
          <StatTile label="NDR Shipments Delivered" value={data.delivered} className="flex flex-col justify-center py-8" />
        </div>

        <div className="flex flex-col rounded-md border border-line bg-[#f9fafc] p-4">
          <p className="text-sm text-ink-muted">NDR Reasons Breakdown</p>
          <div className="flex flex-1 items-center justify-center">
            {hasReasons ? null : <NoDataState className="py-10" />}
          </div>
        </div>
      </div>
    </AnalyticsSection>
  );
}
