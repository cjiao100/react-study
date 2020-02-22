import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './index.css'

import Index from './Pages/Index'
import Video from './Pages/video'
import Workplace from './Pages/workplace'

function AppRouter() {
  let routeConfig = [
    {
      path: '/',
      title: '博客首页',
      exact: true,
      component: Index
    },
    {
      path: '/video',
      title: '视频教程',
      exact: false,
      component: Video
    },
    {
      path: '/workplace',
      title: '职场教程',
      exact: false,
      component: Workplace
    }
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {
              routeConfig.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="rightMain">
          {
            routeConfig.map((item, index) => (
              <Route path={item.path} exact={item.exact} component={item.component} />
            ))
          }
          {/* <Route path="/" exact component={Index} /> */}
          {/* <Route path="/video" component={Video} /> */}
          {/* <Route path="/workplace" component={Workplace} /> */}
        </div>
      </div>
    </Router>
  )
}

export default AppRouter