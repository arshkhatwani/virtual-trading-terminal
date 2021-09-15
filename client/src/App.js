import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { Container, CssBaseline } from "@material-ui/core";

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
              <Navbar
                authToken={authToken}
                setAuthToken={setAuthToken}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              />
              <Profile
                authToken={authToken}
                setAuthToken={setAuthToken}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              />
            </Route>

            <Route path="/about" exact>
              <Navbar
                authToken={authToken}
                setAuthToken={setAuthToken}
                isAuth={isAuth}
                setIsAuth={setIsAuth}
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
