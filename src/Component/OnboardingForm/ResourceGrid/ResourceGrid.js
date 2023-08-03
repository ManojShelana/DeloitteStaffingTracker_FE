import {React, useState, useEffect} from "react";
import "../../../Styling/agReactGrid/agReactGrid.css";
import "../../../Styling/agReactGrid/Alpine.css";
import { AgGridReact } from "ag-grid-react";
import DeleteIcon from '@mui/icons-material/Delete';
import Layout from "../../LayOut";
import HeaderBanner from "../OnboardingHeader.js";
import EditIcon from '@mui/icons-material/Edit';
import ModalButton from "../AddDetailsButton";
import AddDetailsModal from "../AddOnboardingModal/AddDetails";

function ResourceGrid() {

  const [roleOptions, setRoleOptions] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [resourceGridData, setResourceGridData] = useState(null);
  const [onEditData, setOnEditData] = useState(false);

  const testValue = {
    jobLevel: "",
    jobTitle: "",
    projectEndDate: "",
    projectName: "",
    projectStartDate: "",
    resourceEmail: "",
    resourceId: '',
    resourceName: ""
  }

  const demoData = {
    managerType: "",
    resourceId: '',
    resourceName: "",
    resourceEmail: "",
    jobLevel: "",
    jobTitle: "",
    genderId: '',
    projectId: '',
    projectRoleId: '',
    projectSkillId: '',
    projectStartDate: "",
    projectEndDate: "",
    baseLocation: "",
    managerId: '',
    seniorManagerId: '',
    resourceManagerName: "",
    resourceManagerEmail: "",
  };

  const onValue = {
    resourceId: "",
    resourceName: "",
    email: "",
    role: "",
    skills: "",
    gender: "",
    project: "",
    managerName: "",
    RMName: "",
    RMEmail: "",
    designation: "",
    startDate: "",
    endDate: "",
  };

  const [formData, setFormData] = useState(testValue);
  const [resourceIdData, setResourceIdData] = useState(demoData);
  const [requiredData, setRequiredData] = useState(onValue);
  
  const columnDefs = [
    { headerName: "Resource Name", field: "resourceName" },
    { headerName: "Email", field: "resourceEmail" },
    { headerName: "Designation", field: "jobLevel" },
    { headerName: "Role", field: "jobTitle" },
    { headerName: "Project", field: "projectName" },
    { headerName: "Project StartDate", field: "projectStartDate" },
    { headerName: "Project EndDate", field: "projectEndDate" },
    {
      headerName: "Actions", 
      field: "resourceName", 
      cellRenderer: (params) => <><div>
        <EditIcon style={{color: '#1f63d1', marginRight: '10px'}} onClick={() => handleEditData(params.data)}/>
        <DeleteIcon style={{color: '#1f63d1'}} onClick={() => handleDelete(params.value)}/>
      </div>
      </>
    }
  ];

  const handleDelete=(de) => {
    window.confirm("Are you sure, you want to delete this row", de)
  }

  const handleResourceGridData = async () => {
    const response = await fetch(
      `https://localhost:7075/api/Resource/getAllResources`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setResourceGridData(resp));
  };

  const handleEditData = async (data) => {
    setShowLogin(true);
    setOnEditData(true);
    const response = await fetch(
      `https://localhost:7075/api/Resource/getResourceById/${data.resourceId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setResourceIdData(resp));

    const respons = await fetch(
      `https://localhost:7075/api/Base/getAllRolesById/${data.jobLevel}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
    )
        .then((resp) => resp.json())
        .then((data) => setRoleOptions(data));

    return (  
      setFormData(data)     
    );
  };
 
  const convertDateStringToMMDDYYYY = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
  
    return `${year}-${month}-${day}`;
  };

    const formattedStartDate = convertDateStringToMMDDYYYY(resourceIdData.projectStartDate);
    const formattedEndDate = convertDateStringToMMDDYYYY(resourceIdData.projectEndDate);

  const autofillData = () => {
   
    return(
        requiredData.resourceId = resourceIdData.resourceId,    
        requiredData.resourceName = resourceIdData.resourceName,    
        requiredData.email = resourceIdData.resourceEmail,
        requiredData.designation = resourceIdData.jobLevel,
        requiredData.role = resourceIdData.jobTitle,
        requiredData.skills = resourceIdData.projectSkillId,
        requiredData.gender = resourceIdData.genderId,
        requiredData.managerName = resourceIdData.managerId,
        requiredData.RMName = resourceIdData.resourceManagerName,
        requiredData.RMEmail = resourceIdData.resourceManagerEmail,
        requiredData.startDate = formattedStartDate,        
        requiredData.endDate = formattedEndDate
      )
  };

  const gen = (requiredData.gender == "1")
  ? "Male"
  : (requiredData.gender == "2")
  ? "Female"
  : (requiredData.gender == "0")
  ? "Other"
  : "";

//console.log(gen);

  useEffect(() => {
    autofillData();
  })
  
  const defaultColDef = {
    sortable: true,
    // editable: true,
    flex: 1,
    filter: true,
    floatingFilter: false,
    resizable : true,
  };

  return (
    <Layout>
      <HeaderBanner />
      <ModalButton/>
      <AddDetailsModal show={showLogin} close={() => setShowLogin(false)} autofillData={requiredData}
        roleOptions={roleOptions} onEdit={onEditData} onEditReset={() => setOnEditData(false)} 
        gender={gen}
      />
    
      <div
        className=" ag-theme-alpine"
        style={{ height: "100vh" }}
      >
      <AgGridReact
      columnDefs={columnDefs}
      rowData={resourceGridData}
      defaultColDef={defaultColDef}
      pagination={true} // Enable pagination
      paginationPageSize={10} // Number of rows per page
      cacheBlockSize={10}
      onGridReady={handleResourceGridData}
      ></AgGridReact>
    </div>
    <br/>
      <div className="page-bottom" >
      </div>
    </Layout>
  );
}

export default ResourceGrid;




