import { React, useState, useEffect } from "react"; 
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap"; 
import Tooltip from "@material-ui/core/Tooltip"; 
import "../../../Styling/AddProjectModal/AddProjectModal.css";
import AddCircleIcon from "@mui/icons-material/AddCircle"; 
import Stack from "@mui/material/Stack"; 
import { IconButton } from "@material-ui/core"; 
import "../../../Styling/AddProjectModal/ModalTabs.css";

function ResourceDetailsForm({
  details,
  setDetails,
  detailsError,
  setDetailsError,
  rolesAndSkillsArray,
  setRolesAndSkillsArray,
}) {
  const [skillOptions, setSkillOptions] = useState();
  const [roleOptions, setRoleOptions] = useState(null);
  const [showTableData, setShowTableData] = useState(null);
  const onSkills = () => {
    if (details.skills === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        skillsError: "This is a required field",
      }));
      return true;
    }
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      skillsError: "",
    }));
    return false;
  };

  const onRoleName = () => {
    if (details.roleName === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        roleNameError: "This is a required field",
      }));
      return true;
    }
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      roleNameError: "",
    }));
    return false;
  };

  const onResourcesRequired = () => {
    if (details.resourcesRequired === "") {
      setDetailsError((prevFormError) => ({
        ...prevFormError,
        resourcesRequiredError: "This is a required field",
      }));
      return true;
    }
    setDetailsError((prevFormError) => ({
      ...prevFormError,
      resourcesRequiredError: "",
    }));
    return false;
  };

  const handleRoleNameChange = (roleName) => {
    const newRoleName = roleName.target.value;
    setDetails((prev) => ({ ...prev, roleName: newRoleName }));
  };

  const handleSkillsChange = (skills) => {
    const newSkillsName = skills.target.value;
    setDetails((prev) => ({ ...prev, skills: newSkillsName }));
  };

  const handleResourcesRequiredChange = (resourcesRequired) => {
    const newResourcesRequired = resourcesRequired.target.value;
    setDetails((prev) => ({
      ...prev,
      resourcesRequired: newResourcesRequired,
    }));
  };

  const handleRolesAndSkillsArray = () => {
    if (
      !(
        details.roleName === "" ||
        details.skills === "" ||
        details.resourcesRequired === ""
      )
    ) {
      var arr = [...rolesAndSkillsArray];
      arr.push({
        roleName: details.roleName,
        skills: details.skills,
        resourcesRequired: details.resourcesRequired,
      });
      setRolesAndSkillsArray(arr);
      setShowTableData(true);
      details.roleName = "";
      details.skills = "";
      details.resourcesRequired = "";
    } else {
      onRoleName() && onSkills() && onResourcesRequired();
    }
    console.log(setRolesAndSkillsArray);
  };

  // useEffect(() => {
  //   fetch(`https://localhost:7075/api/Base/getAllSkills`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //   .then(resp => console.log(resp))
  //     .then((resp) => resp.json())
  //     .then((data) => setSkillOptions(data))
  // });

  const handleEditData = async (data) => {
    // setShowLogin(true);

    const respons = await fetch(
      `https://localhost:7075/api/Base/getAllRolesById/0`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(resp => console.log(resp))
      .then((resp) => resp.json())
      .then((data) => setRoleOptions(data));
    // return setFormData(data);
  };

  const removeHandler = (index) => {
    const newArray = setRolesAndSkillsArray.slice();
    newArray.splice(index, 1);
    setRolesAndSkillsArray(newArray);
  };

  return (
    <>
      <Form className="mb-6 mt-3">
        <Stack direction="row" spacing={1}>
          {" "}
          <Col>
            <Form.Group className="mb-3" controlId="addProjectModal.roleName">
              <Form.Label>Roles*</Form.Label>
              <Tooltip
                title="Enter comma seperated roles"
                placement="bottom"
                variant="dense"
                arrow
              >
                <select
                  className="form-control select"
                  onBlur={onRoleName}
                  id="roleName"
                  name="roleName"
                  value={details.roleName}
                  placeholder="Enter Role"
                  onChange={(value) => handleRoleNameChange(value)}
                >
                  <option value="">-- select --</option>
                  {roleOptions &&
                    roleOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.projectRole}
                      </option>
                    ))}
                  {/* // <option value="1">One</option>
                  // <option value="2">Two</option>
                  // <option value="3">Three</option>
                  // <option value="4">Four</option>
                  // <option value="5">Five</option> */}
                </select>
              </Tooltip>
              {detailsError.roleNameError && (
                <p className="valid-text"> {detailsError.roleNameError} </p>
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
                <select
                  className="form-control"
                  onBlur={onSkills}
                  id="skills"
                  name="skills"
                  value={details.skills}
                  placeholder="Enter Skills"
                  onChange={(value) => handleSkillsChange(value)}
                >
                  {/* <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option> */}

                  <option value="">-- select --</option>

                  {skillOptions &&
                    skillOptions.map((option) => (
                      <option key={option.skillsetid} value={option.skillsetid}>
                        {option.skillSet}
                      </option>
                    ))}
                </select>
              </Tooltip>
              {detailsError.skillsError && (
                <p className="valid-text"> {detailsError.skillsError} </p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="addProjectModal.resourcesRequired"
            >
              <Form.Label>Required Resources*</Form.Label>
              <Tooltip
                title="Enter number of resources required"
                placement="bottom"
                variant="dense"
                arrow
              >
                <select
                  className="form-control"
                  onBlur={onResourcesRequired}
                  id="resourcesRequired"
                  name="Required Resources"
                  value={details.resourcesRequired}
                  placeholder={"Enter Rsesources Required"}
                  onChange={(value) => handleResourcesRequiredChange(value)}
                >
                  {/* <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option> */}
                  <option value="">-- select --</option>
                  {/* {skillOptions &&
                    skillOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.skillSet}
                      </option>
                    ))} */}
                </select>
              </Tooltip>
              {detailsError.resourcesRequiredError && (
                <p className="valid-text">
                  {" "}
                  {detailsError.resourcesRequiredError}{" "}
                </p>
              )}
            </Form.Group>
          </Col>
            <IconButton aria-label="add" onClick={handleRolesAndSkillsArray}>
              <AddCircleIcon />
            </IconButton>
        </Stack>
        <Row>
          {showTableData && (
            <table className="mb-3">
              {rolesAndSkillsArray.map((item, index) => {
                return (
                  <tr key={index}>
                    {Object.values(item).map((val) => (
                      <td className="descrip-field">{val}</td>
                    ))}
                    <td className="remove-button">
                      <button class="btn" onClick={() => removeHandler(index)}>
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
        </Row>
      </Form>
    </>
  );
}

export default ResourceDetailsForm;
