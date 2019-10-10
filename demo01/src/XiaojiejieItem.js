/*
 * @Author: cjiao100
 * @Date: 2019-09-30 20:32:57
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-09 21:42:08
 * @Description: Do not edit
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return <li onClick={this.handleClick}>
      {this.props.name}为你服务： {this.props.content}
    </li>
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

// 校验props的内容
XiaojiejieItem.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
// 默认值
XiaojiejieItem.defaultProps = {
  name: 'yeye'
}

export default XiaojiejieItem
