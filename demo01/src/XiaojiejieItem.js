/*
 * @Author: cjiao100
 * @Date: 2019-09-30 20:32:57
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-09 19:03:55
 * @Description: Do not edit
 */
import React, { Component } from 'react'

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

export default XiaojiejieItem
