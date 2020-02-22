import React from 'react'
import {Route, Link} from 'react-router-dom'

import ReactPage from './ReactPage'
import VuePage from './VuePage'
import FlutterPage from './FlutterPage'

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/video/react" >React 教程</Link>
          </li>
          <li>
            <Link to="/video/flutter" >Flutter 教程</Link>
          </li>
          <li>
            <Link to="/video/vue" >Vue 教程</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>视频教程</h3>
        </div>
        <Route path="/video/react" component={ReactPage}></Route>
        <Route path="/video/flutter" component={FlutterPage}></Route>
        <Route path="/video/vue" component={VuePage}></Route>
      </div>
    </div>
  )
}

export default Video
