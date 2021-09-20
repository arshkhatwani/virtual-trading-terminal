import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import url from "../url";
import { Box, Typography } from "@material-ui/core";
import useStyles from "../hooks/useStyles";

export default function Profile(props) {
  const { authToken, setAuthToken, isAuth, setIsAuth } = props;

  const [profileData, setProfileData] = useState({});

  const classes = useStyles();

  useEffect(() => {
    // console.log("authToken: ", authToken);
    // console.log("isAuth: ", isAuth);

    if (authToken !== "") {
      axios
        .get(url + "/getdata/user/profile", {
          headers: {
            auth: "bearer " + authToken,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setProfileData(res.data);
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
  }, []);

  const displayFunds = (funds) => {
    if (funds > 99999) {
      return (funds / 100000).toFixed(2).toString() + "L";
    } else if (funds > 999) {
      return (funds / 1000).toFixed(2).toString() + "k";
    } else return funds;
  };

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Box display="flex" flexDirection="column" padding="1rem">
        <Typography variant="h4">Hi, {profileData.userName}</Typography>
        <hr style={{ width: "100%" }} />
        <Box>
          <Typography
            variant="h5"
            component="h5"
            style={{ marginBottom: "10px" }}
          >
            Balance :
          </Typography>
          <Typography variant="h3" className={classes.thinHeading}>
            {displayFunds(profileData.funds)}
          </Typography>
          <Typography className={[classes.text_secondary, classes.thinHeading]}>
            Margin available
          </Typography>
        </Box>
      </Box>
    </>
  );
}
