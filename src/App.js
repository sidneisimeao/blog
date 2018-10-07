import React from 'react'
import { hot } from 'react-hot-loader'
import PrimaryLayout from "./layouts/PrimaryLayout";
import { withSiteData } from 'react-static';

import { Provider } from "AppContext";

import "./styles/scss/app.scss";

const App = withSiteData(({ posts }) =>
  <Provider value={{ posts: posts }}>
     <PrimaryLayout />   
  </Provider>
);

export default hot(module)(App)
