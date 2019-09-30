/*
 * @Author: cjiao100
 * @Date: 2019-09-30 13:28:34
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-30 14:11:44
 * @Description: 首页
 */
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>JSX {true ? 'js' : 'jsx'}</li>
        <li>React</li>
      </ul>
    )
  }
}

export default App
