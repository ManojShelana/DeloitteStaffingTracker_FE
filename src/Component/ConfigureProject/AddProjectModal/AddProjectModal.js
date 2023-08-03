import { useState } from "react";
import "../../../Styling/AddProjectModal/AddProjectModal.css";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@material-ui/core/Tooltip";

function AddProjectModal() {
  const initialValue = {
    clientName: "",
    projectName: "",
    projectCode: "",
    projectManagerName: "",
    seniorManagerName: "",
    managingDirectorName: "",
    roleName: "",
    skills: "",
    description: "",
    documentLink: "",
    isActive: "",
  };

  const initialErrorValue = {
    clientNameError: "",
    projectNameError: "",
    projectCodeError: "",
    projectManagerNameError: "",
    seniorManagerNameError: "",
    managingDirectorNameError: "",
    roleNameError: "",
    skillsError: "",
    descriptionError: "",
    documentLinkError: "",
  };
  const [
    {
      clientName,
      projectName,
      projectCode,
      projectManagerName,
      seniorManagerName,
      managingDirectorName,
      roleName,
      skills,
      description,
      documentLink,
      isActive,
    },
    SetNewProjectModal,
  ] = useState(initialValue);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    handleCancel();
    SetNewProjectModal(initialValue);
  };

  // const [submitting, setSubmitting] = useState(false);
  // const [focus, setFocus] = useState(false);
  const notify = () => {
    // Calling toast method by passing string
    toast.success("Saved Successfully", { autoClose: 3000 });
  };
  
  const [formError, setFormError] = useState(initialErrorValue);

  const handleCancel = () => {
    SetNewProjectModal(initialValue);
    setFormError(initialErrorValue);
  };

  const handleProjectNameChange = (projectName) => {
    const newprojectName = projectName.target.value;
    SetNewProjectModal((prev) => ({ ...prev, projectName: newprojectName }));
  };

  const handleProjectManagerNameChange = (projectManagerName) => {
    const newprojectManagerName = projectManagerName.target.value;
    SetNewProjectModal((prev) => ({
      ...prev,
      projectManagerName: newprojectManagerName,
    }));
  };

  const handleSeniorManagerNameChange = (seniorManagerName) => {
    const newseniorManagerName = seniorManagerName.target.value;
    SetNewProjectModal((prev) => ({
      ...prev,
      seniorManagerName: newseniorManagerName,
    }));
  };

  const handleManagingDirectorNameChange = (managingDirectorName) => {
    const newmanagingDirectorName = managingDirectorName.target.value;
    SetNewProjectModal((prev) => ({
      ...prev,
      managingDirectorName: newmanagingDirectorName,
    }));
  };

  const handleClientNameChange = (clientName) => {
    const newclientName = clientName.target.value;
    SetNewProjectModal((prev) => ({ ...prev, clientName: newclientName }));
    console.log(clientName);
  };

  const handleProjectCodeChange = (projectCode) => {
    const newprojectCode = projectCode.target.value;
    SetNewProjectModal((prev) => ({ ...prev, projectCode: newprojectCode }));
  };

  const handleDescriptionChange = (description) => {
    const newdescription = description.target.value;
    SetNewProjectModal((prev) => ({ ...prev, description: newdescription }));
  };

  const handleRoleNameChange = (roleName) => {
    const newRoleName = roleName.target.value;
    SetNewProjectModal((prev) => ({ ...prev, roleName: newRoleName }));
  };

  const handleSkillsChange = (skills) => {
    const newSkillsName = skills.target.value;
    SetNewProjectModal((prev) => ({ ...prev, skills: newSkillsName }));
  };

  const handleDocumentLinkChange = (documentLink) => {
    const newDocumentLinkName = documentLink.target.value;
    SetNewProjectModal((prev) => ({
      ...prev,
      documentLink: newDocumentLinkName,
    }));
  };

  const handleisActiveChange = (isActive) => {
    const newIsActive = isActive.target.value;
    SetNewProjectModal((prev) => ({
      ...prev,
      isActive: newIsActive,
    }));
  };

  const validateFormControl = () => {
    let formError = {};
    let isValid = true;

    if (clientName.length === 0) {
      formError.clientNameError = "Client Name Required";
    }
    if (projectName.length === 0) {
      formError.projectNameError = "Project Name Required";
    }
    if (projectCode.length === 0) {
      formError.projectCodeError = "Project Code Required";
    }
    if (projectManagerName.length === 0) {
      formError.projectManagerNameError = "Project Manager Name Required";
    }
    if (seniorManagerName.length === 0) {
      formError.seniorManagerNameError = "Senior Manager Name Required";
    }
    if (managingDirectorName.length === 0) {
      formError.managingDirectorNameError = "Managing Director Name Required";
    }
    if (roleName.length === 0) {
      formError.roleNameError = "Role Required";
    }
    if (skills.length === 0) {
      formError.skillsError = "Skills Required";
    }
    
    if(Object.keys(formError).length >0)
    {
      setFormError(formError);
      isValid = false;
    }
    return isValid;
  };

  // const focusEvent = () => {
  //   // console.log("call")
  //   if (initialValue && formError) {
  //     setFormError(initialErrorValue);
  //   }
  // };
  const onClientName = () => {
    if (clientName === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        clientNameError: "Client Name Required",
      }));
    }
    else {
      setFormError((prevFormError) => ({
        ...prevFormError,
        clientNameError: "",
      }));
    }
  };

const onProjectName = () => {
  if (projectName === "") {
    setFormError((prevFormError) => ({
      ...prevFormError,
      projectNameError: "Project Name Required",
    }));
  }
else {
  setFormError((prevFormError) => ({
    ...prevFormError,
    projectNameError: "",
  }));
}
};

const onProjectCode = () => {
  if (projectCode === "") {
    setFormError((prevFormError) => ({
      ...prevFormError,
      projectCodeError: "Project Code Required",
    }));
  }
  else {
    setFormError((prevFormError) => ({
      ...prevFormError,
      projectCodeError: "",
    }));
  }
};

const onProjectManagerName = () => {
  if (projectManagerName === "") {
    setFormError((prevFormError) => ({
      ...prevFormError,
      projectManagerNameError: "Project Manager Name Required",
    }));
  }
  else {
    setFormError((prevFormError) => ({
      ...prevFormError,
      projectCodeError: "",
    }));
  }
};

const onSeniorManagerName = () => {
  if (seniorManagerName === "") {
    setFormError((prevFormError) => ({
      ...prevFormError,
      seniorManagerNameError: "Senior Manager Name Required",
    }));
  }
  else {
    setFormError((prevFormError) => ({
      ...prevFormError,
      seniorManagerNameError: "",
    }));
  }
};

const onManagingDirectorName = () => {
  if (managingDirectorName === "") {
    setFormError((prevFormError) => ({
      ...prevFormError,
      managingDirectorNameError: "Managing Director Name Required",
    }));
  }
  else {
    setFormError((prevFormError) => ({
      ...prevFormError,
      managingDirectorNameError: "",
    }));
  }
};
const onSkillsName = () => {
  if (skills === "") {
    setFormError((prevFormError) => ({
      ...prevFormError,
      skillsError: "Skills Required",
    }));
  }
  else {
    setFormError((prevFormError) => ({
      ...prevFormError,
      skillsError: "",
    }));
  }
};

const onRoleName = () => {
  if (roleName === "") {
    setFormError((prevFormError) => ({
      ...prevFormError,
      roleNameError: "Role Required",
    }));
  }
  else {
    setFormError((prevFormError) => ({
      ...prevFormError,
      roleNameError: "",
    }));
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    let isValid = validateFormControl();

    if (!isValid) {
      return;
    } 
    toast.configure();

    const MyData = {
      id: 0,
      projectName: projectName,
      projectCode: projectCode,
      clientName: clientName,
      projectDescription: description,
      roleName: roleName,
      skills: skills,
      documentLink: documentLink,
      employeeMananger: {
        managerType: 2,
        onboardingId: 6,
        firstName: projectManagerName,
        lastName: projectManagerName,
        emailId: projectManagerName + "@deloitte.com",
      },
      employeeSeniorMananger: {
        managerType: 3,
        onboardingId: 8,
        firstName: seniorManagerName,
        lastName: seniorManagerName,
        emailId: seniorManagerName + "@deloitte.com",
      },
      employeeManagingDirector: {
        managerType: 4,
        onboardingId: 9,
        firstName: managingDirectorName,
        lastName: managingDirectorName,
        emailId: managingDirectorName + "@deloitte.com",
      },
      isActive: true,
      createDate: "2023-06-26T07:20:07.359Z",
      updateDate: "2023-06-26T07:20:07.359Z",
    };

    // const response = await fetch(
    //   `https://localhost:5001/api/manageconfiguration/saveProject`,
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(Mydata)
    //   }
    // ) //.then(resp =>resp.json()).then(resp=>ConfigureProjectGrid())
    //handleGetGridData();
    // console.log(await response);
    notify();
    handleClose();
    // console.log();
  };

  return (
    <>
      <div style={{ textAlign: "right", marginRight: "-10px" }}>
        <Button
          className="add-button"
          style={{ color: "white", border: "none", background: "#86BC24" }}
          onClick={handleShow}
        >
          Add Project
        </Button>
      </div>

      <Modal className="modal-dialog-Padding" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <Form className="mb-6">
            <Row>
              <Col>
                <Form.Group
                  className="mb-3 "
                  controlId="addProjectModal.clientName"
                >
                  <Form.Label>Client Name*</Form.Label>
                  <Tooltip
                    title="Enter Client Name"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      // onFocus={focusEvent}
                      onBlur={onClientName}
                      className="form-control tooltiptext"
                      id="txtclientName"
                      name="txtclientName"
                      value={clientName}
                      placeholder="Enter Client Name"
                      onChange={(value) => handleClientNameChange(value)}
                    />
                  </Tooltip>
                  {formError.clientNameError && (
                    <p className="valid-text">
                      {" "}
                      {formError.clientNameError}{" "}
                    </p>
                  )}
                </Form.Group>
              </Col>

              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.projectName"
                >
                  <Form.Label>Project Name*</Form.Label>
                  <Tooltip
                    title="Enter Project Name"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      // onFocus={focusEvent}
                      className="form-control"
                      id="txtprojectName"
                      name="txtprojectName"
                      onBlur={onProjectName}
                      value={projectName}
                      placeholder="Enter Project Name"
                      onChange={(value) => handleProjectNameChange(value)}
                    />
                  </Tooltip>
                  {formError.projectNameError && (
                    <p className="valid-text">
                      {" "}
                      {formError.projectNameError}{" "}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.projectCode"
                >
                  <Form.Label>Project Code*</Form.Label>
                  <Tooltip
                    title="Enter Project Code"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      className="form-control"
                      // onFocus={focusEvent}
                      id="txtprojectCode"
                      onBlur={onProjectCode}
                      name="txtprojectCode"
                      value={projectCode}
                      placeholder="Enter Project Code"
                      onChange={(value) => handleProjectCodeChange(value)}
                    />
                  </Tooltip>
                  {formError.projectCodeError && (
                    <p className="valid-text">
                      {" "}
                      {formError.projectCodeError}{" "}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.projectManagerName"
                >
                  <Form.Label>Project Manager Name*</Form.Label>
                  <Tooltip
                    title="Enter Project Manager Name"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      className="form-control"
                      // onFocus={focusEvent}
                      onBlur={onProjectManagerName}
                      id="txtprojectManagerName"
                      name="txtprojectManagerName"
                      value={projectManagerName}
                      placeholder="Enter Project Manager Name"
                      onChange={(value) =>
                        handleProjectManagerNameChange(value)
                      }
                    />
                  </Tooltip>
                  {formError.projectManagerNameError && (
                    <p className="valid-text">
                      {" "}
                      {formError.projectManagerNameError}{" "}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.seniorManagerName"
                >
                  <Form.Label>Senior Manager Name*</Form.Label>
                  <Tooltip
                    title="Enter Senior Manager Name"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      className="form-control"
                      onBlur={onSeniorManagerName}
                      // onFocus={focusEvent}
                      id="txtseniorManagerName"
                      name="txtseniorManagerName"
                      value={seniorManagerName}
                      placeholder="Enter Senior Manager Name"
                      onChange={(value) => handleSeniorManagerNameChange(value)}
                    />
                  </Tooltip>
                  {formError.seniorManagerNameError && (
                    <p className="valid-text">
                      {" "}
                      {formError.seniorManagerNameError}{" "}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.managingDirectorName"
                >
                  <Form.Label>Managing Director Name*</Form.Label>
                  <Tooltip
                    title="Enter Managing Director Name"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      className="form-control"
                      onBlur={onManagingDirectorName}
                      // onFocus={focusEvent}
                      id="txtmanagingDirectorName"
                      name="txtmanagingDirectorName"
                      value={managingDirectorName}
                      placeholder="Enter Managing Director Name"
                      onChange={(value) =>
                        handleManagingDirectorNameChange(value)
                      }
                    />
                  </Tooltip>
                  {formError.managingDirectorNameError && (
                    <p className="valid-text">
                      {" "}
                      {formError.managingDirectorNameError}{" "}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.roleName"
                >
                  <Form.Label>Roles*</Form.Label>
                  <Tooltip
                    title="Enter comma seperated roles"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      className="form-control"
                      onBlur={onRoleName}
                      // onFocus={focusEvent}
                      id="txtroleName"
                      name="txtroleName"
                      value={roleName}
                      placeholder="Enter Roles"
                      onChange={(value) => handleRoleNameChange(value)}
                    />
                  </Tooltip>
                  {formError.roleNameError && (
                    <p className="valid-text"> {formError.roleNameError} </p>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="addProjectModal.skills">
                  <Form.Label>Skills*</Form.Label>
                  <Tooltip
                    title="Enter comma seperated skills"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      className="form-control"
                      onBlur={onSkillsName}
                      // onFocus={focusEvent}
                      id="skills"
                      name="skills"
                      value={skills}
                      placeholder="Enter Skills"
                      onChange={(value) => handleSkillsChange(value)}
                    />
                  </Tooltip>
                  {formError.skillsError && (
                    <p className="valid-text"> {formError.skillsError} </p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  className="mb-2"
                  controlId="addProjectModal.description"
                  label="Description"
                >
                  <Tooltip
                    title="Enter Description"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      as="textarea"
                      style={{ height: "10px" }}
                      className="form-control"
                      // onFocus={focusEvent}
                      id="txtdescription"
                      name="txtdescription"
                      value={description}
                      placeholder="Enter Description"
                      onChange={(value) => handleDescriptionChange(value)}
                    />
                  </Tooltip>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  className="mb-2"
                  controlId="addProjectModal.documentLink"
                  label="Document Link"
                >
                  <Tooltip
                    title="Enter Document Link"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      as="textarea"
                      style={{ height: "10px" }}
                      className="form-control"
                      // onBlur={blurHandler}
                      // onFocus={focusEvent}
                      id="txtDocumentLink"
                      name="txtDocumentLink"
                      value={documentLink}
                      placeholder="Enter Document Link"
                      onChange={(value) => handleDocumentLinkChange(value)}
                    />
                  </Tooltip>
                </FloatingLabel>
              </Col>
            </Row>
            <Form.Check // prettier-ignore
              type="switch"
              id="isActive"
              label="is Active?"
              onChange={(value) => handleisActiveChange(value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ "align-self": "center", padding: "0px" }}>
          {/* <Button
            variant="secondary"
            style={{ color: "white", border: "none", background: "#86BC24" }}
            onClick={handleClose}
          >
            Close
          </Button> */}
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

export default AddProjectModal;
