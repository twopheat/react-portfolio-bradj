import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Basic() {
    return (
      <Router>
        <div className="nav-wrapper">
            
        <ul className="right hide-on-med-and-down row">
            <li className="col-md-6">
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
  
          <hr />
  
          
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Portfolio() {
    return (
      <div>
        <h2>Portfolio</h2>
      </div>
    );
  }
  
  function Contact() {
    return (
      <div>
        <h2>Contact</h2>
      </div>
    );
  }
  