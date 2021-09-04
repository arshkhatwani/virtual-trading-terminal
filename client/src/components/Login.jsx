import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@material-ui/core";

// #f5f5f5

export default function Login(props) {
  const [formBody, setFormBody] = useState({ userEmail: "", password: "" });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

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
      </Box>
    </Box>
  );
}
