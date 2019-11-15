import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";

const Home = lazy(() => import("./components/Home"));
const Character = lazy(() => import("./components/Character"));

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/character/:name"
          component={props => <Character {...props} />}
        />
      </Switch>
    </Suspense>
  );
};

export default Router;
