import React from "react";
import { Box, Typography, Button } from "@material-ui/core";

export default function StockTab(props) {
  const { symbol, ltp } = props;

  return (
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
        >
          B
        </Button>
        <Button
          variant="contained"
          size="small"
          disableElevation
          style={{ margin: "0 0.1rem" }}
          color="secondary"
        >
          S
        </Button>
      </Box>
      <Box boxSizing="border-box">
        <Typography variant="subtitle2">{ltp}</Typography>
      </Box>
    </Box>
  );
}
