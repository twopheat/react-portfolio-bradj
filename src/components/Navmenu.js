import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';

import "../styles/Nav.css";



export default function Navmenu() {
    

  return (


<div className="z-2">
<div id="logotext" className="App-logo">
      <Link to="/"><span className="headtext">Brad<span className="headtextblk">|<span className="headtextgold">J</span></span></span></Link>
    </div>
    
    <Navbar collapseOnSelect className="navbar z-3 right" expand="lg">
    <Navbar.Toggle />
      <Navbar.Collapse className="absolute">
        <div className="togglecover">

        </div>
        <Nav className="mr-auto d-block">
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link" eventKey="1" as={Link} to="/">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link" eventKey="2" as={Link} to="/Portfolio">
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link" eventKey="3" as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

 

</div>

)
}


