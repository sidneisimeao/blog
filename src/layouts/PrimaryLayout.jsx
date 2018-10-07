import React from 'react';
import { Router, Route, Switch } from 'react-static';

import Home from "containers/Home";
import About from "containers/About";
import Blog from "containers/Blog";

const PrimaryLayout = () => (
  <div>
    <div className="main-content">
      <div className="container ">
        <div className="columns is-multiline is-mobile is-centered">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />     
              <Route path="/blog/post/*" component={Blog} />                   
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  </div>

);

export default PrimaryLayout;