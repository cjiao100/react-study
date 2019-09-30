/*
 * @Author: cjiao100
 * @Date: 2019-09-30 14:46:16
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-30 20:24:38
 * @Description: Do not edit
 */
import React, { Component, Fragment } from 'react'
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
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                key={index + item}
                onClick={this.deleteList.bind(this, index)}
                // 解析HTML 
                dangerouslySetInnerHTML={{ __html: item }}
              />
            )
          })}
        </ul>
      </Fragment>
    )
  }

  inputChange(e) {
    // console.log(this)
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
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
