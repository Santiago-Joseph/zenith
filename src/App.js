import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LandingNavMobile from './components/navbar/landingNavMobile';
import LandingPage from './components/landingPages/landingPage';
import MobileNavList from './components/navbar/mobileNavList';
import './stylesheets/App.css';
import LandingNavbar from './components/navbar/landingNavMobile';

function App() {
  return (
    <div className="App">
      <LandingNavMobile/>
      <MobileNavList/>
      <Route exact path="/" component={LandingPage}/>
    </div>
  );
}

export default App;
