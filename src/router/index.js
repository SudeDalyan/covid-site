import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/Home";
import Country from "../pages/Country";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/country/:countryCode" component={Country} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
