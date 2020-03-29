import React from "react";
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function route() {
  return (
    <Router>

      <div className="nav-wrapper">

        <ul className="card col s4 m4">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Projects</a></li>
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

/*function About() {
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
}*/

//--to be inserted later----<a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a>