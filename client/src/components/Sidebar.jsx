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
}));

export default function Sidebar() {
  const classes = drawerStyles();
  const [searchRes, setSearchRes] = useState([]);

  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    if (e.target.value !== "") {
      axios
        .get(url + "/getdata/search/query", {
          headers: {
            qry: e.target.value,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            setSearchRes(res.data);
          }
        });
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
            placeholder="Search stocks, indices etc."
            onChange={onChangeHandler}
          />

          <PriceComp />
        </Box>
      </Drawer>
    </>
  );
}
