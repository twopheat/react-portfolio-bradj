import React from "react";

import {

  Link
} from "react-router-dom";

export default function route() {
  return (
   

      <div className="nav-wrapper white-text">

        <ul>
          <li>
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


       
      </div>

  );

}
