import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./SimpleComponents/NavBar";
import NameList from "./NameList";
import Home from "./Home";
import AboutUs from "./AboutUs";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/namelist">
            <NameList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
