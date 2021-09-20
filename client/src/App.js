import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Container, CssBaseline, Box } from "@material-ui/core";

export default function App() {
  const [authToken, setAuthToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <CssBaseline />
      <Container
        disableGutters={true}
        maxWidth="xl"
        style={{ minHeight: "100vh" }}
      >
        <Router>
          <Switch>
            <Route path={["/", "/login"]} exact>
              <Login
                authToken={authToken}
                setAuthToken={setAuthToken}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              />
            </Route>

            <Route path="/register" exact>
              <Register />
            </Route>

            <Route path="/profile" exact>
              <Box display="flex">
                <Sidebar />
                <Box display="flex" flexDirection="column" flexGrow="1">
                  <Navbar
                    authToken={authToken}
                    setAuthToken={setAuthToken}
                    isAuth={isAuth}
                    setIsAuth={setIsAuth}
                    active="Profile"
                  />
                  <Profile
                    authToken={authToken}
                    setAuthToken={setAuthToken}
                    isAuth={isAuth}
                    setIsAuth={setIsAuth}
                  />
                </Box>
              </Box>
            </Route>

            <Route path="/about" exact>
              <Navbar
                authToken={authToken}
                setAuthToken={setAuthToken}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                active="About"
              />
              <div>
                <h1>About Page</h1>
              </div>
            </Route>

            <Route path="/contact" exact>
              <Navbar
                authToken={authToken}
                setAuthToken={setAuthToken}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                active="Contact"
              />
              <div>
                <h1>Contact Page</h1>
              </div>
            </Route>

            <h1>404 not found</h1>
          </Switch>
        </Router>
      </Container>
    </>
  );
}
