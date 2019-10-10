/*
 * @Author: cjiao100
 * @Date: 2019-10-10 21:00:54
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-10 21:08:44
 * @Description: Do not edit
 */
import React, { Component } from 'react'

class Boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
    this.toToggole = this.toToggole.bind(this)
  }
  render() {
    return (
      <div>
        <div className={this.state.isShow ? 'show' : 'hide'}>Boss级人物</div>
        <div>
          <button onClick={this.toToggole}>召唤Boss</button>
        </div>
      </div>
    )
  }

  toToggole() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

export default Boss
