import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { Typography, Button, Box, TextField } from "@material-ui/core";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function OrderBox(props) {
  const { open, setOpen, title, ltp, type, msgOpen, setMsgOpen } = props;

  const btnColor = type === "buy" ? "primary" : "secondary";
  const themeColor = type === "buy" ? "#3f51b5" : "#ff3d00";

  const [price, setPrice] = useState(ltp);
  const [qty, setQty] = useState(1);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
          style={{ backgroundColor: themeColor, color: "#fff" }}
        >
          {title} x {qty} Qty
          <Typography>LTP: {ltp}</Typography>
        </DialogTitle>
        <DialogContent>
          <Box
            margin="10px 0"
            padding="1rem"
            display="flex"
            justifyContent="space-around"
            alignItems="space-around"
            width="100%"
            marginBottom="5px"
          >
            <TextField
              variant="outlined"
              label="Qty."
              type="number"
              color={btnColor}
              size="small"
              style={{ width: "25%" }}
              focused
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Price"
              type="number"
              color={btnColor}
              size="small"
              style={{ width: "40%" }}
              focused
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Box>
          <Box>
            <Typography style={{ float: "left" }}>
              Margin: ${price * qty}
            </Typography>
          </Box>
        </DialogContent>
        <hr style={{ width: "100%" }} />
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="outlined"
            disableElevation
            color={btnColor}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disableElevation
            color={btnColor}
            onClick={() => {
              handleClose();
              setMsgOpen(true);
            }}
          >
            Execute
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
