import { useMemo, useState } from "react";
import { Tabs, SegmentedControl } from "../components/ui";
import KycBanner from "../features/orders/KycBanner.jsx";
import OrdersHeader from "../features/orders/OrdersHeader.jsx";
import OrdersToolbar from "../features/orders/OrdersToolbar.jsx";
import OrdersTable from "../features/orders/OrdersTable.jsx";
import PaginationFooter from "../features/orders/PaginationFooter.jsx";
import {
  orders as allOrders,
  orderTabs,
  orderSubTabs,
  dateRanges,
} from "../data/ordersData.js";

export default function Orders() {
  const [shipment, setShipment] = useState("domestic");
  const [searchRange, setSearchRange] = useState("year");
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("new");
  const [subTab, setSubTab] = useState("new");
  const [dateRange, setDateRange] = useState("30");
  const [bulkAction, setBulkAction] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allOrders;
    return allOrders.filter((o) => o.product.sku.toLowerCase().includes(q));
  }, [query]);

  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);
  const dateLabel = dateRanges
    .find((d) => d.value === dateRange)
    ?.label.toLowerCase();

  const toggleOne = (id) =>
    setSelectedIds((ids) =>
      ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id],
    );
  const toggleAll = (checked) =>
    setSelectedIds(checked ? visible.map((o) => o.id) : []);

  return (
    <main className="orders">
      <div className="orders__body">
        {/* <KycBanner onProceed={() => console.log("verify kyc")} /> */}

        <OrdersHeader
          shipment={shipment}
          onShipmentChange={setShipment}
          range={searchRange}
          onRangeChange={setSearchRange}
          query={query}
          onQueryChange={(v) => {
            setQuery(v);
            setPage(1);
          }}
          onAddOrder={() => console.log("add order")}
          onConnectChannel={() => console.log("connect channel")}
        />

        <Tabs
          className="orders__tabs"
          tabs={orderTabs}
          active={tab}
          onChange={setTab}
          showHelp={false}
        />

        <div className="orders__subtabs">
          <SegmentedControl
            options={orderSubTabs}
            value={subTab}
            onChange={setSubTab}
          />
        </div>

        <OrdersToolbar
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          bulkAction={bulkAction}
          onBulkActionChange={setBulkAction}
          hasSelection={selectedIds.length > 0}
          onMoreFilters={() => console.log("more filters")}
          onManifest={() => console.log("manifest")}
          onExport={() => console.log("export")}
        />

        <p className="orders__count">
          {filtered.length} Orders for {dateLabel}
        </p>

        <OrdersTable
          orders={visible}
          selectedIds={selectedIds}
          onToggle={toggleOne}
          onToggleAll={toggleAll}
          onAddOrder={() => console.log("add order")}
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
