/*
 * @Author: cjiao100
 * @Date: 2019-09-30 20:32:57
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-10 18:53:31
 * @Description: Do not edit
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // 组件第一次存在于DOM中，函数不会执行
  // 已经存在DOM中函数才会被执行
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }

  // 删除前
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('--- render')
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
