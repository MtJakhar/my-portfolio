import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import NavButtons from "./NavButtons";

const NavBar = () => {
  return (
    <AppBar color="transparent">
      <Toolbar className="flex">
        <Image src={logo} alt="icon" width={50} height={50} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <NavButtons />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
