/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css'
import { Home } from "./pages/home/Home";

function App() {


  return (
      <Router>
         <Switch>
          <Route exact path="/" Component={Home}/>
        </Switch>

       </Router>
    
  )
}

export default App
