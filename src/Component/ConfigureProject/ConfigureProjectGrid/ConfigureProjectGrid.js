import React from "react";
import "../../../App.css";
import "../../../Styling/agReactGrid/agReactGrid.css";
import "../../../Styling/agReactGrid/Alpine.css";
import { AgGridReact } from "ag-grid-react";
import AddProjectModal from "../AddProjectModal/AddProjectModal.js";
import "../../../Styling/AddProjectModal/AddProjectModal.css";
import { useState } from "react";
import Layout from "../../LayOut";
import "../../../Styling/OnboardingForm/header.css";

function ConfigureProjectGrid() {
  const columnDefs = [
    // { headerName: "Id", field: "id" },
    { headerName: "Client Name", field: "clientName" },
    { headerName: "Project Name", field: "projectName" },
    { headerName: "Project Code", field: "projectCode" },
    { headerName: "Project Manager Name", field: "managerName" },
    { headerName: "Senior Manager Name", field: "seniorManagerName" },
    { headerName: "Managing Director Name", field: "seniorManagerName" },
  ];
  // const [headerName, setHeaderName]= useState("Configure Project");
  // const updateHeaderName = () =>{
  // setHeaderName("Configure Project");
  // }

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
  };

  const [gridData, setGridData] = useState(null);

  const handleGetGridData = async () => {
    const response = await fetch(
      `https://localhost:5001/api/manageconfiguration/projects`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setGridData(resp));
    console.log(await response);
  };
  return (
    <Layout>
      <div className="banner">
        <h1 className="banner-header">Configure Project</h1>
      </div>
      <div className="App">
        <AddProjectModal />
        <div className="ag-theme-alpine" style={{ height: "30em" }}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={gridData}
            defaultColDef={defaultColDef}
            pagination={true}
            pivotPanelShow={"always"}
            paginationPageSize={5}
            // cacheBlockSize={10}
            onGridReady={handleGetGridData}
          ></AgGridReact>
        </div>
      </div>
    </Layout>
  );
}

export default ConfigureProjectGrid;
