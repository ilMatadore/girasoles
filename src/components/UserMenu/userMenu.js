import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useHistory } from "react-router-dom";

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history2 = useHistory();
  console.log(props);
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
        style={{
          backgroundColor: "#eec47c",
          border: "1px solid #eec47c",
          color: "#235e1b",
        }}
      >
        {props.currentUser.id ? props.currentUser.first_name : null}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            history2.push("/profile");
            handleClose();
          }}
        >
          Mi Perfil
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            props.handleLogout();
          }}
        >
          Cerrar Sesion
        </MenuItem>
      </Menu>
    </>
  );
}
