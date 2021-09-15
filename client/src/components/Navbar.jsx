import React, { useState } from "react";
import { AppBar, Typography, Button, Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "../hooks/useStyles";
import PersonIcon from "@material-ui/icons/Person";

export default function Navbar(props) {
  const { authToken, setAuthToken, isAuth, setIsAuth } = props;

  const classes = useStyles();

  const [navTitle, setNavTitle] = useState("Navbar");

  const navLinks = [
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/contact",
      title: "Contact",
    },
    {
      to: "/profile",
      title: "Profile",
    },
  ];

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box display="flex" justifyContent="flex-end" padding="1rem">
          {navLinks.map((item) => {
            return (
              <Link
                className={classes.link_class}
                to={item.to}
                style={{ marginRight: 10 }}
              >
                <Button size="small">{item.title}</Button>
              </Link>
            );
          })}
          <Button
            color="primary"
            size="small"
            onClick={(e) => {
              localStorage.removeItem("authToken");
              setIsAuth(false);
              setAuthToken("");
            }}
          >
            Logout
          </Button>
          {/* <Box style={{ marginRight: 10 }}>
            <PersonIcon className={classes.link_class} />
          </Box> */}
        </Box>
      </AppBar>
    </>
  );
}
