import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/system";
import axios from "axios";
import url from "../url";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function InvestmentChart(props) {
  const { authToken, funds } = props;
  const [pos, setPos] = useState([]);

  useEffect(() => {
    axios
      .get(url + "/getdata/user/investments", {
        headers: {
          auth: "bearer " + authToken,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setPos(res.data);
        }
      });
  }, [funds]);

  const data = {
    labels: pos.map((item) => {
      return item.stock;
    }),
    datasets: [
      {
        label: "Invested ($)",
        data: pos.map((item) => {
          return item.price * item.qty;
        }),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Box width="70%">
        <Bar data={data} options={options} />
      </Box>
    </>
  );
}
