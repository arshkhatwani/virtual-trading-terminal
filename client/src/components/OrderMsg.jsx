import React, { useState } from "react";
import { Snackbar, Button } from "@material-ui/core";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function OrderMsg(props) {
  const { open, setOpen, msg } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const showMsg = (msg) => {
    if (msg == "success")
      return (
        <Alert severity="success" sx={{ width: "100%" }} onClose={handleClose}>
          Order Completed
        </Alert>
      );
    else if (msg == "insufficient funds")
      return (
        <Alert severity="error" sx={{ width: "100%" }} onClose={handleClose}>
          Cannot process order due to Insufficient funds
        </Alert>
      );
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        {showMsg(msg)}
      </Snackbar>
    </>
  );
}
