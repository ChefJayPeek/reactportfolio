import React from 'react';



const Header = () => {
    return (
            // setup the navbar
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <h2 className="navbar-brand">Jay Peek</h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    
      <div className="col-12 navbar-nav d-flex justify-content-end">
        <a className="nav-link" href="/contact">Contact <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="/portfolio">Portfolio</a>
        <a className="nav-link active" href="/">About</a>
      </div>
    </div>
  </nav>
    )
};

export default Header;
