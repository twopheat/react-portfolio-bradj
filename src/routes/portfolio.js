import React from "react";

import agt from '../images/agt.JPG'
import lynx from '../images/lynx.png'
import pos from '../images/mvcpos.JPG'
import dcs from '../images/dcschoolspic.png'
import kik from '../images/kickpic.png'
import ntf from '../images/ntfpic.png'


function Portfolio() {
    return (
<div className="container radius-1 mt-5">
<h1 className="pb">Portfolio</h1>

<div id="carouselExampleCaptions" className="carousel slide mt-4" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner shadow-sm">
    
  <div className="carousel-item active">
    <img src={lynx} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-md-block shadow">
      <h4>Travelynx</h4>
              <p>Travelynx lets people travel in groups with ease.<br /> It uses Node, Axios, Express, REACT and
                MongoDB.</p>
              <p><a href="https://github.com/Team-CBD/trip-planner-app">Github Repo</a> | <a target="_blank"
                  rel="noopener noreferrer" href="https://travelynx.herokuapp.com/">Deployed on Heroku</a></p>
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
    
    <div className="carousel-item">
    <img src={pos} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-md-block shadow">
      <h4>Simple Burger POS</h4>
              <p>This app is a simple CRUD app modeled like a POS.<br /> It uses Node, Express, and
                MySQL.</p>
              <p><a href="https://github.com/twopheat/burger">Github Repo</a> | <a target="_blank"
                  rel="noopener noreferrer" href="https://mvc-burger-pos.herokuapp.com/">Deployed on Heroku</a></p>
      </div>
    </div>
 
    <div className="carousel-item">
      <img src={kik} className="d-block w-100" alt=""/>
        <div className="carousel-caption d-md-block shadow">
        <h4>Co-Founded Company Site</h4>
                <p>We started building custom applications in 2020 and are getting better by the day.</p>
                <p><a href="https://github.com/twopheat/burger">Github Repo</a> | <a target="_blank"
                    rel="noopener noreferrer" href="https://mvc-burger-pos.herokuapp.com/">Deployed on Heroku</a></p>
        </div>
    </div>

    <div className="carousel-item">
      <img src={ntf} className="d-block w-100" alt=""/>
        <div className="carousel-caption d-md-block shadow">
        <h4>Nature's Trace Farm</h4>
                <p>This is a website that uses React and Firebase to deliver Auth, CMS, and take online Orders using Stripe and SSL security.</p>
                <p><a target="_blank" rel="noopener noreferrer" href="https://shop.naturestracefarm.com/about">naturestracefarm.com</a></p>
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