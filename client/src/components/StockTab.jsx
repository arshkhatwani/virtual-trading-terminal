import React, { useState } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import OrderBox from "./OrderBox";

export default function StockTab(props) {
  const { symbol, ltp } = props;

  const [openB, setOpenB] = useState(false);
  const [openS, setOpenS] = useState(false);

  return (
    <>
      <OrderBox
        open={openB}
        setOpen={setOpenB}
        title={`Buy ${symbol}`}
        ltp={ltp}
        type="buy"
      />
      <OrderBox
        open={openS}
        setOpen={setOpenS}
        title={`Sell ${symbol}`}
        ltp={ltp}
        type="sell"
      />
      <Box
        marginBottom="10px"
        paddingY="6px"
        padding="6px"
        paddingX="6px"
        width="98%"
        boxShadow={1}
        display="flex"
        justifyContent="space-around"
      >
        <Box>
          <Typography>{symbol}</Typography>
        </Box>
        <Box>
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
        <Box boxSizing="border-box">
          <Typography variant="subtitle2">{ltp}</Typography>
        </Box>
      </Box>
    </>
  );
}
