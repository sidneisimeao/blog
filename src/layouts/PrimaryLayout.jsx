import React from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes';

const PrimaryLayout = () => (
  <Router>
    <div>
      <div className="main-content">
        <div className="container ">
          <div className="columns is-multiline is-mobile is-centered">
            <Routes />
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default PrimaryLayout;