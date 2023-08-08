import { useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import data from "../near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import {
  stringFilter,
  numberFilter,
  yAndNFormatter,
  dateFilter,
} from "../utils/agGridFilters";

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
