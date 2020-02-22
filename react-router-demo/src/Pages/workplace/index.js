import React from 'react'
import {Route, Link} from 'react-router-dom'

import Getup from './Getup'
import Money from './Money'

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/workplace/money" >money</Link>
          </li>
          <li>
            <Link to="/workplace/getup" >getup</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>职场教程</h3>
        </div>
        <Route path="/workplace/money" component={Money}></Route>
        <Route path="/workplace/getup" component={Getup}></Route>
      </div>
    </div>
  )
}

export default Video
