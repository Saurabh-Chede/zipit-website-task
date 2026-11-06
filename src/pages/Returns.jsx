import { useMemo, useState } from "react";
import { TabsBar } from "../components/tw";
import ReturnsHeader from "../features/returns/ReturnsHeader.jsx";
import ReturnsToolbar from "../features/returns/ReturnsToolbar.jsx";
import ReturnsTable from "../features/returns/ReturnsTable.jsx";
import PaginationFooter from "../features/orders/PaginationFooter.jsx";
import {
  returns as allReturns,
  returnTabs,
  dateRanges,
} from "../data/returnsData.js";

// "pending" and "all" don't map to one status; the rest filter on item.status
const matchesTab = (item, tab) =>
  tab === "all" || tab === "pending" || item.status === tab;

export default function Returns() {
  const [tab, setTab] = useState("new");
  const [query, setQuery] = useState("");
  const [dateRange, setDateRange] = useState("30");
  const [reason, setReason] = useState("");
  const [bulkAction, setBulkAction] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allReturns.filter((r) => {
      if (!matchesTab(r, tab)) return false;
      if (reason && r.reason !== reason) return false;
      if (!q) return true;
      return [r.id, r.awb, r.product.sku].some((v) =>
        String(v).toLowerCase().includes(q),
      );
    });
  }, [tab, query, reason]);

  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);
  const dateLabel = dateRanges
    .find((d) => d.value === dateRange)
    ?.label.toLowerCase();

  const resetPage = () => {
    setPage(1);
    setSelectedIds([]);
  };
  const toggleOne = (id) =>
    setSelectedIds((ids) =>
      ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id],
    );
  const toggleAll = (checked) =>
    setSelectedIds(checked ? visible.map((r) => r.id) : []);

  return (
    <main className="tw flex min-h-[calc(100vh-58px)] flex-col px-4">
      <div className="flex-1 pt-2">
        <ReturnsHeader
          query={query}
          onQueryChange={(v) => {
            setQuery(v);
            resetPage();
          }}
          onAddReturn={() => console.log("add return")}
          onFaq={() => console.log("faqs")}
          onHelpDoc={() => console.log("api help doc")}
        />

        <TabsBar
          className="px-2"
          tabs={returnTabs}
          active={tab}
          onChange={(t) => {
            setTab(t);
            resetPage();
          }}
        />

        <div className="mb-4 mt-5">
          <ReturnsToolbar
            dateRange={dateRange}
            onDateRangeChange={setDateRange}
            reason={reason}
            onReasonChange={(v) => {
              setReason(v);
              resetPage();
            }}
            bulkAction={bulkAction}
            onBulkActionChange={setBulkAction}
            hasSelection={selectedIds.length > 0}
            onMoreFilters={() => console.log("more filters")}
            onManifest={() => console.log("manifest")}
            onExport={() => console.log("export")}
          />
        </div>

        <p className="mb-4 text-xs text-ink-muted">
          {filtered.length} Orders for {dateLabel}
        </p>

        <ReturnsTable
          items={visible}
          selectedIds={selectedIds}
          onToggle={toggleOne}
          onToggleAll={toggleAll}
        />
      </div>

      <PaginationFooter
        page={page}
        pageSize={pageSize}
        total={filtered.length}
        onPageSizeChange={(n) => {
          setPageSize(n);
          setPage(1);
        }}
        onPrev={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => p + 1)}
      />
    </main>
  );
}
