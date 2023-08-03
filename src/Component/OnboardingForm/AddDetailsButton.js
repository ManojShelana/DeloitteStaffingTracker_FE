import React , { useState } from 'react';
import AddDetailsModal from './AddOnboardingModal/AddDetails';
import "../../Styling/OnboardingForm/ResourceGrid/AddDetails.css";

const ModalButton = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <div style={{ textAlign: "right", marginRight: "-10px" }}>
      <button className="add-button"
          style={{ color: "white", border: "none", background: "#86BC24" }}
          onClick={() => setShowLogin(true)}>Add Resources</button>

       <AddDetailsModal show={showLogin} close={() => setShowLogin(false)} />
    </div>
    </>
  );
};

export default ModalButton;
