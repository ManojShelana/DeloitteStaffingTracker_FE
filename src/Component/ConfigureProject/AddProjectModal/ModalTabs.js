import { useState } from "react";
import "../../../Styling/AddProjectModal/ModalTabs.css";
import { Modal, Button } from "react-bootstrap"; 
import ProjectDetailsForm from "./ProjectDetailsForm"; 
import ManagementDetails from "./ManagementDetails"; 
import ResourceDetailsForm from "./ResourceDetailsForm"; 
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

function ModalTabs(props) {

  const initialValue = {
    clientName: "",
     projectName: "",
    projectCode: "",
    roleName: "",
    skills: "",
    resourcesRequired: "",
    description: "",
    documentLink: "",
    isActive: "",
    projectManagerName: "",
    projectManagerEmail: "",
    projectManagerDesignation: "",
    seniorManagerName: "",
    seniorManagerEmail: "",
    seniorManagerDesignation: "",
    managingDirectorName: "",
    managingDirectorEmail: "",
    managingDirectorDesignation: "",
  };

  const initialErrorValue = {
    clientNameError: "",
     projectNameError: "",
    projectCodeError: "",
    roleNameError: "",
    skillsError: "",
    resourcesRequiredError: "",
    descriptionError: "",
    documentLinkError: "",
    projectManagerNameError: "",
    projectManagerEmailError: "",
    projectManagerDesignationError: "",
    seniorManagerNameError: "",
    seniorManagerEmailError: "",
    seniorManagerDesignationError: "",
    managingDirectorNameError: "",
    managingDirectorEmailError: "",
    managingDirectorDesignationError: "",
  };
  let globalVar = 0;
  const [details, setDetails] = useState(initialValue);
  const [detailsError, setDetailsError] = useState(initialErrorValue);
  const [projectManagerDetailsArray, setProjectManagerDetailsArray] = useState(
    []
  );
  const [rolesAndSkillsArray, setrolesAndSkillsArray] = useState([]);
  const [seniorManagerDetailsArray, setSeniorManagerDetailsArray] = useState(
    []
  );
  const [managingDirectorDetailsArray, setManagingDirectorDetailsArray] =
    useState([]);

  const notify = () => {
    toast.success("Saved Successfully", { autoClose: 3000 });
  };

  const [toggleState, setToggleState] = useState(1);
  const [show, setShow] = useState();
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleCancel = () => {
    setDetails(initialValue);
    setDetailsError(initialErrorValue);
    setProjectManagerDetailsArray([]);
    setSeniorManagerDetailsArray([]);
    setManagingDirectorDetailsArray([]);
  };
  const handleClose = () => {
    setShow(false);
  };

  const validateFormControl = () => {
    let detailsError = {};
    let isValid = true;

    if (details.clientName.length === 0) {
      detailsError.clientNameError = "This is a required field";
    }
    if (details.projectName.length === 0) {
      detailsError.projectNameError = "This is a required field";
    }
    if (details.projectCode.length === 0) {
      detailsError.projectCodeError = "This is a required field";
    }
    if (details.roleName.length === 0) {
      detailsError.roleNameError = "This is a required field";
    }
    if (details.skills.length === 0) {
      detailsError.skillsError = "This is a required field";
    }
    if (details.resourcesRequired.length === 0) {
      detailsError.resourcesRequiredError = "This is a required field";
    }
    if (projectManagerDetailsArray.length === 0) {
      detailsError.projectManagerNameError = "This is a required field";
      detailsError.projectManagerEmailError = "This is a required field";
      detailsError.projectManagerDesignationError = "This is a required field";
    }
    if (seniorManagerDetailsArray.length === 0) {
      detailsError.seniorManagerNameError = "This is a required field";
      detailsError.seniorManagerEmailError = "This is a required field";
      detailsError.seniorManagerDesignationError = "This is a required field";
    }
    if (managingDirectorDetailsArray.length === 0) {
      detailsError.managingDirectorNameError = "This is a required field";
      detailsError.managingDirectorEmailError = "This is a required field";
      detailsError.managingDirectorDesignationError =
        "This is a required field";
    }
    if (Object.keys(detailsError).length > 0) {
      setDetailsError(detailsError);
      isValid = false;
    }
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault(e);
    let isValid = validateFormControl();

    if (!isValid) {
      return;
    }

    const MyData = {
      // id: 0,
      projectName : details.projectName,
      projectCode: details.projectCode,
      clientName: details.clientName,
      projectDescription: details.description,
      projectDocumentLinks: details.documentLink,
      createDate: "2023-06-26T07:20:07.359Z",
      // updateDate: "2023-06-26T07:20:07.359Z",
      createdBy: 0,
      managers:[
        {
          email : details.projectManagerEmail,
          preferredName: details.projectManagerName
        }
      ],
      srManagers : [
        {
          email: details.seniorManagerEmail ,
          preferredName: details.seniorManagerName
        }
      ],
      mds: [
        {
          email: details.managingDirectorEmail,
          preferredName: details.managingDirectorName 
        }
      ],
      roles: [
        {
          roleId: 0,
          projectRole: details.roleName
        }
      ],
      skillSets: [
        {
          skillsetId: 0,
          skillSet: details.skills,
        }
      ], 
    }
    notify();
    handleClose();

    if(globalVar > 0)
    {
      //GetProjectByID
        //UpdateProject API call
        const response = await fetch(
          // `https://staffingtrackerdummy.azurewebsites.net/api/Project/updateProject/${Id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(MyData)
          }
        ) 
        .then(resp =>resp.json())
        props.handleGetGridData();
        console.log(await response);
        notify();
        handleClose();
    }
    else
    {
        //AddDetails API call
        const response = await fetch(
          `https://staffingtrackerdummy.azurewebsites.net/api/Project/createProject`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(MyData)
          }
        ) 
        .then(resp =>resp.json())
        props.handleGetGridData();
        console.log(await response);
        notify();
        handleClose();
    }
    globalVar = 0;
  };

  return (
    <>
      {/* <div style={{ textAlign: "right", marginRight: "-10px" }}>
        <Button
          className="add-button"
          style={{ color: "white", border: "none", background: "#86BC24" }}
          onClick={handleShow}
        >
          Add Project
        </Button>
      </div> */}
      <Modal
        className="modal-dialog-Padding"
        show={props.show}
        cancel={props.close}
      >
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Project Details
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Management Details
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Resource Requirements
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <ProjectDetailsForm
                details={details}
                detailsError={detailsError}
                setDetails={setDetails}
                setDetailsError={setDetailsError}
              />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <ManagementDetails
                details={details}
                detailsError={detailsError}
                setDetails={setDetails}
                setDetailsError={setDetailsError}
                projectManagerDetailsArray={projectManagerDetailsArray}
                setProjectManagerDetailsArray={setProjectManagerDetailsArray}
                seniorManagerDetailsArray={seniorManagerDetailsArray}
                setSeniorManagerDetailsArray={setSeniorManagerDetailsArray}
                managingDirectorDetailsArray={managingDirectorDetailsArray}
                setManagingDirectorDetailsArray={
                  setManagingDirectorDetailsArray
                }
              />
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <ResourceDetailsForm
                details={details}
                detailsError={detailsError}
                setDetails={setDetails}
                setDetailsError={setDetailsError}
                rolesAndSkillsArray={rolesAndSkillsArray}
                setrolesAndSkillsArray={setrolesAndSkillsArray}
              />
            </div>
          </div>
        </div>
        <Modal.Footer style={{ alignSelf: "center", padding: "0px" }}>
          <Button
            variant="primary"
            style={{ color: "white", border: "none", background: "#86BC24" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            variant="primary"
            style={{ color: "white", border: "none", background: "#86BC24" }}
            onClick={handleCancel}
          >
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTabs;
