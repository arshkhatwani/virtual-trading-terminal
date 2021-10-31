import React, { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import OrderBox from "./OrderBox";
import OrderMsg from "./OrderMsg";
import { Button } from "@material-ui/core";
import useStyles from "../hooks/useStyles";

export default function PositionTab(props) {
  const { row, prices, authToken, funds, setFunds } = props;

  const classes = useStyles();

  const [openB, setOpenB] = useState(false);
  const [openS, setOpenS] = useState(false);
  const [openC, setOpenC] = useState(false);
  const [orderMsg, setOrderMsg] = useState("success");

  const showQty = (qty) => {
    if (qty > 0) return <div className={classes.color_primary}>{qty}</div>;
    else return <div className={classes.color_secondary}>{qty}</div>;
  };

  const getMTM = (ltp, price, qty) => {
    var mtm = ((ltp - price) * qty).toFixed(2);
    if (mtm > 0) {
      return <b style={{ color: "#0ea600" }}>{mtm}</b>;
    } else if (mtm < 0) {
      return <b style={{ color: "#d90404" }}>{mtm}</b>;
    } else {
      return <b>{mtm}</b>;
    }
  };

  const onClickHandler = () => {
    if (row.qty > 0) {
      setOpenS(true);
    } else {
      setOpenB(true);
    }
  };

  return (
    <>
      <OrderMsg open={openC} setOpen={setOpenC} msg={orderMsg} />
      <OrderBox
        open={openB}
        setOpen={setOpenB}
        title={`Buy ${row.stock}`}
        ltp={
          row.stock.substr(row.stock.length - 4, row.stock.length) === "USDT"
            ? prices["BINANCE:" + row.stock]
            : prices[row.stock]
        }
        stock={row.stock}
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
        title={`Sell ${row.stock}`}
        ltp={
          row.stock.substr(row.stock.length - 4, row.stock.length) === "USDT"
            ? prices["BINANCE:" + row.stock]
            : prices[row.stock]
        }
        type="sell"
        msgOpen={openC}
        stock={row.stock}
        setMsgOpen={setOpenC}
        authToken={authToken}
        setFunds={setFunds}
        setOrderMsg={setOrderMsg}
      />
      <TableRow
        key={row._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.stock}
        </TableCell>
        <TableCell align="right">{showQty(row.qty)}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">
          {row.stock.substr(row.stock.length - 4, row.stock.length) === "USDT"
            ? prices["BINANCE:" + row.stock]
            : prices[row.stock]}
        </TableCell>
        <TableCell align="right">
          {row.stock.substr(row.stock.length - 4, row.stock.length) === "USDT"
            ? getMTM(prices["BINANCE:" + row.stock], row.price, row.qty)
            : getMTM(prices[row.stock], row.price, row.qty)}
        </TableCell>
        <TableCell align="right">
          <Button
            size="small"
            color="secondary"
            variant="contained"
            disableElevation
            onClick={onClickHandler}
          >
            Exit
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}
