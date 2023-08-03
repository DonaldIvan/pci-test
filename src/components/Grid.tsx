import { useCallback, useRef } from "react";
import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import data from "../near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface Data {
  designation: string;
  discovery_date: string;
  h_mag: string;
  moid_au: string;
  q_au_1: string;
  q_au_2: string;
  period_yr: string;
  i_deg: string;
  pha: string;
  orbit_class: string;
}
const stringFilter = {
  floatingFilter: false,
  filterParams: {
    filterOptions: ["contains", "notContains"],
    textFormatter: (r: string) => {
      if (!r) return null;
      return r.toLowerCase();
    },
    debounceMs: 200,
    maxNumConditions: 1,
  },
};

const numberFilter = {
  filter: "agNumberColumnFilter",
  filterParams: {
    allowedCharPattern: "\\d\\.",
    numberParser: (text: string) => {
      return text ? text : null;
    },
  },
};

const dateFilter = {
  valueFormatter: ({ value }: { value: string }) => {
    if (!value) return "";
    const date = new Date(value);

    let day = date.getDate().toString();

    let month = (date.getMonth() + 1).toString();
    const year = date.getFullYear();
    if (Number(day) < 10) {
      day = `0${day}`;
    }

    if (Number(month) < 10) {
      month = `0${month}`;
    }
    return `${day}/${month}/${year}`;
  },
  filter: "agDateColumnFilter",
  filterParams: {
    comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
      if (!cellValue) return -1;
      const cellDate = new Date(cellValue);
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
      return 0;
    },
  },
};
const yAndNFormatter = ({ value }: { value: string }): string => {
  const upperdValue = (value ?? "").toUpperCase();
  if (!upperdValue || !["Y", "N"].includes(upperdValue)) return "";
  return upperdValue === "Y" ? "Yes" : "No";
};

const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    ...stringFilter,
  },
  { field: "discovery_date", headerName: "Discovery Date", ...dateFilter },
  {
    field: "h_mag",
    headerName: "H (mag)",
    ...numberFilter,
  },
  { field: "moid_au", headerName: "MOID (au)", ...numberFilter },
  { field: "q_au_1", headerName: "q (au)", ...numberFilter },
  { field: "q_au_2", headerName: "Q (au)", ...numberFilter },
  { field: "period_yr", headerName: "Period (yr)", ...numberFilter },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    ...numberFilter,
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    ...stringFilter,
    valueFormatter: yAndNFormatter,
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    ...stringFilter,
  },
];

const defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  flex: 1,
  floatingFilter: true,
};

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<any>(null);

  const clearFilters = useCallback(() => {
    gridRef.current.api.setFilterModel(null);
    gridRef.current.columnApi.applyColumnState({
      defaultState: { sort: null },
    });
  }, []);
  return (
    <>
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <h1>Near-Earth Object Overview</h1>
        <button
          style={{
            height: "fit-content",
            cursor: "pointer",
          }}
          onClick={clearFilters}
        >
          Clear Filters and Sorters
        </button>
      </div>
      <div className="ag-theme-alpine" style={{ height: 900, minWidth: 1920 }}>
        <AgGridReact
          ref={gridRef}
          defaultColDef={defaultColDef}
          rowData={data as Data[]}
          columnDefs={columnDefs}
          enableRangeSelection={true}
        />
      </div>
    </>
  );
};

export default NeoGrid;
