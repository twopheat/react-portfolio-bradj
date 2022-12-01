import React from 'react';
import "../styles/style.css";


function Footer () {



    return (
      <footer id="footer">
        <div className="footer z-3">
        <p id="copyright"><a target="_blank" rel="noopener noreferrer" className="yellow-text" href="https://github.com/twopheat/">GitHub</a> | Copyright {new Date().getFullYear()} © TwoPheat | <a className="yellow-text" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/twopheat">LinkedIn</a></p>
      </div>
      </footer>
    )
  }

export default Footer;

