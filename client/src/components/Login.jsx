import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Button } from "@material-ui/core";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import url from "../url";
import Alert from "@material-ui/lab/Alert";

export default function Login(props) {
  const { authToken, setAuthToken, isAuth, setIsAuth } = props;

  const [formBody, setFormBody] = useState({ userEmail: "", password: "" });

  const [showError, setShowError] = useState("none");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if(localStorage.authToken != undefined){
      setAuthToken(localStorage.authToken);
      setIsAuth(true);
    }
  }, [])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(url + "/getdata/user/login", formBody, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setAuthToken(res.data);
        setFormBody({ userEmail: "", password: "" });
        localStorage.setItem("authToken", res.data);
        setIsAuth(true);
      })
      .catch((e) => {
        // console.log(e.response);
        var res = e.response;
        if (res.status === 401) {
          // console.log("Incorrect password");
          setErrorMsg("Incorrect password");
          setShowError("block");
        } else if (res.status === 404) {
          // console.log("User not found");
          setErrorMsg("User does not exist");
          setShowError("block");
        }
      });
  };

  if (isAuth) {
    return <Redirect to={"profile"} />;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={1}
      style={{ backgroundColor: "#f5f5f5", margin: 0, minHeight: "100vh" }}
    >
      <Box
        component="form"
        onSubmit={onSubmitHandler}
        display="flex"
        flexDirection="column"
        boxShadow={2}
        minWidth={0.3}
        style={{ backgroundColor: "#fff", padding: "2rem" }}
      >
        <Typography variant="h5" style={{ marginBottom: "10px" }}>
          Login
        </Typography>
        <TextField
          id="userEmail"
          label="Email"
          value={formBody.userEmail}
          onChange={(e) => {
            setFormBody({ ...formBody, userEmail: e.target.value });
          }}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={formBody.password}
          onChange={(e) => {
            setFormBody({ ...formBody, password: e.target.value });
          }}
          style={{ marginBottom: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          style={{ marginTop: "10px" }}
          type="submit"
        >
          Login
        </Button>
        <Box display={showError} marginTop="10px">
          <Alert
            severity="error"
            onClose={() => {
              setShowError("none");
            }}
          >
            {errorMsg}
          </Alert>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="10px"
        >
          <Link to="/register">Sign up here</Link>
        </Box>
      </Box>
    </Box>
  );
}
