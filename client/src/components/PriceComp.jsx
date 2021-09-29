import React, { useEffect } from "react";
import { io } from "socket.io-client";
import url from "../url";

export default function PriceComp() {
  useEffect(() => {
    const socket = io(url);
    socket.on("hello", (message) => {
      console.log(message);
    });

    socket.on("price", (msg) => {
      console.log(msg);
    });

    return () => {
      socket.disconnect();
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>This is price component</h1>
    </div>
  );
}
