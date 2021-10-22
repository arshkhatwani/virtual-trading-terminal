import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import url from "../url";
import StockTab from "./StockTab";
import { Box } from "@material-ui/core";
import useStyles from "../hooks/useStyles";

export default function PriceComp(props) {
  const { authToken, funds, setFunds } = props;

  const classes = useStyles();

  var [prices, setPrices] = useState({});

  useEffect(() => {
    const socket = io(url);
    socket.on("hello", (message) => {
      // console.log(message);
    });

    socket.on("price", (msg) => {
      // console.log(msg);
      setPrices((prevPrice) => {
        return { ...prevPrice, [msg.symbol]: msg.ltp };
      });
    });

    return () => {
      socket.disconnect();
      socket.close();
    };
  }, []);

  return (
    <>
      <Box padding="6px">
        <h1 className={classes.thinHeading}>Marketwatch</h1>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {Object.keys(prices).map((item, index) => {
            if (item.substr(0, 7) === "BINANCE")
              return (
                <StockTab
                  key={index}
                  symbol={item.substring(8)}
                  ltp={prices[item]}
                  authToken={authToken}
                  funds={funds}
                  setFunds={setFunds}
                />
              );
            return (
              <StockTab
                key={index}
                symbol={item}
                ltp={prices[item]}
                authToken={authToken}
                funds={funds}
                setFunds={setFunds}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}
