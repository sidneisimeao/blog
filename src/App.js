import React from 'react'
import { hot } from 'react-hot-loader'
import PrimaryLayout from "./layouts/PrimaryLayout";
import { withSiteData } from 'react-static';

import AppContext from "AppContext";

import "./styles/scss/app.scss";

const App = withSiteData(({ posts }) =>
  <AppContext.Provider value={{ posts: posts }}>
     <PrimaryLayout />   
  </AppContext.Provider>
);

export default hot(module)(App)
