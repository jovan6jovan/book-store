import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuLink: {
    color: "inherit",
    textDecoration: "none",
    marginRight: 32,
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.menuLink}>
              Book Store
            </Link>
          </Typography>
          <Typography>
            <Link to="/users" className={classes.menuLink}>
              Users
            </Link>
          </Typography>
          <Typography>
            <Link to="/add-book" className={classes.menuLink}>
              Add Book
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/add-user"
              className={classes.menuLink}
              style={{ marginRight: 0 }}
            >
              Add User
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
