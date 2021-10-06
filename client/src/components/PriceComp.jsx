import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import url from "../url";

export default function PriceComp() {
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
    <div>
      <h1>Marketwatch</h1>
      {Object.keys(prices).map((item, index) => {
        return (
          <p key={index}>
            {item}: &nbsp; {prices[item]}
          </p>
        );
      })}
    </div>
  );
}
