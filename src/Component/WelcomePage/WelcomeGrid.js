import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styling/WelcomePage/WelcomeGrid.css";
import AddIcon from "@mui/icons-material/Add";
import HandshakeIcon from "@mui/icons-material/Handshake";
import OutboundIcon from "@mui/icons-material/Outbound";

const WelcomeGrid = () => {
  const navigate = useNavigate();

  const handleContainerClick = () => {
    navigate("/ResourceGrid.js");
  };

  const handleConfigureClick = () => {
    navigate("/ConfigureProjectGrid.js");
  };

  return (
    <div className="tile-container">
      <div className="box1" onClick={handleConfigureClick}>
        <div className="box">
          <AddIcon style={{ color: "#86BC24", fontSize: "50px" }} />
        </div>
        <div className="tiles-name pt-3">Configure your Project</div>
      </div>

      <div className="box2" onClick={handleContainerClick}>
        <div className="box">
          <HandshakeIcon style={{ color: "#86BC24", fontSize: "50px" }} />
        </div>
        <h1 className="tiles-name pt-3">Onboarding</h1>
      </div>

      <div className="box3">
        <div className="box">
          <OutboundIcon style={{ color: "#86BC24", fontSize: "50px" }} />
        </div>
        <h1 className="tiles-name pt-3">Roll-Off</h1>
      </div>
    </div>
  );
};

export default WelcomeGrid;
