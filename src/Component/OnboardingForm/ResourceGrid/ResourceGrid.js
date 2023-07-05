import React from "react";
import "../../../Styling/agReactGrid/agReactGrid.css";
import "../../../Styling/agReactGrid/Alpine.css";
import { AgGridReact } from "ag-grid-react";
// import data from "../../../data.json";
import AddDetailsModal from "../AddOnboardingModal/AddDetails.js";
import Layout from "../../LayOut";
import HeaderBanner from "../OnboardingHeader.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ResourceGrid() {
  const columnDefs = [
    { headerName: "Resource Name", field: "resourceFullName" },
    { headerName: "Email", field: "emailId" },
    { headerName: "Designation", field: "designationName" },
    { headerName: "Role", field: "roleName" },
    { headerName: "Project", field: "projectName" },
    { headerName: "Project StartDate", field: "projectStartDate" },
    { headerName: "Project EndDate", field: "projectEndDate" },
    // { headerName: "Reporting Manager", field: "employeeMananger" },
    // { headerName: "Senior Manager", field: "employeeSeniorMananger" },
  ];
  const [resourceGridData, setResourceGridData] = useState(null);

  const handleResourceGridData = async () => {
    const response = await fetch(
      `https://localhost:5001/api/Employee/getResources`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setResourceGridData(resp));
    console.log(await response);
  };

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
  };

  return (
    <Layout>
      <HeaderBanner />
      <AddDetailsModal />
      <div
        className=" ag-theme-alpine"
        style={{ width: "100%", height: "30em", overflowX: "auto" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={resourceGridData}
          defaultColDef={defaultColDef}
          pagination={true} // Enable pagination
          paginationPageSize={5} // Number of rows per page
          onGridReady={handleResourceGridData}
        ></AgGridReact>
      </div>
      <br/>
      <div className="page-bottom" >
      <Link to="/">
        <Button
          variant="primary"
          style={{ color: "white", border: "none", background: "#86BC24" }}
        >
          Home
        </Button>
      </Link>
      </div>
    </Layout>
  );
}

export default ResourceGrid;
