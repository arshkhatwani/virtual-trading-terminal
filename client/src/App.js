import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <h1>hello world</h1>
          </div>
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
  );
}
