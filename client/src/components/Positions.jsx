import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import axios from "axios";
import url from "../url";
import useStyles from "../hooks/useStyles";

export default function Positions(props) {
  const { authToken, setAuthToken, isAuth, setIsAuth, funds, setFunds } = props;

  const classes = useStyles();

  useEffect(() => {
    if (authToken !== "") {
      axios
        .get(url + "/getdata/user/profile", {
          headers: {
            auth: "bearer " + authToken,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setFunds(res.data.funds);
            if (!isAuth) setIsAuth(true);
          }
        })
        .catch((e) => {
          var res = e.response;
          if (res.status === 403) {
            localStorage.removeItem("authToken");
            setAuthToken("");
            setIsAuth(false);
          }
        });
    }
  }, []);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Box display="flex" flexDirection="column" padding="1rem">
        <Box
          bgcolor={"#fff"}
          boxShadow={1}
          display="flex"
          flexDirection="column"
          padding="0.5rem 0.8rem"
        >
          <h1 className={classes.thinHeading}>Positions</h1>
        </Box>
      </Box>
    </>
  );
}
