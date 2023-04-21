import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../api/userApi.js";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import useStyles from "./styles.js";

function Navbar() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector(store => store.auth);
  const classes = useStyles({ isLoggedIn });

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#0c0c0c" }}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            Nepflix
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <TextField label="Search" variant="standard" />
          {user &&
            <Typography>
              {` ${user.first_name} ${user.last_name} `}
            </Typography>}
          <Button className={classes.authbth}>
            {isLoggedIn
              ? <Button
                  className={classes.logoutbtn}
                  onClick={() => dispatch(signOut())}
                >
                  Logout
                </Button>
              : <Button className={classes.loginbtn}>Log In</Button>}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
