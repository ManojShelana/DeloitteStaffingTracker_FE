import React, { useState } from "react";
import "../../Styling/OnboardingForm/OnboardingForm.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HeaderBanner from "./OnboardingHeader";
import Layout from "../LayOut";
import ResourceGrid from "./ResourceGrid/ResourceGrid.js";

const OnboardingForm = () => {
  const [isChecked, setIsChecked] = useState(true);

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

  const handleSubmit = async () => {
    event.preventDefault();
    // if (formData.endDate< formData.startDate) {
    //   alert('End date cannot be earlier than the start date!');
    // }
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);

    const MyData = {
      id: 0,
      projectName: "Omnia",
      projectDescription: "This is testing",
      client: {
        id: 0,
        isActive: true,
        clientName: "DAS",
        createDate: "2023-06-26T07:20:07.359Z",
        updateDate: "2023-06-26T07:20:07.359Z",
      },
      isActive: true,
      createDate: "2023-06-26T07:20:07.359Z",
      updateDate: "2023-06-26T07:20:07.359Z",
    };

    const response = await fetch(
      `https://localhost:5001/api/Employee/createProject`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(MyData),
      }
    );

    console.log(await response);
  };

  // You can now use the jsonData as needed, such as sending it to an API

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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Layout>
      <HeaderBanner />

      <div className="container-fluid form-container p-5 pt-4">
        <div className="form-group">
          <label className="form-label" htmlFor="resourceName">
            ResourceName:
          </label>
          <input
            className="form-input"
            type="text"
            id="resourceName"
            name="resourceName"
            value={formData.resourceName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="customSelect">
            Designation:
          </label>
          <select
            className="form-input"
            id="customSelect"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          >
            <option value="">-- select --</option>
            <option id="1" value="Intern">
              Intern
            </option>
            <option id="2" value="Associate Analyst">
              Associate Analyst
            </option>
            <option id="3" value="Analyst">
              Analyst
            </option>
            <option id="4" value="Consultant">
              Consultant
            </option>
            <option id="5" value="Senior Consultant">
              Senior Consultant
            </option>
            <option id="6" value="Specialist Senior">
              Specialist Senior
            </option>
            <option id="7" value="Manager">
              Manager
            </option>
            <option id="8" value="Specialist Master">
              Specialist Master
            </option>
            <option id="9" value="Senior Manager">
              Senior Manager
            </option>
            <option id="10" value="Specialist Leader">
              Specialist Leader
            </option>
            <option id="11" value="Managing Director">
              Managing Director
            </option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="gender">
            Gender:
          </label>
          <select
            className="form-input"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">-- select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="customSelect">
            Project:
          </label>
          <select
            className="form-input"
            id="customSelect"
            name="project"
            value={formData.project}
            onChange={handleChange}
          >
            <option value="">-- select --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="role">
            Role:
          </label>
          <select
            className="form-input"
            id="customSelect"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">-- select --</option>
            <option id="1" value="Full-Stack Developer">
              Full-Stack Developer
            </option>
            <option id="2" value="BE Developer">
              BE Developer
            </option>
            <option id="3" value="FE Developer">
              FE Developer
            </option>
            <option id="4" value="ITPO">
              ITPO
            </option>
            <option id="5" value="TL">
              TL
            </option>
            <option id="6" value="TA">
              TA
            </option>
            <option id="7" value="SA">
              SA
            </option>
            <option id="8" value="Management">
              Management
            </option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="startDate">
            StartDate:
          </label>
          <DatePicker
            className="form-input"
            id="startDate"
            selected={formData.startDate}
            value={formData.startDate}
            dateFormat="dd-MM-yyyy"
            showTimeSelect={false}
            onChange={handleStartDateChange}
            placeholderText="Select a date"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="endDate">
            EndDate:
          </label>
          <DatePicker
            className="form-input"
            id="endDate"
            selected={formData.endDate}
            value={formData.endDate}
            dateFormat="dd-MM-yyyy"
            showTimeSelect={false}
            onChange={handleEndDateChange}
            placeholderText="Select a date"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="managerName">
            ManagerName:
          </label>
          <select
            className="form-input"
            id="customSelect"
            name="managerName"
            value={formData.managerName}
            onChange={handleChange}
          >
            <option value="">-- select --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="seniorManagerName">
            Senior Manager Name:
          </label>
          <select
            className="form-input"
            id="customSelect"
            name="SMName"
            value={formData.SMName}
            onChange={handleChange}
          >
            <option value="">-- select --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="RMName">
            Resource Manager Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="RMName"
            name="RMName"
            value={formData.RMName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="managerEmail">
            Resource Manager Email:
          </label>
          <input
            className="form-input"
            type="email"
            id="managerEmail"
            name="RMEmail"
            value={formData.RMEmail}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="checkmark"></span>
          Is Resource align to the project
        </label>
      </div>

      <div>
        <button className="form-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="form-button m-3" onClick={handleCancel}>
          Cancel
        </button>
        <Link to="/">
          <button className="form-button m-3" type="reset">
            Home
          </button>
        </Link>
      </div>
      <hr />
      <div>
        <ResourceGrid />
      </div>
    </Layout>
  );
};

export default OnboardingForm;
