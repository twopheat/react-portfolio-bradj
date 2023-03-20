import React from "react";

import git from '../images/git.png'
import linkedin from '../images/linkedinlogo.png'
import drive from '../images/googledrive_logo.png'

function Contact() {
  return (
    <div className="container white radius-1 mt-5">
     
      <h1 className="ptitle mb-3">Contact Me</h1>
      <div className="card mt-4">
        <div className="row lighten-5">
            <div className="center row">
              <h2 className="mt-3"><a href="mailto:twopheat@gmail.com?Subject=Portfolio Contact for Brad J" alt="" target="_top">twopheat@gmail.com</a></h2>
              <h2 className="mt-3"><a href="tel:951-255-2533">see resume below</a></h2>
            </div>
            </div>
            <div className="row">
                <div className="row center" id="map">
                 <div className="col-3"> 
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/twopheat/"><img className="social-icons text-center mt-4" alt="" src={git} width="64" height="64"></img></a>
                  </div>
                 <div className="col-3 offset-1">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/twopheat/"><img className="social-icons text-center mt-4" alt="linkedin" src={linkedin} width="64" height="64"></img></a>
                  </div>
                 <div className="col-3 offset-1">
                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vRmccUE5nw4drSTCETK32gMlLtsO5Ahc2aCT4Hvwq7k0a6nIjrBJf0IdlvU57He6s8mmyaA6LZaffvY/pub" title="RESUME"><img className="social-icons text-center mt-4" alt="resume" src={drive} width="64" height="64"></img></a>                
                  </div>
                </div>
          
        </div>
     </div>
    </div>
  );
}

export default Contact;