import React, { useState } from "react";
import { Snackbar, Button } from "@material-ui/core";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function OrderMsg(props) {
  const { open, setOpen } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }} onClose={handleClose}>
          Order Completed
        </Alert>
      </Snackbar>
    </>
  );
}
