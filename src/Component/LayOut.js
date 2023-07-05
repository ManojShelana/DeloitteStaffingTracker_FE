import React from "react";
import WelcomeHeader from "./WelcomePage/WelcomeHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <WelcomeHeader />
      <div style={{ marginTop: "30px" }}>
        {/* Content starts below the fixed header */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
