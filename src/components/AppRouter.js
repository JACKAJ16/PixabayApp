import React from 'react'
import { HashRouter, Switch, Route } from "react-router-dom"

import App from "./App/App"
import ImageView from "./ImageView/ImageView"

const AppRouter = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/image/:id" component={ImageView} />
    </Switch>
  </HashRouter>
)

export default AppRouter