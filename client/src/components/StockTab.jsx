import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import OrderBox from "./OrderBox";
import OrderMsg from "./OrderMsg";

export default function StockTab(props) {
  const { symbol, ltp, authToken, funds, setFunds } = props;

  const [openB, setOpenB] = useState(false);
  const [openS, setOpenS] = useState(false);
  const [openC, setOpenC] = useState(false);
  const [orderMsg, setOrderMsg] = useState("success");

  return (
    <>
      <OrderMsg open={openC} setOpen={setOpenC} msg={orderMsg} />
      <OrderBox
        open={openB}
        setOpen={setOpenB}
        title={`Buy ${symbol}`}
        ltp={ltp}
        stock={symbol}
        type="buy"
        msgOpen={openC}
        setMsgOpen={setOpenC}
        authToken={authToken}
        setFunds={setFunds}
        setOrderMsg={setOrderMsg}
      />
      <OrderBox
        open={openS}
        setOpen={setOpenS}
        title={`Sell ${symbol}`}
        ltp={ltp}
        type="sell"
        msgOpen={openC}
        stock={symbol}
        setMsgOpen={setOpenC}
        authToken={authToken}
        setFunds={setFunds}
        setOrderMsg={setOrderMsg}
      />
      <Accordion style={{ width: "100%", marginBottom: "10px" }}>
        <AccordionSummary>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box>
              <Typography>{symbol}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">{ltp}</Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" width="100%" justifyContent="space-evenly">
            <Button
              variant="contained"
              size="small"
              disableElevation
              style={{ margin: "0 0.1rem" }}
              color="primary"
              onClick={() => {
                setOpenB(true);
              }}
            >
              B
            </Button>
            <Button
              variant="contained"
              size="small"
              disableElevation
              style={{ margin: "0 0.1rem" }}
              color="secondary"
              onClick={() => {
                setOpenS(true);
              }}
            >
              S
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
