import React from "react";
import { Drawer, Box, makeStyles } from "@material-ui/core";

const drawerWidth = 350;

const drawerStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },

  drawerPaper: {
    width: drawerWidth,
  },
}));

export default function Sidebar() {
  const classes = drawerStyles();

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        {/* This is sidebar */}
      </Drawer>
    </>
  );
}
