import React from 'react';
import './Contact.css';
import JayPeekProfile from './../../assets/JayPeekProfilePicture.png';
import JayPeekResume from './../../assets/JayPeekResumeNov2020.pdf';
const Contact = () => {
    return (
      // contact card
      <div className="container cold bg-light mt-5 mx-3 px-2">
        <h1 className="display-4">Contact</h1>
        <hr />
          <div className = "justify-content-around">
            <div className="card w-50">
              <img className="card-img-top" src={JayPeekProfile} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">Jay Peek</h4>
                <p className="phone-number">713-870-9230</p>
                <p className="email">chefjaypeek@me.com</p>
                <a href="/portfolio" className="btn btn-primary">Portfolio</a>
                <a href="https://github.com/ChefJayPeek" className="btn btn-primary">Git Hub</a>
                <a href="https://www.linkedin.com/in/jay-peek-ab675a155/" className="btn btn-primary">LinkedIn</a>
                <a href={JayPeekResume} className="btn btn-primary">Resume</a>
              </div>
            </div>
          </div>

      </div>

    )

};

export default Contact;