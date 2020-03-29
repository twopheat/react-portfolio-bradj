import React from "react";
import logo from '../logo.svg';
import Router from '../routes/route';
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <img src={logo} className="App-logo brand-logo left" alt="logo" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse row" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <Router />
            </ul>
      </div>
    </nav>
  );
}
export default Nav;
