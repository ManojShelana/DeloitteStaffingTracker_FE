import React from "react";
import "../../Styling/WelcomePage/WelcomeBanner.css";
import WelcomeGrid from "./WelcomeGrid.js";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Layout from "../LayOut";

const WelcomeBanner = () => {
  return (
    <Layout>
      <div className="container">
        <div className="welcome-container">
          <Diversity3Icon style={{ color: "#86BC24", fontSize: "50px" }} />
          <h1 style={{ color: "#86BC24", fontSize: "50px" }}>
            Welcome to Staffing Tracker
          </h1>
        </div>
        <br />
        <WelcomeGrid />
      </div>
    </Layout>
  );
};

export default WelcomeBanner;
