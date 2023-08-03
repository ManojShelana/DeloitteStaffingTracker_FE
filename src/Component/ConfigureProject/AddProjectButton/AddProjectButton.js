import React , { useState } from 'react';
import "../../../Styling/AddProjectModal/AddProjectModal.css";
import ModalTabs from '../AddProjectModal/ModalTabs.js';

const AddDetailsButton = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <div style={{ textAlign: "right", marginRight: "-10px" }}>
      <button className="add-button"
          style={{ color: "white", border: "none", background: "#86BC24" }}
          onClick={() => setShowLogin(true)}>Add Project</button>
       <ModalTabs show={showLogin} close={() => setShowLogin(false)} />
    </div>
    </>
  );
};

export default AddDetailsButton;