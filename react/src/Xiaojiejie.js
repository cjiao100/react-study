/*
 * @Author: cjiao100
 * @Date: 2019-09-30 14:46:16
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-10 21:12:03
 * @Description: Do not edit
 */
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import './style.css'

class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩', '精油推背']
    }
  }

  // 渲染前
  componentWillMount() {
    console.log('componentWillMount ---- 组件将要挂载到页面的时刻')
  }

  // 渲染后
  componentDidMount() {
    console.log('componentDidMount ---- 组件已经挂载到页面的时刻')
    axios
      .post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then(res => {
        console.log('axios 获取数据成功')
        console.log(res)
      })
      .catch(err => {
        console.log('axios 获取数据失败')
        console.log(err)
      })
  }

  // 更新前
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate ---- 组件更新前')
    // 必须返回一个booolean值
    return true
  }

  // 更新
  componentWillUpdate() {
    console.log('componentWillUpdate ---- 组件更新')
  }

  // 更新后
  componentDidUpdate() {
    console.log('componentDidUpdate ---- 组件更新后')
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ---- ')
  }

  // 渲染阶段
  render() {
    console.log('render ---- 组件挂载到页面的时刻')
    return (
      // 类似VUE中的template
      <Fragment>
        {/* JSX注释 */}
        <div>
          {/* for必须写成htmlFor */}
          <label htmlFor="input">增加服务</label>
          <input
            id="input"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={input => {
              this.input = input
            }}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul
          }}
        >
          {this.state.list.map((item, index) => {
            return (
              <XiaojiejieItem
                key={index + item}
                content={item}
                index={index}
                deleteItem={this.deleteList.bind(this)}
              />
            )
          })}
        </ul>
        <Boss />
      </Fragment>
    )
  }

  inputChange() {
    // console.log(this)
    // this.state.inputValue = e.target.value
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }

  addList() {
    // 渲染DOM是一个异步方法
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      },
      () => {
        // 在setState执行完毕后执行
        console.log(this.ul.querySelectorAll('li').length)
      }
    )
  }

  deleteList(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default Xiaojiejie
