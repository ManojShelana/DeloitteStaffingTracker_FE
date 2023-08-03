import React, { useState } from "react"; import "../../../App.css"; 
import "../../../Styling/agReactGrid/agReactGrid.css";
import "../../../Styling/agReactGrid/Alpine.css";
import { AgGridReact } from "ag-grid-react"; 
import EditIcon from "@mui/icons-material/Edit"; 
import "../../../Styling/AddProjectModal/AddProjectModal.css";
import Layout from "../../LayOut";
import DeleteIcon from "@mui/icons-material/Delete"; 
import "../../../Styling/OnboardingForm/header.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalTabs from "../AddProjectModal/ModalTabs.js"; 
import AddDetailsButton from "../AddProjectButton/AddProjectButton.js";

function ConfigureProjectGrid() {
  
  const [roleOptions, setRoleOptions] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [resourceGridData, setResourceGridData] = useState(null);
  const onEdit = true;

  const columnDefs = [
    { headerName: "Client Name", field: "clientName" },
    { headerName: "Project Name", field: "projectName" },
    { headerName: "Project Code", field: "projectCode" },
    { headerName: "Project Manager Name", field: "projectManagerName" },
    { headerName: "Senior Manager Name", field: "seniorManagerName" },
    { headerName: "Managing Director Name", field: "seniorManagerName" },
    {
      headerName: "Actions",
      field: "resourceName",
      cellRenderer: (params) => (
        <>
          <div>
            <EditIcon
              style={{ color: "#1f63d1", marginRight: "10px" }}
              onClick={() => handleEditData(params.data)}
            />
            <DeleteIcon
              style={{ color: "#1f63d1" }}
              onClick={() => handleDelete(params.value)}
            />
          </div>
        </>
      ),
    },
  ];

  const handleDelete = (de) => {
    window.confirm("Are you sure, you want to delete this row", de);
  };

  const handleEditData = async (data) => {
    setShowLogin(true);
    const response = await fetch(
      `https://localhost:7075/api/Project/getProjectById/${data.Id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((resp) => resp.json())
      // .then((resp) => setResourceIdData(resp));
      
    const respons = await fetch(
      `https://localhost:7075/api/Base/getAllRolesById/${data.jobLevel}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setRoleOptions(data));
    // return setFormData(data);
  };

  // const handleDelete = async (id) => {
  //   const response = await fetch(
  //     `https://localhost:7075/api/Project/deleteProject` + `/${id}`,
  //     { method: "DELETE" }
  //   )
  //     .then((resp) => resp.json())
  //     .then((resp) => setGridData(resp))
  //     .then(handleGetGridData);
  // };

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: false,
    resizable: true,
  };

  const [gridData, setGridData] = useState(null);
  const [error, setError] = useState("");
  const notify = () => {
    toast.error({ error }, { autoClose: 3000 });
  };
  const handleGetGridData = async () => {
    const response = await fetch(
      `https://localhost:7075/api/Project/getAllProjects`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setGridData(resp))
      .catch((error) => {
        toast.configure();
        setError(error.message);
        console.log(error);
        notify();
      });
    // console.log(await response);
  };
  return (
    <Layout>
      <div className="banner">
        <h1 className="banner-header">Configure Project</h1>
      </div>
      <div className="App">
        <AddDetailsButton handleGetGridData={handleGetGridData}/>
        <ModalTabs show={showLogin} close={()=>setShowLogin(false)} handleGetGridData={handleGetGridData} />
        <div className="ag-theme-alpine" style={{ height: "100vh" }}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={gridData}
            defaultColDef={defaultColDef}
            pagination={true}
            pivotPanelShow={"always"}
            paginationPageSize={10}
            onGridReady={handleGetGridData}
          ></AgGridReact>
        </div>
      </div>
    </Layout>
  );
}

export default ConfigureProjectGrid;
