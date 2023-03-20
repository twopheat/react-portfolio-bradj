import React from "react";

import agt from '../images/agt.JPG'
import dcs from '../images/dcschools.jpg'
import kik from '../images/kickpic.jpg'


function Portfolio() {
    return (
<div className="container radius-1 mt-5">
<h1 className="pb">Portfolio</h1>

<div id="carouselExampleCaptions" className="carousel slide mt-4" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

  </div>
  <div className="carousel-inner shadow-sm">
    
  <div className="carousel-item active">
      <img src={kik} className="d-block w-100" alt=""/>
        <div className="carousel-caption d-md-block shadow">
        <h4>Co-Founded Company Site</h4>
                <p>We started building custom applications in 2020.</p>
                <p>Github Repo is Private | <a target="_blank"
                    rel="noopener noreferrer" href="https://kickapps.io/">https://kickapps.io</a><br />Built using React.js, PostGRES, Vercel, Supabase, Google Docs, Mailchimp, Social Logins, Google Analytics, Stripe Payments +</p>
        </div>
    </div>
    
    <div className="carousel-item">
    <img src={dcs} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-md-block shadow">
      <h4>County School System</h4>
              <p>This web application equips an entire school system of users with CMS, Document Management, Purchase Order Flow Control (POflow), Social Media Post Approval Gateway (PostFunnel), and much more. <br /> It uses React, Node, Express, and
                MySQL hosted on AWS.</p>
              <p>Github Repo is Private | <a target="_blank"
                  rel="noopener noreferrer" href="https://dcschools.us">https://dcschools.us</a></p>
      </div>
    </div>


    <div className="carousel-item">
      <img src={agt} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-md-block shadow">
      <h4>Any Given T</h4>
              <p>AGT allows people to soft-bet on sports game outcomes.<br /> It uses JavaScript, Axios and Materialize.
              </p>
              <p><a href="https://github.com/Team-CBD/AGT">Github Repo</a> | <a target="_blank"
                  rel="noopener noreferrer" href="https://team-cbd.github.io/AGT/">Deployed on Heroku</a></p>
      </div>
    </div>

    </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="prev-icon" aria-hidden="true">← </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="next-icon" aria-hidden="true"> →</span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="row">
      <small className="col-12 center ml-auto mr-auto bottom">
        *these range from recent personal and client projects to Boot Camp assignments*
      </small>
    </div>
</div>
      
      
    );
  }

  export default Portfolio;