import React from 'react';
import ProfilePicture from './../../assets/JayPeekProfilePicture.png';
import './LandingPage.css';

const LandingPage = () => {
    return (
            //   main content here
            <div className="container bg-light mt-5 ml-3 mr-5 px-2">
            <h1 className="display-4">About Me</h1>
            <hr />
                <div>
                    <div>
                    <img alt="profile" src={ProfilePicture} className="float-left pr-3" />
    
                      {/* Bio here, this will change and update as new skills and technologies are mastered */}
                        <p className="lead text-left">After several years in Information Technology, I was laid off, and changed my career by going to Culinary School and recieved an Associates Degree in Culinary Arts.  This allowed me to work with many respected chefs in the Houston area in some of the finest restarants in the city.</p>
                        <p className ="lead text-left">This cumulated into a position of Executive Chef and Brewer at a neighborhood brewpub in the South East Houston area.  Over my career as a Chef and Brewer, I often became frustrated with the software available to culinary professionals.  When I was laid off from the brewpub during the COVID pandemic, I evaluated how I would like to proceed in my career.</p>
                        <p className ="lead text-left">After learning of the Rice University Web Development Bootcamp, I had an epiphany about how I could utilize my experiences as a Chef and Brewer with knowledge and skills gained in the Bootcamp to develop and deploy solutions to help solve the unique challenges faced by Culinary Professionals.</p>
                        
                    </div>
                </div>
            </div>
    )

};

export default LandingPage;