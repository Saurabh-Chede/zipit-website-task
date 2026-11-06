import AnalyticsSection from './AnalyticsSection.jsx';

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

export default function CodRemittance({ data }) {
  const upcoming = data.upcoming;
  return (
    <AnalyticsSection id="cod-remittance" title="COD Remittance" hint="COD amount that will be remitted to your bank account.">
      <div className="rounded-md border border-line bg-[#f9fafc] p-4">
        <p className="text-sm text-ink-muted">Upcoming Remittance Amount</p>
        <div className="mt-4 w-fit min-w-[255px] rounded-md border border-line bg-white px-4 py-5 text-sm font-semibold text-ink">
          {upcoming ? (
            <>
              {inr(upcoming.amount)}
              {upcoming.date && <span className="ml-2 text-xs font-normal text-ink-muted">on {upcoming.date}</span>}
            </>
          ) : (
            'No Upcoming Remittance'
          )}
        </div>
      </div>
    </AnalyticsSection>
  );
}
