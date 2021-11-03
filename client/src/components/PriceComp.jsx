import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import url from "../url";
import StockTab from "./StockTab";
import { Box } from "@material-ui/core";
import useStyles from "../hooks/useStyles";

export default function PriceComp(props) {
  const { authToken, funds, setFunds, prices, setPrices, searchRes } = props;

  const classes = useStyles();

  useEffect(() => {
    const socket = io(url);
    socket.on("hello", (message) => {
      // console.log(message);
    });

    socket.on("price", (msg) => {
      setPrices((prevPrice) => {
        return { ...prevPrice, [msg.symbol]: msg.ltp };
      });
    });

    return () => {
      socket.disconnect();
      socket.close();
    };
  }, []);

  const getStocks = () => {
    if (searchRes.length === 0) {
      return (
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
            else {
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
            }
          })}
        </Box>
      );
    } else {
      return (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {searchRes.map((item, index) => {
            if (item.symbol.substr(0, 7) === "BINANCE") {
              return (
                <StockTab
                  key={index}
                  symbol={item.symbol.substring(8)}
                  ltp={prices[item.symbol]}
                  authToken={authToken}
                  funds={funds}
                  setFunds={setFunds}
                />
              );
            } else {
              return (
                <StockTab
                  key={index}
                  symbol={item.symbol}
                  ltp={prices[item.symbol]}
                  authToken={authToken}
                  funds={funds}
                  setFunds={setFunds}
                />
              );
            }
          })}
        </Box>
      );
    }
  };

  return (
    <>
      <Box padding="6px">{getStocks()}</Box>
    </>
  );
}
