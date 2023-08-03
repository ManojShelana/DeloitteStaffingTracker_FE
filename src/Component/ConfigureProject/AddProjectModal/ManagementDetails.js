import React, { useState } from "react"; 
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap"; 
import Tooltip from "@material-ui/core/Tooltip"; 
import "../../../Styling/AddProjectModal/AddProjectModal.css";
import AddCircleIcon from "@mui/icons-material/AddCircle"; 
import IconButton from "@mui/material/IconButton"; 
import Stack from "@mui/material/Stack"; 
import "../../../Styling/AddProjectModal/ModalTabs.css";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

function ManagementDetails({
  details,
  setDetails,
  detailsError,
  setDetailsError,
  projectManagerDetailsArray,
  setProjectManagerDetailsArray,
  seniorManagerDetailsArray,
  setSeniorManagerDetailsArray,
  managingDirectorDetailsArray,
  setManagingDirectorDetailsArray,
}) {
  const [showMTableData, setShowMTableData] = useState(false);
  const [showSMTableData, setShowSMTableData] = useState(false);
  const [showMDTableData, setShowMDTableData] = useState(false);
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const removeHandler = (index, arrayType) => {
    // Determine which array to update based on the arrayType parameter.
    switch (arrayType) {
      case 'projectManager':
        const newProjectManagerArray = projectManagerDetailsArray.slice();
        newProjectManagerArray.splice(index, 1);
        setProjectManagerDetailsArray(newProjectManagerArray);
        break;
      case 'seniorManager':
        const newSeniorManagerArray = seniorManagerDetailsArray.slice();
        newSeniorManagerArray.splice(index, 1);
        setSeniorManagerDetailsArray(newSeniorManagerArray);
        break;
      case 'managingDirector':
        const newManagingDirectorArray = managingDirectorDetailsArray.slice();
        newManagingDirectorArray.splice(index, 1);
        setManagingDirectorDetailsArray(newManagingDirectorArray);
        break;
      default:
        // Handle any other array type or throw an error if necessary.
        break;
    }
  };

  const handleProjectManagerArray = () => {
    if (
      !(
        details.projectManagerName === "" ||
        details.projectManagerEmail === "" ||
        details.projectManagerDesignation === ""
      )
    ) {
      var arr = [...projectManagerDetailsArray];
      arr.push({
        projectManagerName: details.projectManagerName,
        projectManagerEmail: details.projectManagerEmail,
        projectManagerDesignation: details.projectManagerDesignation,
      });
      setProjectManagerDetailsArray(arr);
      setShowMTableData(true);
      details.projectManagerName = "";
      details.projectManagerEmail = "";
      details.projectManagerDesignation = "";
    } else {
      onProjectManagerName() &&
        onProjectManagerEmail() &&
        onProjectManagerDesignation();
    }
    console.log(projectManagerDetailsArray);
  };

  const handleSeniorManagerArray = () => {
    if (
      !(
        details.seniorManagerName === "" ||
        details.seniorManagerEmail === "" ||
        details.seniorManagerDesignation === ""
      )
    ) {
      var arr = [...seniorManagerDetailsArray];
      arr.push({
        seniorManagerName: details.seniorManagerName,
        seniorManagerEmail: details.seniorManagerEmail,
        seniorManagerDesignation: details.seniorManagerDesignation,
      });
      setSeniorManagerDetailsArray(arr);
      setShowSMTableData(true);
      details.seniorManagerName = "";
      details.seniorManagerEmail = "";
      details.seniorManagerDesignation = "";
    } else {
      onSeniorManagerName() &&
        onSeniorManagerEmail() &&
        onSeniorManagerDesignation();
    }
  };
  const handleManagingDirectorArray = () => {
    if (
      !(
        details.managingDirectorName === "" ||
        details.managingDirectorEmail === "" ||
        details.managingDirectorDesignation === ""
      )
    ) {
      var arr = [...managingDirectorDetailsArray];
      arr.push({
        managingDirectorName: details.managingDirectorName,
        managingDirectorEmail: details.managingDirectorEmail,
        managingDirectorDesignation: details.managingDirectorDesignation,
      });
      setManagingDirectorDetailsArray(arr);
      setShowMDTableData(true);
      details.managingDirectorName = "";
      details.managingDirectorEmail = "";
      details.managingDirectorDesignation = "";
    } else {
      onManagingDirectorName() &&
        onManagingDirectorEmail() &&
        onManagingDirectorDesignation();
    }
  };
  const handleProjectManagerNameChange = (projectManagerName) => {
    const newprojectManagerName = projectManagerName.target.value;
    setDetails((prev) => ({
      ...prev,
      projectManagerName: newprojectManagerName,
    }));
  };

  const handleProjectManagerEmailChange = (projectManagerEmail) => {
    const newprojectManagerEmail = projectManagerEmail.target.value;
    setDetails((prev) => ({
      ...prev,
      projectManagerEmail: newprojectManagerEmail,
    }));
  };

  const handleProjectManagerDesignationChange = (projectManagerDesignation) => {
    const newprojectManagerDesignation = projectManagerDesignation.target.value;
    setDetails((prev) => ({
      ...prev,
      projectManagerDesignation: newprojectManagerDesignation,
    }));
  };

  const handleSeniorManagerNameChange = (seniorManagerName) => {
    const newseniorManagerName = seniorManagerName.target.value;
    setDetails((prev) => ({
      ...prev,
      seniorManagerName: newseniorManagerName,
    }));
  };
  const handleSeniorManagerEmailChange = (seniorManagerEmail) => {
    const newseniorManagerEmail = seniorManagerEmail.target.value;
    setDetails((prev) => ({
      ...prev,
      seniorManagerEmail: newseniorManagerEmail,
    }));
  };
  const handleSeniorManagerDesignationChange = (seniorManagerDesignation) => {
    const newseniorManagerDesignation = seniorManagerDesignation.target.value;
    setDetails((prev) => ({
      ...prev,
      seniorManagerDesignation: newseniorManagerDesignation,
    }));
  };

  const handleManagingDirectorNameChange = (managingDirectorName) => {
    const newmanagingDirectorName = managingDirectorName.target.value;
    setDetails((prev) => ({
      ...prev,
      managingDirectorName: newmanagingDirectorName,
    }));
  };
  const handleManagingDirectorEmailChange = (managingDirectorEmail) => {
    const newmanagingDirectorEmail = managingDirectorEmail.target.value;
    setDetails((prev) => ({
      ...prev,
      managingDirectorEmail: newmanagingDirectorEmail,
    }));
  };
  const handleManagingDirectorDesignationChange = (
    managingDirectorDesignation
  ) => {
    const newmanagingDirectorDesignation =
      managingDirectorDesignation.target.value;
    setDetails((prev) => ({
      ...prev,
      managingDirectorDesignation: newmanagingDirectorDesignation,
    }));
  };

  const onProjectManagerName = () => {
    if (details.projectManagerName === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        projectManagerNameError: "This is a required field",
      }));
      return true;
    }
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      projectManagerNameError: "",
    }));

    return false;
  };
  const onProjectManagerEmail = () => {
    if (details.projectManagerEmail === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        projectManagerEmailError: "This is a required field",
      }));
      return true;
    }
    //  else if (
    //   !(
    //     details.projectManagerEmail === "" ||
    //     details.projectManagerEmail.match(pattern)
    //   )
    // ) {
    //   setDetailsError((prevFormError) => ({
    //     ...prevFormError,
    //     projectManagerEmailError: "Invalid Email",
    //   }));
    //
    // else {
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      projectManagerEmailError: "",
    }));
    return false;
  };
  const onProjectManagerDesignation = () => {
    if (details.projectManagerDesignation === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        projectManagerDesignationError: "This is a required field",
      }));
      return true;
    }
    // else {
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      projectManagerDesignationError: "",
    }));
    return false;
  };

  const onSeniorManagerName = () => {
    if (details.seniorManagerName === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        seniorManagerNameError: "This is a required field",
      }));
      return true;
    }
    // else {
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      seniorManagerNameError: "",
    }));
    return false;
  };
  const onSeniorManagerEmail = () => {
    if (details.seniorManagerEmail === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        seniorManagerEmailError: "This is a required field",
      }));
      return true;
    }
    // else if (
    //   !(
    //     details.seniorManagerEmail.length === 0 ||
    //     details.seniorManagerEmail.match(pattern)
    //   )
    // ) {
    //   setDetailsError((prevFormError) => ({
    //     ...prevFormError,
    //     seniorManagerEmailError: "Invalid Email",
    //   }));
    // else {
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      seniorManagerEmailError: "",
    }));
    return false;
  };
  const onSeniorManagerDesignation = () => {
    if (details.seniorManagerDesignation === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        seniorManagerDesignationError: "This is a required field",
      }));
      return true;
    }
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      seniorManagerDesignationError: "",
    }));
    return false;
  };
  const onManagingDirectorName = () => {
    if (details.managingDirectorName === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        managingDirectorNameError: "This is a required field",
      }));
      return true;
    }
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      managingDirectorNameError: "",
    }));
    return false;
  };
  const onManagingDirectorEmail = () => {
    if (details.managingDirectorEmail === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        managingDirectorEmailError: "This is a required field",
      }));
      return true;
    }
    // else if (
    //   !(
    //     details.managingDirectorEmail.length === 0 ||
    //     details.managingDirectorEmail.match(pattern)
    //   )
    // ) {
    //   setDetailsError((prevFormError) => ({
    //     ...prevFormError,
    //     managingDirectorEmailError: "Invalid Email",
    //   }));
    // }
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      managingDirectorEmailError: "",
    }));
    return true;
  };
  const onManagingDirectorDesignation = () => {
    if (details.managingDirectorDesignation === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        managingDirectorDesignationError:
          "This is a required field",
      }));
      return false;
    }
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      managingDirectorDesignationError: "",
    }));
    return true;
  };
  return (
    <>
      <Form className="mb-6 mt-3">
        <Stack direction="row" spacing={1}>
          {" "}
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.projectManagerName"
            >
              <Form.Label>Project Manager*</Form.Label>
              <Tooltip
                title="Enter Project Manager"
                placement="bottom"
                variant="dense"
                arrow
              >
                <input
                  className="form-control"
                  onBlur={onProjectManagerName}
                  id="txtprojectManagerName"
                  name="txtprojectManagerName"
                  value={details.projectManagerName}
                  placeholder="Enter Project Manager"
                  onChange={(value) => handleProjectManagerNameChange(value)}
                />
              </Tooltip>
              {detailsError.projectManagerNameError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.projectManagerNameError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.projectManagerEmail"
            >
              <Form.Label>Project Manager Email*</Form.Label>
              <Tooltip
                title="Enter Project Manager Email"
                placement="bottom"
                variant="dense"
                arrow
              >
                <input
                  // as="select"
                  // multiple="multiple"
                  className="form-control"
                  onBlur={onProjectManagerEmail}
                  id="txtprojectManagerEmail"
                  name="txtprojectManagerEmail"
                  value={details.projectManagerEmail}
                  placeholder="Enter Project Manager Email"
                  onChange={(value) => handleProjectManagerEmailChange(value)}
                />
              </Tooltip>
              {detailsError.projectManagerEmailError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.projectManagerEmailError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.projectManagerDesignation"
            >
              <Form.Label>Project Manager Designation *</Form.Label>
              <Tooltip
                title="Enter Project Manager Designation"
                placement="bottom"
                variant="dense"
                arrow
              >
                <input
                  className="form-control"
                  onBlur={onProjectManagerDesignation}
                  id="txtprojectManagerDesignation"
                  name="txtprojectManagerDesignation"
                  value={details.projectManagerDesignation}
                  placeholder="Enter Project Manager Designation"
                  onChange={(value) =>
                    handleProjectManagerDesignationChange(value)
                  }
                />
              </Tooltip>
              {detailsError.projectManagerDesignationError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.projectManagerDesignationError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
          <IconButton aria-label="add" onClick={handleProjectManagerArray}>
            <AddCircleIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={1}>
          {""}
          {showMTableData && (
            <table className="mb-3">
              {projectManagerDetailsArray.map((item, index) => {
                return (
                  <tr key={index}>
                    {Object.values(item).map((val) => (
                      <td className="descrip-field">{val}</td>
                    ))}
                    <td className="remove-button">
                      <button class="btn" onClick={()=>removeHandler(index, 'projectManager')}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
          {""}
        </Stack>
        <Stack direction="row" spacing={1}>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.seniorManagerName"
            >
              <Form.Label>Senior Manager*</Form.Label>
              <Tooltip
                title="Enter Senior Manager"
                placement="bottom"
                variant="dense"
                arrow
              >
                <input
                  type="text"
                  className="form-control"
                  onBlur={onSeniorManagerName}
                  id="txtseniorManagerName"
                  name="txtseniorManagerName"
                  value={details.seniorManagerName}
                  placeholder="Enter Senior Manager"
                  onChange={(value) => handleSeniorManagerNameChange(value)}
                />
              </Tooltip>
              {detailsError.seniorManagerNameError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.seniorManagerNameError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.seniorManagerNameEmail"
            >
              <Form.Label>Senior Manager Email*</Form.Label>
              <Tooltip
                title="Enter Senior Manager Email"
                placement="bottom"
                variant="dense"
                arrow
              >
                <input
                  type="text"
                  className="form-control"
                  onBlur={onSeniorManagerEmail}
                  id="txtseniorManagerEmail"
                  name="txtseniorManagerEmail"
                  value={details.seniorManagerEmail}
                  placeholder="Enter Senior Manager Email"
                  onChange={(value) => handleSeniorManagerEmailChange(value)}
                />
              </Tooltip>
              {detailsError.seniorManagerEmailError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.seniorManagerEmailError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.seniorManagerDesignation"
            >
              <Form.Label>Senior Manager Designation*</Form.Label>
              <Tooltip
                title="Enter Senior Manager Designation"
                placement="bottom"
                variant="dense"
                arrow
              >
                <input
                  type="text"
                  className="form-control"
                  onBlur={onSeniorManagerDesignation}
                  id="txtseniorManagerDesignation"
                  name="txtseniorManagerDesignation"
                  value={details.seniorManagerDesignation}
                  placeholder="Enter Senior Manager Designation"
                  onChange={(value) =>
                    handleSeniorManagerDesignationChange(value)
                  }
                />
              </Tooltip>
              {detailsError.seniorManagerDesignationError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.seniorManagerDesignationError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
          <IconButton aria-label="add" onClick={handleSeniorManagerArray}>
            <AddCircleIcon />
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={1}>
          {showSMTableData && (
            <table className="mb-3">
              {seniorManagerDetailsArray.map((item, index) => {
                return (
                  <tr key={index}>
                    {Object.values(item).map((val) => (
                      <td className="descrip-field">{val}</td>
                    ))}
                    <td className="remove-button">
                      <button class="btn" onClick={()=>removeHandler(index,'seniorManager')}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
        </Stack>
        <Stack direction="row" spacing={1}>
          {" "}
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.managingDirectorName"
            >
              <Form.Label>Managing Director*</Form.Label>
              <Tooltip
                title="Enter Managing Director"
                placement="bottom"
                variant="dense"
                arrow
              >
                <input
                  type="text"
                  className="form-control"
                  onBlur={onManagingDirectorName}
                  id="txtmanagingDirectorName"
                  name="txtmanagingDirectorName"
                  value={details.managingDirectorName}
                  placeholder="Enter Managing Director"
                  onChange={(value) => handleManagingDirectorNameChange(value)}
                />
              </Tooltip>
              {detailsError.managingDirectorNameError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.managingDirectorNameError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.managingDirectorEmail"
            >
              <Form.Label>Managing Director Email *</Form.Label>
              <Tooltip
                title="Enter Managing Director Email"
                placement="bottom"
                variant="dense"
                arrow
              >
                <input
                  type="text"
                  className="form-control"
                  onBlur={onManagingDirectorEmail}
                  id="txtmanagingDirectorEmail"
                  name="txtmanagingDirectorEmail"
                  value={details.managingDirectorEmail}
                  placeholder="Enter Managing Director Email"
                  onChange={(value) => handleManagingDirectorEmailChange(value)}
                />
              </Tooltip>
              {detailsError.managingDirectorEmailError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.managingDirectorEmailError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.managingDirectorDesignation"
            >
              <Form.Label>Managing Director Designation*</Form.Label>
              <Tooltip
                title="Enter Managing Director Designation"
                placement="bottom"
                variant="dense"
                arrow
              >
                <input
                  type="text"
                  className="form-control"
                  onBlur={onManagingDirectorDesignation}
                  id="txtmanagingDirectorDesignation"
                  name="txtmanagingDirectorDesignation"
                  value={details.managingDirectorDesignation}
                  placeholder="Enter Managing Director Designation"
                  onChange={(value) =>
                    handleManagingDirectorDesignationChange(value)
                  }
                />
              </Tooltip>
              {detailsError.managingDirectorDesignationError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.managingDirectorDesignationError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
          <IconButton aria-label="add" onClick={handleManagingDirectorArray}>
            <AddCircleIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={1}>
          {showMDTableData && (
            <table className="mb-3">
              {managingDirectorDetailsArray.map((item, index) => {
                return (
                  <tr key={index}>
                    {Object.values(item).map((val) => (
                      <td className="descrip-field">{val}</td>
                    ))}
                    <td className="remove-button">
                      <button class="btn" onClick={()=>removeHandler(index, 'managingDirector')}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}

              {/* {projectManagerDetailsArray.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))} */}
            </table>
          )}
        </Stack>
      </Form>
    </>
  );
}

export default ManagementDetails;