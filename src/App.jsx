import React from "react";
import { Route, Switch} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
    <NavBar />
    <Switch>
      <Route path = "/" component = { Home } />
    </Switch>
  </>
  )
}

export default App;