import "./App.css";

import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Gallery from "./components/gallery";
import Error from "./components/error";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          {/* Switches establish conditional rendering. Adding any query parametres to the url will initiate search parametres. Root directory will render a welcome message. Pathing errors will generate an error page. */}
          <Switch>
            <Route path="/:query" render={(props) => <Gallery {...props} />} />
            <Redirect from="/" to="/welcome" />
            <Route component={Error} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
