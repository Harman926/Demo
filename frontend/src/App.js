import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Builder from "./components/Builder";
import Renderer from "./components/Renderer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/builder" />
        </Route>
        <Route path="/builder" component={Builder} />
        <Route path="/renderer/:formId" component={Renderer} />
      </Switch>
    </Router>
  );
}

export default App;
