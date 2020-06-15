import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailsPage from "./DetailsPage";

const App = () => {
  return (
    <Router>
      <Fragment>
        <button>
          <Link to="/">Home</Link>
        </button>
        <Link />
        <Switch>
          <Route path="/" component={App} />
          <Route path="/:id/details" component={DetailsPage} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
