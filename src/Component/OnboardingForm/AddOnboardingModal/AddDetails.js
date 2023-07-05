import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
// import '../';
import "react-datepicker/dist/react-datepicker.css";
import "../../../Styling/OnboardingForm/ResourceGrid/AddDetails.css";

function AddProjectModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [isChecked, setIsChecked] = useState(true);

  const [formData, setFormData] = useState({
    resourceName: "",
    email: "",
    role: "",
    gender: "",
    project: "",
    managerName: "",
    RMName: "",
    RMEmail: "",
    SMName: "",
    designation: "",
    startDate: null,
    endDate: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleStartDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      startDate: date,
      error: "",
    }));
  };

  const handleEndDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      endDate: date,
      error: "",
    }));
  };

  const handleCancel = () => {
    setFormData({
      resourceName: "",
      email: "",
      role: "",
      gender: "",
      project: "",
      managerName: "",
      RMName: "",
      RMEmail: "",
      SMName: "",
      designation: "",
      startDate: null,
      endDate: null,
    });
  };

  const handleSubmit = async () => {
    const MyData = {
      project: {
        projectStartDate: formData.startDate,
        projectEndDate: formData.endDate,
        projectId: formData.project,
      },
      employeeMananger: {
        managerType: 1,
        onboardingId: 0,
      },
      employeeSeniorMananger: {
        managerType: 3,
        onboardingId: 0,
      },
      firstName: formData.resourceName,
      lastName: formData.resourceName,
      gender: formData.gender,
      businessArea: "",
      emailId: formData.email,
      designationId: formData.designation,
      roleId: formData.role,
      resourceManagerName: formData.RMName,
      resourceManagerEmailId: formData.RMEmail,
      baseLocation: "Bangalore",
    };

    const response = await fetch(
      `https://localhost:5001/api/Employee/saveResourceData`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(MyData),
      }
    ); //.then(resp =>resp.json()).then(ConfigureProjectGrid())
    console.log(await response);
  };
  const DataRoles = {
    myDataRole: [
      {
        Id: 0,
        Value: "0",
        DisplayText: "--select--",
      },
      {
        Id: 1,
        Value: "1",
        DisplayText: "Intern",
      },
      {
        Id: 2,
        Value: "2",
        DisplayText: "Associate Analyst",
      },
      {
        Id: 3,
        Value: "3",
        DisplayText: "Analyst",
      },
      {
        Id: 4,
        Value: "4",
        DisplayText: "Consultant",
      },
      {
        Id: 5,
        Value: "5",
        DisplayText: "Senior Consultant",
      },
      {
        Id: 6,
        Value: "6",
        DisplayText: "Specialist Senior",
      },
      {
        Id: 7,
        Value: "7",
        DisplayText: "Manager",
      },
      {
        Id: 8,
        Value: "8",
        DisplayText: "Specialist Master",
      },
      {
        Id: 9,
        Value: "9",
        DisplayText: "Senior Manager",
      },
      {
        Id: 10,
        Value: "10",
        DisplayText: "Specialist Leader",
      },
      {
        Id: 11,
        Value: "11",
        DisplayText: "Managing Director",
      },
    ],
  };

  const Projects = {
    myProjects: [
      {
        Id: 0,
        Value: "0",
        DisplayText: "--select--",
      },
      {
        Id: 1,
        Value: "1",
        DisplayText: "State Of KY",
      },
      {
        Id: 2,
        Value: "2",
        DisplayText: "Beacon",
      },
      {
        Id: 3,
        Value: "3",
        DisplayText: "Omnia",
      },
      {
        Id: 4,
        Value: "4",
        DisplayText: "Project Adam",
      },
    ],
  };
  return (
    <>
      <div style={{ textAlign: "right", marginRight: "20px" }}>
        <Button
          className="add-button"
          style={{ color: "white", border: "none", background: "#86BC24" }}
          onClick={handleShow}
        >
          Add Details
        </Button>
      </div>

      <Modal
        className="modal-dialog-Padding"
        dialogClassName="custom-modal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Onboarding Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="container-fluid form-container p-5 pt-4"> */}
          <Form>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.resourceName"
                >
                  <Form.Label>Resource Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="resourceName"
                    name="resourceName"
                    value={formData.resourceName}
                    placeholder="Enter Resource Name"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.resourceName"
                >
                  <Form.Label>Email</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter Email"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.designation"
                >
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    as="select"
                    className="form-control"
                    name="designation"
                    placeholder="Designation"
                  >
                    {/* onChange={(event) => this.handleChange(event)} */}
                    {DataRoles.myDataRole &&
                      DataRoles.myDataRole.map((index) => (
                        <option value={index.value}>{index.DisplayText}</option>
                      ))}
                  </Form.Control>

                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                >
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    className="form-control"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    placeholder="Gender"
                    onChange={handleChange}
                  >
                    <option value="">-- select --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.project"
                >
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    as="select"
                    className="form-control"
                    placeholder="Project"
                    onChange={handleChange}
                  >
                    {Projects.myProjects &&
                      Projects.myProjects.map((index) => (
                        <option value={index.value}>{index.DisplayText}</option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  className="form-control"
                  id="role"
                  name="role"
                  value={formData.role}
                  placeholder="Role"
                  onChange={handleChange}
                >
                  <option value="">-- select --</option>
                  <option id="1" value="1">
                    Full-Stack Developer
                  </option>
                  <option id="2" value="2">
                    BE Developer
                  </option>
                  <option id="3" value="3">
                    FE Developer
                  </option>
                  <option id="4" value="4">
                    ITPO
                  </option>
                  <option id="5" value="5">
                    TL
                  </option>
                  <option id="6" value="6">
                    TA
                  </option>
                  <option id="7" value="7">
                    SA
                  </option>
                  <option id="8" value="8">
                    Management
                  </option>
                </Form.Control>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.startDate"
                >
                  <Form.Label>Start Date:</Form.Label>
                  <DatePicker
                    className="form-input"
                    id="startDate"
                    selected={formData.startDate}
                    value={formData.startDate}
                    dateFormat="dd/MM/yyyy"
                    showTimeSelect={false}
                    onChange={handleStartDateChange}
                    placeholderText="Select a date"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.startDate"
                >
                  <Form.Label>End Date:</Form.Label>
                  <DatePicker
                    className="form-input"
                    id="endDate"
                    selected={formData.endDate}
                    value={formData.endDate}
                    dateFormat="dd/MM/yyyy"
                    showTimeSelect={false}
                    onChange={handleEndDateChange}
                    placeholderText="Select a date"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.managerName"
                >
                  <Form.Label>Manager Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="managerName"
                    name="managerName"
                    value={formData.managerName}
                    placeholder="Manager Name"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.managerName"
                >
                  <Form.Label>Senior Manager Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="SMName"
                    name="SMName"
                    value={formData.SMName}
                    placeholder="SeniorManager Name"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.RMName"
                >
                  <Form.Label>Resource Manager Name</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="RMName"
                    name="RMName"
                    value={formData.RMName}
                    placeholder="RM Name"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.RMEmail"
                >
                  <Form.Label>Resource Manager Email</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    id="RMEmail"
                    name="RMEmail"
                    value={formData.RMEmail}
                    placeholder="RM Email"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* <div className="mb-3">
    <label>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
      className="mr-1"
    />
    Is Resource align to the project
    </label>
  </div> */}
          </Form>
        </Modal.Body>

        <Modal.Footer
          style={{ "align-self": "center" }}
          className="modal-Footer justify-content-center modal-footer"
        >
          <Button
            variant="secondary"
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

          <Link to="/">
            <Button
              variant="primary"
              style={{ color: "white", border: "none", background: "#86BC24" }}
            >
              Home
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProjectModal;
