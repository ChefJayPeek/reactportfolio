import React from 'react';
// import ProfilePicture from './../../assets/JayPeekProfilePicture.png';
import './Portfolio.css';
import PetResumeThumb from './../../assets/petResumeThumb.png';
import WeatherDashboardThumb from './../../assets/weatherDashboardThumb.png';
import BurgerThumb from './../../assets/burgerScreenShotThumb.png';
import AssetTrackerThumb from './../../assets/assetTrackerThumb.png';

const Portfolio = () => {
    return (
                // portfolio thumbnail images with links to completed projects will go here.
      <div className="container-l bg-secondary mt-5 mx-3 pl-2 pr-5">
      <h1 className="display-4">Portfolio</h1>
      <hr />
          <div className = "row">
              <div className = "col-lg-6">
                <div className = "thumbnail container-med">
                  <a href="https://chefjaypeek.github.io/petResume/index.html">
                    <img alt="Thumbnail screenshot Pet Resume" src={PetResumeThumb} className="m-2" />
                    <div className = "caption">
                      <p className = "text-light">Pet Resume, a website to help you pick a dog breed.</p>
                      <div className = "d-inline-block container-flex pl-5">
                        <a href="https://github.com/ChefJayPeek/petResume" className="btn btn-primary text-center">GitHub Repo</a>
                        <a href="https://chefjaypeek.github.io/petResume/index.html" className="btn btn-primary">Live Page</a>
                      </div>  
                    </div>
                  </a>

                </div>
              </div>
              <div className = "col-lg-6">
                <div className = "thumbnail container-med">
                  <a href="https://chefjaypeek.github.io/weatherDashboard/index.html">
                    <img alt="Thumbnail screenshot Weather Dashboardd" src={WeatherDashboardThumb} className="m-2" />
                    <div className = "caption">
                      <p className = "pl-2 text-light">Weather Dashboard, a simple weather forecast.</p>
                      <div className = "d-inline-block container-flex pl-5">
                        <a href="https://github.com/ChefJayPeek/weatherDashboard" className="pl-5 btn btn-primary text-center">GitHub Repo</a>
                        <a href="https://chefjaypeek.github.io/weatherDashboard/" className="btn btn-primary">Live Page</a>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
              <div className = "col-lg-6">
                <div className = "thumbnail container-med">
                  <a href="https://pacific-reef-78929.herokuapp.com">
                    <img alt="Thumbnail screenshot Burger" src={BurgerThumb} className="m-2" />
                    <div className = "caption">
                      <p className = "pl-5 text-light">     Eat-Da-Burger! A MVC app.</p>
                      <div className = "d-inline-block container-flex pl-5">
                        <a href="https://github.com/ChefJayPeek/burger" className="btn btn-primary text-center">GitHub Repo</a>
                        <a href="https://pacific-reef-78929.herokuapp.com" className="btn btn-primary">Live Page</a>
                      </div>  
                    </div>
                  </a>

                </div>
              </div>

              <div className = "col-lg-6">
                <div className = "thumbnail container-med">
                  <a href="https://arcane-basin-49331.herokuapp.com/login">
                    <img alt="Thumbnail screenshot assetTracker" src={AssetTrackerThumb} className="m-2" />
                    <div className = "caption">
                      <p className = "pl-4 text-light">Asset Tracker. A multiuser asset tracker.</p>
                      <div className = "d-inline-block container-flex pl-5">
                        <a href="https://github.com/HananYusuf/Projectect2" className="btn btn-primary text-center">GitHub Repo</a>
                        <a href="https://arcane-basin-49331.herokuapp.com" className="btn btn-primary">Live Page</a>
                      </div>  
                    </div>
                  </a>

                </div>
              </div>
          </div>      

    </div>

    )

};

export default Portfolio;