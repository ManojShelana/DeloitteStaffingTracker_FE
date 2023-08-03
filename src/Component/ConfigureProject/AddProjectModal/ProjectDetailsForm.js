import React from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap"; import Tooltip from "@material-ui/core/Tooltip"; import "../../../Styling/AddProjectModal/AddProjectModal.css";
import { useState } from "react";
import "../../../Styling/AddProjectModal/ModalTabs.css";

function ProjectDetailsForm({ details, setDetails, detailsError, setDetailsError }) {
//   const initialValue = {
//     clientName: "",
//     projectName: "",
//     projectCode: "",
//     description: "",
//     documentLink: "",
//   };
//   const initialErrorValue = {
//     clientNameError: "",
//     projectNameError: "",
//     projectCodeError: "",
//     descriptionError: "",
//     documentLinkError: "",
// //   };
//   const [details, setDetails] = useState(initialValue);
//   const [detailsError, setDetailsError] = useState(initialErrorValue);


// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prevDetails) => ({
//       ...prevDetails,
//       [e.target.name]: e.target.value,
//     }));
//     console.log(details);
//   };
  
  const handleClientNameChange = (clientName) => {
    const newclientName = clientName.target.value;
    setDetails((prev) => ({ ...prev, clientName: newclientName }));
    console.log(details);
  };
  const handleProjectNameChange = (projectName) => {
    const newprojectName = projectName.target.value;
    setDetails((prev) => ({ ...prev, projectName: newprojectName }));
    console.log(details);

  };
  const handleProjectCodeChange = (projectCode) => {
    const newprojectCode = projectCode.target.value;
    setDetails((prev) => ({ ...prev, projectCode: newprojectCode }));
    console.log(details);

  };
  const handleDescriptionChange = (description) => {
    const newdescription = description.target.value;
    setDetails((prev) => ({ ...prev, description: newdescription }));
    console.log(details);

  };
  const handleDocumentLinkChange = (documentLink) => {
    const newDocumentLinkName = documentLink.target.value;
    setDetails((prev) => ({
      ...prev,
      documentLink: newDocumentLinkName,
    }));
    console.log(details);

  };

  const onClientName = () => {
    if (details.clientName === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        clientNameError: "Client Name Required",
      }));
    } else {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        clientNameError: "",
      }));
    }
  };
  const onProjectName = () => {
    if (details.projectName === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        projectNameError: "Project Name Required",
      }));
    } else {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        projectNameError: "",
      }));
    }
  };

  const onProjectCode = () => {
    if (details.projectCode === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        projectCodeError: "Project Code Required",
      }));
    } else {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        projectCodeError: "",
      }));
    }
  };

  return (
    <>
      <Form className="mb-6 mt-3">
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
                  value={details.clientName}
                  onBlur={onClientName}
                  className="form-control tooltiptext"
                  id="txtclientName"
                  name="txtclientName"
                  placeholder="Enter Client Name"
                  onChange={(value) => handleClientNameChange(value)}
                />
              </Tooltip>
              {detailsError.clientNameError && (
                <p className="valid-text"> {detailsError.clientNameError} </p>
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
                  className="form-control"
                  id="txtprojectName"
                  name="txtprojectName"
                  onBlur={onProjectName}
                  value={details.projectName}
                  placeholder="Enter Project Name"
                  onChange={(value) => handleProjectNameChange(value)}
                />
              </Tooltip>
              {detailsError.projectNameError && (
                <p className="valid-text"> {detailsError.projectNameError} </p>
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
                  id="txtprojectCode"
                  onBlur={onProjectCode}
                  name="txtprojectCode"
                  value={details.projectCode}
                  placeholder="Enter Project Code"
                  onChange={(value) => handleProjectCodeChange(value)}
                />
              </Tooltip>
              {detailsError.projectCodeError && (
                    <p className="valid-text">
                      {" "}
                      {detailsError.projectCodeError}{" "}
                    </p>
                  )}
            </Form.Group>
          </Col>
          <Col>
          <Form.Check // prettier-ignore
          className = "mt-3"
          type="switch"
          id="isActive"
          label="is Active?"
          
          //   onChange={(value) => handleisActiveChange(value)}
        />
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
                  style={{ height: "5em" }}
                  className="form-control"
                  id="txtdescription"
                  name="txtdescription"
                  value={details.description}
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
                  style={{ height: "5em" }}
                  className="form-control"
                  id="txtDocumentLink"
                  name="txtDocumentLink"
                  value={details.documentLink}
                  placeholder="Enter Document Link"
                  onChange={(value) => handleDocumentLinkChange(value)}
                />
              </Tooltip>
            </FloatingLabel>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ProjectDetailsForm;
