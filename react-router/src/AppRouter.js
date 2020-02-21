import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/list'>列表</Link></li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" exact component={List} />
      <Route path="/home" exact component={Home} />
    </Router>
  )
}

export default AppRouter