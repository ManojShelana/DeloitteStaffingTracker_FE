import { useState } from "react";
import "../../../Styling/AddProjectModal/AddProjectModal.css";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

function AddProjectModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCancel = () => {
    SetNewProjectModal({
      clientName: "",
      projectName: "",
      projectCode: "",
      projectManagerName: "",
      seniorManagerName: "",
      managingDirectorName: "",
      roleName: "",
      skills: "",
      description: "",
    });
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
    },
    SetNewProjectModal,
  ] = useState({
    clientName: "",
    projectName: "",
    projectCode: "",
    projectManagerName: "",
    seniorManagerName: "",
    managingDirectorName: "",
    roleName: "",
    skills: "",
    description: "",
  });

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
  };

  const handleProjectCodeChange = (projectCode) => {
    const newprojectCode = projectCode.target.value;
    SetNewProjectModal((prev) => ({ ...prev, projectCode: newprojectCode }));
  };

  const handleDescriptionChange = (description) => {
    const newdescription = description.target.value;
    SetNewProjectModal((prev) => ({ ...prev, description: newdescription }));
  };

  const handleRoleNameChange = (RoleName) => {
    const newRoleName = RoleName.target.value;
    SetNewProjectModal((prev) => ({ ...prev, RoleName: newRoleName }));
  };

  const handleSkillsChange = (skills) => {
    const newSkillsName = skills.target.value;
    SetNewProjectModal((prev) => ({ ...prev, skillsName: newSkillsName }));
  };

  const handleSubmit = async () => {
    const MyData = {
      id: 0,
      projectName: projectName,
      projectCode: projectCode,
      clientName: clientName,
      projectDescription: description,
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

    const response = await fetch(
      `https://localhost:5001/api/manageconfiguration/saveProject`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(MyData),
      }
    ); //.then(resp =>resp.json()).then(ConfigureProjectGrid())
    console.log(await response);
  };

  return (
    <>
      <Button
        className="add-button"
        style={{ color: "white", border: "none", background: "#86BC24" }}
        onClick={handleShow}
      >
        Add Project
      </Button>

      <Modal className="modal-dialog-Padding" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <Form className="mb-6">
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.clientName"
                >
                  <Form.Label>Client Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtclientName"
                    name="txtclientName"
                    value={clientName}
                    placeholder="Enter Client Name"
                    onChange={(value) => handleClientNameChange(value)}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.projectName"
                >
                  <Form.Label>Project Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtprojectName"
                    name="txtprojectName"
                    value={projectName}
                    placeholder="Enter Project Name"
                    onChange={(value) => handleProjectNameChange(value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.projectCode"
                >
                  <Form.Label>Project Code</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtprojectCode"
                    name="txtprojectCode"
                    value={projectCode}
                    placeholder="Enter Project Code"
                    onChange={(value) => handleProjectCodeChange(value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.projectManagerName"
                >
                  <Form.Label>Project Manager Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtprojectManagerName"
                    name="txtprojectManagerName"
                    value={projectManagerName}
                    placeholder="Enter Project Manager Name"
                    onChange={(value) => handleProjectManagerNameChange(value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.seniorManagerName"
                >
                  <Form.Label>Senior Manager Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtseniorManagerName"
                    name="txtseniorManagerName"
                    value={seniorManagerName}
                    placeholder="Enter Senior Manager Name"
                    onChange={(value) => handleSeniorManagerNameChange(value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.managingDirectorName"
                >
                  <Form.Label>MD Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtmanagingDirectorName"
                    name="txtmanagingDirectorName"
                    value={managingDirectorName}
                    placeholder="Enter Managing Director Name"
                    onChange={(value) =>
                      handleManagingDirectorNameChange(value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="addProjectModal.roleName"
                >
                  <Form.Label>Role Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtroleName"
                    name="txtroleName"
                    value={roleName}
                    placeholder="Enter Role Name"
                    onChange={(value) => handleRoleNameChange(value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="addProjectModal.skills">
                  <Form.Label>Skills</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="skills"
                    name="skills"
                    value={skills}
                    placeholder="Enter Skills"
                    onChange={(value) => handleSkillsChange(value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  className="mb-3"
                  controlId="addProjectModal.description"
                  label="Description"
                >
                  {/* <Form.Label>Description</Form.Label> */}
                  <input
                    as="textarea"
                    style={{ height: '10px' }}
                    className="form-control"
                    id="txtdescription"
                    name="txtdescription"
                    value={description}
                    placeholder="Enter Description"
                    onChange={(value) => handleDescriptionChange(value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="is Active?"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ "align-self": "center" }}>
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
