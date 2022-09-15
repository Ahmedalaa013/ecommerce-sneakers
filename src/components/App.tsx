import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import MenProducts from "./MenProducts";
import WomenProducts from "./WomenProducts";
import ProductOverview from "./ProductOverview";

const App: React.FunctionComponent<{}> = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/men" exact component={MenProducts} />
          <Route path="/women" exact component={WomenProducts} />
          <Route path="/details/:id" exact component={ProductOverview} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
