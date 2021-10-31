import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import axios from "axios";
import url from "../url";
import useStyles from "../hooks/useStyles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PositionTab from "./PositionTab";

export default function Positions(props) {
  const {
    authToken,
    setAuthToken,
    isAuth,
    setIsAuth,
    funds,
    setFunds,
    prices,
    setPrices,
  } = props;
  const [rows, setRows] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    if (authToken !== "") {
      axios
        .get(url + "/getdata/user/profile", {
          headers: {
            auth: "bearer " + authToken,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setFunds(res.data.funds);
            if (!isAuth) setIsAuth(true);
          }
        })
        .catch((e) => {
          var res = e.response;
          if (res.status === 403) {
            localStorage.removeItem("authToken");
            setAuthToken("");
            setIsAuth(false);
          }
        });
    }

    axios
      .get(url + "/getdata/user/positions", {
        headers: {
          auth: "bearer " + authToken,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          // console.log(res);
          setRows(res.data);
        }
      });
  }, []);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Box display="flex" flexDirection="column" padding="1rem">
        <Box
          bgcolor={"#fff"}
          boxShadow={1}
          display="flex"
          flexDirection="column"
          padding="0.5rem 0.8rem"
        >
          <h1 className={classes.thinHeading}>Positions</h1>
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Instrument</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Avg. cost</TableCell>
                    <TableCell align="right">LTP</TableCell>
                    <TableCell align="right">{"P&L($)"}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <PositionTab
                      authToken={authToken}
                      funds={funds}
                      setFunds={setFunds}
                      prices={prices}
                      row={row}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
}
