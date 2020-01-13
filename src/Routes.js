import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Post from "./pages/Post";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/posts/:id' >
          <Post />
        </Route>
      </Switch>
    </Router>

  );
};

export default Routes;
