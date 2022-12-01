import React from 'react';

import me from '../images/meblank.png'

function About() {
  return (
    
      <div className="container z-depth-1 white radius-1 mt-5">
        <br />
        <div className='row'>
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
                  <pre>-Brad Johnston 2020</pre>
              
              </div>
            </div>
          </div>
        </div>
        <div className='row center'>

          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 card2 shadow-sm z-1 center border2'>
            <p className='p-3 m-2'>After graduating the Full Stack developer course at UCR Riverside I am now a Full Stack developer with Front End tendencies. In the Lead UI/UX designer role, I am never one to stop learning or creating. As a motivated self-starter I am a founder to the core. Always a team player and natural leader, I graduated the Leadership Dekalb Class of 2010. I strive to give the client AND the user what they want.</p>
          </div>


          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 card2 shadow-sm z-1 left border3'>
            <div className='p-3 m-1'>
            <p>20 years in IT Administration</p>

            <p>UI | UX Design and Development</p>

            <p>Full Stack Certified from UC Riverside</p>

            <p>React, Node, Express, JSX, HTML5, CSS3</p>

            <p>Illustrator, Photoshop, XD, InDesign</p>

            <p>Progressive Web Applications</p>

            <p>Invention and Product Design</p>
            </div>
          </div>

        </div>

      </div>

     
    );
    
  
  }
  export default About;