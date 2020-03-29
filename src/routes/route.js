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

export default function Basic() {
    return (
      <Router>
        <div className="nav-wrapper">
           
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
            <a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a>

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
  
  
