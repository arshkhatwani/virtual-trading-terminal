import React, { useState } from "react";
import { Drawer, Box, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";
import url from "../url";
import PriceComp from "./PriceComp";

const drawerWidth = 350;

const drawerStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  searchBarStyle: {
    outline: "none",
    border: "none",
  },
  thinHeading: {
    fontWeight: 300,
  },
}));

export default function Sidebar(props) {
  const { authToken, funds, setFunds, prices, setPrices } = props;

  const classes = drawerStyles();
  const [searchRes, setSearchRes] = useState([]);

  const onChangeHandler = (e) => {
    if (e.target.value !== "") {
      axios
        .get(url + "/getdata/search/query", {
          headers: {
            qry: e.target.value,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setSearchRes(res.data);
          }
        });
    } else {
      setSearchRes([]);
    }
  };

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Box display="flex" flexDirection="column">
          <TextField
            variant="outlined"
            placeholder="Search stocks, cryptos etc."
            onChange={onChangeHandler}
          />
          <Box>
            <h1 style={{ textAlign: "center" }} className={classes.thinHeading}>
              Marketwatch
            </h1>
          </Box>
          <PriceComp
            authToken={authToken}
            funds={funds}
            setFunds={setFunds}
            prices={prices}
            setPrices={setPrices}
            searchRes={searchRes}
          />
        </Box>
      </Drawer>
    </>
  );
}
