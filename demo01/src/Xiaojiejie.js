/*
 * @Author: cjiao100
 * @Date: 2019-09-30 14:46:16
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-10-10 12:54:21
 * @Description: Do not edit
 */
import React, { Component, Fragment } from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import './style.css'

class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩', '精油推背']
    }
  }
  render() {
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
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      // 在setState执行完毕后执行
      console.log(this.ul.querySelectorAll('li').length)
    })
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
