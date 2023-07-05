import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountBoxSharpIcon style={{ color: "white" }} fontSize="large" />
      </IconButton>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>LogOut</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
