import React from 'react';
import { Router, Link } from 'react-static';
import Routes from 'react-static-routes'

const PrimaryLayout = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
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