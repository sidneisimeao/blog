import React from 'react'
import { hot } from 'react-hot-loader'

import PrimaryLayout from "./layouts/PrimaryLayout";

import "./styles/scss/app.scss";

const App = () => (
  <PrimaryLayout />
)

export default hot(module)(App)
