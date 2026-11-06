import AnalyticsSection from './AnalyticsSection.jsx';
import StatTile from './StatTile.jsx';

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

function Panel({ label, value, children }) {
  return (
    <div className="rounded-md border border-line bg-[#f9fafc] p-4">
      <p className="text-sm text-ink-muted">{label}</p>
      <p className="mt-2 text-[15px] font-bold text-ink">{value}</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

export default function WeightDiscrepancies({ data }) {
  return (
    <AnalyticsSection id="weight-discrepancies" title="Weight Discrepancies" hint="Differences between declared and charged weight.">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel label="Total Discrepancies" value={data.total}>
          <StatTile small tone="white" label="Open Discrepancies" value={data.open} />
          <StatTile small tone="white" label="Closed Discrepancies" value={data.closed} />
        </Panel>

        <Panel label="Excess Charge" value={inr(data.excessCharge)}>
          <StatTile small tone="white" label="Open Discrepancies Charges" value={inr(data.openCharges)} />
          <StatTile small tone="white" label="Closed Discrepancies Charges" value={inr(data.closedCharges)} />
        </Panel>
      </div>
    </AnalyticsSection>
  );
}
