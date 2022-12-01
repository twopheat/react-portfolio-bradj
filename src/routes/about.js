import React from 'react';

import me from '../images/meblank.png'

function About() {
  return (
    
      <div className="container z-depth-1 white radius-1 mt-5">
        <br />
        <div className="card shadow-sm z-1">
          <div className='row'>
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 mt-4">
              <img className="" id="me" src={me} alt="Me" />
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 mt-4">
              <p id="floattext">
                My name is Brad. I have been developing and designing since Dreamweaver was Macromedia. I always did it on the side of my
                regular jobs so I never considered myself an actual developer. Coding Bootcamp has made me
                realize I have been a novice Full Stack Developer for a decade. I just never had any official structure or
                certifications, thus no jobs in the industry other than start-ups and building WordPress sites as part of my
                IT firm's offerings. Now I am Full Stack Certified and it's Official.</p>
                <pre>-Brad Johnston</pre>
            
            </div>
          </div>
        </div>

      </div>

     
    );
    
  
  }
  export default About;