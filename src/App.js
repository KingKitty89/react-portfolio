import React from "react";
import { Route } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./components/";
import Resume from "./components/Resume";
import "./App.css";


function App() {
  return (
    <>
    <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
    </>
  );
}

export default App;
