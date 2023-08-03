import { useState, useEffect } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "../../../Styling/OnboardingForm/ResourceGrid/AddDetails.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@material-ui/core/Tooltip";

function AddDetailsModal( props ) {

  //console.log("PROPS in My MODAL", props);

  const roleOptions = (props.roleOptions); 
  const [skillOptions, setSkillOptions] = useState([]);

  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const handleOptionChange = event => {
    setSelectedRole(event.target.value);
  };

  const handleSkillOptionChange = event => {
    setSelectedSkill(event.target.value);
  };

  const handleCancel = () => {
    props.onEditReset();
    setFormData(initialValue);
    setFormError(initialErrorValue);
  };

  const initialValue = {
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

  const initialErrorValue = {
    resourceNameError: "",
    emailError: "",
    roleError: "",
    genderError: "",
    projectError: "",
    managerNameError: "",
    RMNameError: "",
    RMEmailError: "",
    SMNameError: "",
    designationError: "",
    startDateError: "",
    endDateError: "",
  };
  
  const [formData, setFormData] = useState(initialValue);
  const [formError, setFormError] = useState(initialErrorValue);
  const [autoData, setAutoData] = useState(props.autofillData);

  const notify = () => {
    toast.success("Saved Successfully", { autoClose: 3000 });
  };

  useEffect(() => {
    if(props.onEdit) {
      searchAndPopulate()
  }

    fetch(
      `https://localhost:7075/api/Base/getAllSkills`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
    )
    .then((resp) => resp.json())
    .then((data) => setSkillOptions(data))   
  });
  
  const searchAndPopulate = () => {
    
     return (
      formData.resourceId =  autoData.resourceId,
      formData.resourceName = autoData.resourceName,
      formData.email = autoData.email,
      formData.role = autoData.role,
      //formData.project = autoData.project,
      formData.managerName = autoData.managerName,
      formData.RMName = autoData.RMName,
      formData.RMEmail = autoData.RMEmail,
      formData.designation = autoData.designation,
      formData.startDate = autoData.startDate,
      formData.endDate = autoData.endDate,
      formData.gender = props.gender
     )    
  };

  const validateFormControl = () => {
    let formError = {};
    let isValid = true;

    if (formData.resourceName.length === 0) {
      formError.resourceNameError = "Resource Name Required";
    }

    if (formData.email.length === 0) {
      formError.emailError = "Email Required";
    }

    if (!(formData.email.length === 0 || formData.email.match(pattern))) {
      formError.emailError = "Invalid Email";
    }

    if (formData.role.length === 0) {
      formError.roleError = "Roles Required";
    }

    if (formData.gender.length === 0) {
      formError.genderError = "Gender Name Required";
    }

    if (formData.project.length === 0) {
      formError.projectError = "Project Name Required";
    }

    if (formData.managerName.length === 0) {
      formError.managerNameError = "Manager Name Required";
    }

    if (formData.designation.length === 0) {
      formError.designationError = "Designation Required";
    }

    if (formData.startDate.length === 0) {
      formError.startDateError = "StartDate Required";
    }

    if (formData.endDate.length === 0) {
      formError.endDateError = "EndDate Required";
    }

    if (formData.startDate.length > 0 && formData.endDate.length > 0) {
      if (formData.startDate > formData.endDate) {
        formError.endDateError = "End date should be later than start date";
      }
    }
    if (Object.keys(formError).length > 0) {
      setFormError(formError);
      isValid = false;
    }
    return isValid;
  };

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleStartDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      startDate: date.target.value,
    }));
    
  };

  const handleEndDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      endDate: date.target.value,
    }));
  };

  const onResourceName = () => {
    if (formData.resourceName === "" ) {
      setFormError((prevFormError) => ({
        ...prevFormError,
        resourceNameError: "Resource Name Required",
      }))
    }
    else {setFormError((prevFormError) => ({
      ...prevFormError,
      resourceNameError: "",
    }))} 
    //searchAndPopulate();  
  };
  
  const onEmail = () => {
    if (formData.email === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        emailError: "Email Required",
      }))
    } else if (
      !(formData.email.length === 0 || formData.email.match(pattern))
    ) {
      setFormError((prevFormError) => ({
        ...prevFormError,
        emailError: "Invalid Email",
      }))
    }
    else {
      setFormError((prevFormError) => ({
        ...prevFormError,
        emailError: "",
      }))
    }
  };
  const onRole = () => {
    if (formData.role === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        roleError: "Role Required",
      }));
    }
    else {
      setFormError((prevFormError) => ({
        ...prevFormError,
        roleError: "",
      }));
    }
  };
  const onSkills = () => {
    if (formData.skills === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        roleError: "skills Required",
      }));
    }
    else {
      setFormError((prevFormError) => ({
        ...prevFormError,
        roleError: "",
      }));
    }
  };
  const onProject = () => {
    if (formData.project === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        projectError: "Project Required",
      }));
    }
    else {
      setFormError((prevFormError) => ({
        ...prevFormError,
        projectError: "",
      }));
    }
  };
  const onGender = () => {
    if (formData.gender === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        genderError: "Gender Name Required",
      }));
    }
    else {
      setFormError((prevFormError) => ({
        ...prevFormError,
        genderError: "",
      }));
    }
  };
  const onManagerName = () => {
    if (formData.managerName === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        managerNameError: "Manager Name Required",
      }))}
      else {
        setFormError((prevFormError) => ({
          ...prevFormError,
          managerNameError: "",
        }))
      }
  };

  const onRMEmail = () => {
    if(
      !formData.RMEmail.match(pattern) ||
      !formData.RMEmail.length === 0
    ) {
      setFormError((prevFormError) => ({
        ...prevFormError,
        RMEmailError: "Invalid Email",
      }));
    }
    else {
      setFormError((prevFormError) => ({
        ...prevFormError,
        RMEmailError: "",
      }))
    }
  };

  const onDesignation = (e) => {
    if (formData.designation === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        designationError: "Designation Required",
      }));
    }
    else{
    setFormError((prevFormError) => ({
      ...prevFormError,
      designationError: "",
    }))}
  };
  const onStartDate = () => {
    if (formData.startDate === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        startDateError: "Start Date Required",
      }));
    }
    else {
      setFormError((prevFormError) => ({
        ...prevFormError,
        startDateError: "",
      }));
    }
  };
  const onEndDate = () => {
    if (formData.endDate === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        endDateError: "End Date Required",
      }));
    }
    else if (formData.startDate > formData.endDate) {
      setFormError((prevFormError) => ({
        ...prevFormError,
      endDateError : "End date should be later than start date",
    }));
  }
    else{
      setFormError((prevFormError) => ({
        ...prevFormError,
        endDateError: "",
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
    notify();
    props.close();

    // if(resourceId > 0)
    // {
    //     //PUT api call for update resource and pass respective resouce id in payload
    // }
    // else
    // {
    //   //Post api call for save resource and pass resource id as 0 in payload.
    // }
    const MyData = {
        lastName: "",
        userName: "",
        resourceName: formData.resourceName,
        resourceEmail: formData.email,
        businessOffering: "string",
        jobLevel: formData.designation,
        projectId: 0,
        projectRoleId: 0,
        projectSkillId: 0,
        projectStartDate: "2023-08-02T13:45:52.710Z",
        projectEndDate: "2023-08-02T13:45:52.710Z",
        genderId: 0,
        managerId: 0,
        seniorManagerId: 0,
        resourceManagerName: "string",
        resourceManagerEmail: "string",
        baseLocation: "string",
        isActive: "string"
    }

    // resourceId: "",
    // resourceName: "",
    // email: "",
    // role: "",
    // skills: "",
    // gender: "",
    // project: "",
    // managerName: "",
    // RMName: "",
    // RMEmail: "",
    // designation: "",
    // startDate: "",
    // endDate: "",

    const response = await fetch(
      `https://localhost:7075/api/Resource/createResource`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(MyData)
      }
    ) //.then(resp =>resp.json()).then(resp=>ConfigureProjectGrid())
    //handleGetGridData();
    console.log(await response);

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
      <Modal
        className="modal-dialog-Padding"
        dialogClassName="custom-modal"
        show={props.show}
        cancel={props.close}
      >
        <Modal.Header className="modal-header" closeButton onClick={props.close}>
          <Modal.Title>Add Onboarding Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Resource Name*</Form.Label>
                  <Tooltip
                    title="Enter Resource Name"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      // onFocus={focusEvent}
                      // onBlur={() =>
                      //   setFormError(
                      //     validateResourceNameControl(formData.resourceName)
                      //   )
                      // }
                      onBlur={onResourceName}
                      className="form-control"
                      id="resourceName"
                      name="resourceName"
                      value={formData.resourceName}
                      placeholder="Enter Resource Name"
                      onChange={handleChange}
                    />
                  </Tooltip>
                  {formError.resourceNameError && (
                    <p className="valid-text">
                      {" "}
                      {formError.resourceNameError}{" "}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.resourceName"
                >
                  <Form.Label>Email*</Form.Label>
                  <Tooltip
                    title="Enter Email"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="email"
                      // onFocus={focusEvent}
                      onBlur={onEmail}
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="Enter Email"
                      onChange={handleChange}
                      //readonly="readonly"    
                    />
                  </Tooltip>
                  {formError.emailError && (
                    <p className="valid-text"> {formError.emailError} </p>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.designation"
                >
                  <Form.Label>Designation*</Form.Label>
                  <Tooltip
                    title="Enter Designation"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      className="form-control"
                      // onFocus={focusEvent}
                      onBlur={onDesignation}
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      placeholder="Enter Designation"
                      onChange={handleChange}
                      //readonly="readonly"  
                    />
                  </Tooltip>
                  {formError.designationError && (
                    <p className="valid-text">
                      {" "}
                      {formError.designationError}{" "}
                    </p>
                  )}
        
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Gender*</Form.Label>
                  <Tooltip
                    title="Select Gender"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <select
                      className="form-control"
                      id="gender"
                      // onFocus={focusEvent}
                      onBlur={onGender}
                      name="gender"
                      value={formData.gender}
                      placeholder="Gender"
                      onChange={handleChange}
                    >
                      <option value="">-- select --</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </Tooltip>
                  {formError.genderError && (
                    <p className="valid-text"> {formError.genderError} </p>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.project"
                >
                  <Form.Label>Project Name*</Form.Label>
                  <Tooltip
                    title="Select Project Name"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <select
                      as="select"
                      onBlur={onProject}
                      className="form-control"
                      placeholder="Project"
                      onChange={handleChange}
                      name="project"
                      value={formData.project}
                    >
                      {/* {Projects.myProjects && */}
                      {Projects.myProjects.map((index) => (
                        <option
                          key={index.Id}
                          value={index.DisplayText}
                          id={index.Id}
                        >
                          {index.DisplayText}
                        </option>
                      ))}
                    </select>
                  </Tooltip>
                  {formError.projectError && (
                    <p className="valid-text"> {formError.projectError} </p>
                  )}
                  {/* </Form.Control> */}
                </Form.Group>
              </Col>
              <Col>
              <Form.Group
                  className="mb-3"
                  // controlId="formData.managerName"
                >
                  <Form.Label>Manager Name*</Form.Label>
                  <Tooltip
                    title="Enter Manager Name"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      className="form-control"
                      // onFocus={focusEvent}
                      onBlur={onManagerName}
                      id="managerName"
                      name="managerName"
                      value={formData.managerName}
                      placeholder="Manager Name"
                      onChange={handleChange}
                    />
                  </Tooltip>
                  {formError.managerNameError && (
                    <p className="valid-text">
                      {" "}
                      {formError.managerNameError}{" "}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.startDate"
                >
                  <Form.Label>Start Date:*</Form.Label>
                  <br />
                  <Tooltip
                    title="Enter Start Date"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="date"
                      className="form-control"
                      id="startDate"
                      // onFocus={focusEvent}
                      onBlur={onStartDate}
                      selected={formData.startDate}
                      value={formData.startDate}
                      onChange={handleStartDateChange}
                    />
                  </Tooltip>
                  {formError.startDateError && (
                    <p className="valid-text"> {formError.startDateError} </p>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.startDate"
                >
                  <Form.Label>End Date:*</Form.Label>
                  <br />
                  <Tooltip
                    title="Enter End Date"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="date"
                      className="form-control"
                      id="endDate"
                      // onFocus={focusEvent}
                      onBlur={onEndDate}
                      // selected={formData.endDate}
                      value={formData.endDate}
                      onChange={handleEndDateChange}
                      // onClick={handleEndDate}
                    />
                  </Tooltip>
                  {formError.endDateError && (
                    <p className="valid-text"> {formError.endDateError} </p>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.managerName"
                >
                  <Form.Label>Roles*</Form.Label>
                <Tooltip
                  title="Select Roles"
                  placement="bottom"
                  variant="dense"
                  arrow
                >
                  <select
                    className="form-control"
                    id="role"
                    // onFocus={focusEvent}
                    onBlur={onRole}
                    name="role"
                    //value={formData.role}
                    value={selectedRole}
                    placeholder="Select Roles"
                    onChange={handleOptionChange}
                    //onChange={handleChange}
                  >
                    <option value="">-- select --</option>
                      {roleOptions && roleOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.projectRole}
                      </option>
                    ))}                    
                  </select>
                </Tooltip>
                {formError.roleError && (
                  <p className="valid-text"> {formError.roleError} </p>
                )}
                </Form.Group>
              </Col>
              <Col>
              <Form.Group
                  className="mb-3"
                  // controlId="formData.managerName"
                >
                  <Form.Label>Skills*</Form.Label>
                <Tooltip
                  title="Select Roles"
                  placement="bottom"
                  variant="dense"
                  arrow
                >
                  <select
                    className="form-control"
                    id="role"
                    // onFocus={focusEvent}
                    onBlur={onSkills}
                    name="role"
                    //value={formData.skills}
                    value={selectedSkill}
                    placeholder="Select Skills"
                    onChange={handleSkillOptionChange}
                    //onChange={handleChange}
                  >
                    <option value="" style={{fontSize:'8px'}}>-- select --</option>
                      {skillOptions && skillOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.skillSet}
                      </option>
                    ))}                    
                  </select>
                </Tooltip>
                {formError.roleError && (
                  <p className="valid-text"> {formError.roleError} </p>
                )}
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
                  <Tooltip
                    title="Enter Resource Manager Name"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="text"
                      className="form-control"
                      // onFocus={focusEvent}
                      // onBlur={onRMName}
                      id="RMName"
                      name="RMName"
                      value={formData.RMName}
                      placeholder="Resource Manager Name"
                      onChange={handleChange}
                    />
                  </Tooltip>
                  {formError.RMNameError && (
                    <p className="valid-text"> {formError.RMNameError} </p>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  // controlId="formData.RMEmail"
                >
                  <Form.Label>Resource Manager Email</Form.Label>
                  <Tooltip
                    title="Enter Resource Manager Email"
                    placement="bottom"
                    variant="dense"
                    arrow
                  >
                    <input
                      type="email"
                      className="form-control"
                      id="RMEmail"
                      name="RMEmail"
                      // onFocus={focusEvent}
                      onBlur={onRMEmail}
                      value={formData.RMEmail}
                      placeholder="Resource Manager Email"
                      onChange={handleChange}
                    />
                  </Tooltip>
                  {formError.RMEmailError && (
                    <p className="valid-text"> {formError.RMEmailError} </p>
                  )}
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
          style={{ alignSelf: "center" }}
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
        </Modal.Footer>
      </Modal>
     </>
  );
};

export default AddDetailsModal;
