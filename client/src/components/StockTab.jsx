import React from "react";
import { Box, Typography } from "@material-ui/core";

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
    >
      <Box style={{ float: "left" }}>
        <Typography>{symbol}</Typography>
      </Box>
      <Box style={{ float: "right" }}>
        <Typography>{ltp}</Typography>
      </Box>
    </Box>
  );
}
