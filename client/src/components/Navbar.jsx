import React, { useState } from "react";
import { AppBar, Typography, Button, Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "../hooks/useStyles";
import { red } from "@mui/material/colors";
import Sidebar from "./Sidebar";

export default function Navbar(props) {
  const { authToken, setAuthToken, isAuth, setIsAuth, active } = props;

  const classes = useStyles();

  const [navTitle, setNavTitle] = useState("Navbar");
  const [activeOption, setActiveOption] = useState(active);

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
    {
      to: "/positions",
      title: "Positions",
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
          {navLinks.map((item, index) => {
            return (
              <Link
                key={index}
                className={classes.link_class}
                to={item.to}
                style={{ marginRight: 10 }}
              >
                <Button
                  size="small"
                  style={{
                    color: activeOption === item.title ? red[500] : "",
                  }}
                  onClick={(e) => {
                    setActiveOption(item.title);
                  }}
                >
                  {item.title}
                </Button>
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
