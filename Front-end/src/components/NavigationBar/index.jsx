import * as React from "react";
import { Outlet, Link } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";

import { Logout } from "@mui/icons-material";

import { styles } from "./styles";

const NavigationBar = () => {
  const classes = styles();

  return (
    <>
      <AppBar position="sticky">
        <CssBaseline />
        <Toolbar>
          <Typography className={classes.logo}>
            Fujicraft Inventory Management System
          </Typography>
          <div className={classes.navlinks}>
            <Link to="/orders" className={classes.link}>
              Orders
            </Link>
            <Link to="/medicine" className={classes.link}>
              Medicine
            </Link>
            {/* <Link to="/invoice" className={classes.link}>
              Invoice
            </Link> */}
            <Link to="/pharmacy" className={classes.link}>
              Pharmacy
            </Link>
            <Link to="/user" className={classes.link}>
              User
            </Link>

            <Link to="/" className={classes.link}>
              <Logout />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Grid className={classes.children}>
        <Outlet />
      </Grid>
    </>
  );
};
export default NavigationBar;
