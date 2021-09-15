import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import url from "../url";
import Navbar from "./Navbar";

export default function Profile(props) {
  const { authToken, setAuthToken, isAuth, setIsAuth } = props;

  const [profileData, setProfileData] = useState({});

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

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div>
        <h1>This is profile of {profileData.userName}</h1>
      </div>
    </>
  );
}
