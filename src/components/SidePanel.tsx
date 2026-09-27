// ----------------------------------------------------
// Calcite tab component registration
// ----------------------------------------------------
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";

import LotChart from "./LotChart";

export default function SidePanel() {
  return (
    <>
      {/* ----------------------------------------------------
          TAB CONTAINER
          Side panel docked via slot="panel-end", 40% width.
      ---------------------------------------------------- */}
      <calcite-tabs
        slot="panel-end"
        layout="inline"
        scale="l"
        style={{
          borderStyle: "solid",
          borderRightWidth: 5,
          borderLeftWidth: 5,
          borderBottomWidth: 5,
          borderTopWidth: 5,
          borderColor: "#555555",
          width: "40%",
        }}
      >
        {/* ----------------------------------------------------
            TAB TITLES
        ---------------------------------------------------- */}
        <calcite-tab-nav
          slot="title-group"
          id="thetabs"
        >
          <calcite-tab-title className="Chart">Chart</calcite-tab-title>
        </calcite-tab-nav>

        {/* ----------------------------------------------------
            TAB CONTENT
        ---------------------------------------------------- */}
        <calcite-tab>
          <LotChart />
        </calcite-tab>
      </calcite-tabs>
    </>
  );
}