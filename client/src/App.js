import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { Container, CssBaseline } from "@material-ui/core";

export default function App() {
  const [authToken, setAuthToken] = useState("");

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
              <Login authToken={authToken} setAuthToken={setAuthToken} />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/about" exact>
              <div>
                <h1>About Page</h1>
              </div>
            </Route>
            <Route path="/contact" exact>
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
