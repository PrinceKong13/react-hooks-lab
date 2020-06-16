import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Fragment>
        <button>
          <Link to="/">Home</Link>
        </button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id/details" component={DetailsPage} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
