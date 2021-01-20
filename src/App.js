import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LandingPage from './landingpage/pages/LandingPage';
import Header from './header/pages/Header';
import Footer from './footer/pages/Footer';
import Portfolio from './portfolio/pages/Portfolio';
import Contact from './contact/pages/Contact';

const App = () => {
    return (
    <Router>
    <Header />
      <Switch>
        <Route path = "/" exact>
          <LandingPage /> 
        </Route>
        <Route path = "/portfolio" exact>
          <Portfolio /> 
        </Route>
        <Route path = "/contact" exact>
          <Contact /> 
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
    );
};

export default App;