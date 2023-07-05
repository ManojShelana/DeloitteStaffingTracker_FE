import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";
import DropdownMenu from "./UserIcon";
import logoImage from "../../images/logo.jpg";


const WelcomeHeader = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#0F0B0B" }}>
      <Toolbar>
        
        <img
          src={logoImage}
          alt="logo"
          style={{ height: "60px", marginRight: "8px" }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Staffing Tool
        </Typography>
        {/* sx={{ flexGrow: 1 }}  */}
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ marginRight: "8px" }}>
            Username
          </Typography>
          <Avatar>  
            <DropdownMenu />
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default WelcomeHeader;
