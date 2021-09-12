import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@material-ui/core";
import axios from "axios";
import url from "../url";
import SimpleDialog from "./SimpleDialog";
import { Link } from "react-router-dom";

export default function Register() {
  const [formBody, setFormBody] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });
  const [dialogMsg, setDialogMsg] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(formBody);

    axios
      .post(url + "/addData/user/register", formBody, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setDialogTitle("Success");
          setDialogMsg("Registered Successfully!");
          handleClickOpen();
        }
      })
      .catch((e) => {
        var res = e.response;
        if (res.status === 409) {
          setDialogMsg("Email already exists, Try another one");
          setDialogTitle("Error");
          handleClickOpen();
        }
      });
  };

  return (
    <>
      <SimpleDialog
        message={dialogMsg}
        title={dialogTitle}
        open={open}
        handleClose={handleClose}
        loginPage={true}
      />
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
            Register
          </Typography>
          <TextField
            id="userName"
            label="Name"
            value={formBody.userName}
            onChange={(e) => {
              setFormBody({ ...formBody, userName: e.target.value });
            }}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            id="userEmail"
            label="Email"
            type="email"
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
            inputProps={{
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.source,
            }}
          />
          <Typography>
            <li>Password should contain at least one lowercase letter.</li>
            <li>Password should contain at least one upercase letter.</li>
            <li>Password should contain at least one number.</li>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            style={{ marginTop: "10px" }}
            type="submit"
          >
            Submit
          </Button>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="10px"
          >
            <Link to="/login">Login here</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
