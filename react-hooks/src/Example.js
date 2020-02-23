// import React, { Component } from 'react'

// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this.addCount = this.addCount.bind(this)
//   }
//   render() {
//     return (
//       <div>
//         <p>you clicked {this.state.count} time</p>
//         <button onClick={this.addCount}>Click</button>
//       </div>
//     );
//   }

//   addCount() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
// }

// 使用hooks语法改写上面代码

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  // 第一个参数是回调函数，第二个参数值表示在什么情况下执行 
  useEffect(() => {
    console.log('Effect => Index')
    // 解绑后调用
    return () => {
      console.log('unmuount => Index')
    }
  },[])
  return <h2>js</h2>
}

function List() {
  useEffect(() => {
    console.log('Effect => List')
    return () => {
      console.log('unmuount => List')
    }
  })
  return <h2>List</h2>
}

function Example () {
  const [count, setcount] = useState(0)

  // 相当于componentDidMount 加 componentDidUpdate，异步请求0
  useEffect(() => {
    console.log(`useEffect => You clicked ${count}`)

    return () => console.log('=========')
  })

  return (
    <div>
      <p>you clicked {count} time</p>
      <button onClick={() => setcount(count + 1)}>Click</button>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list" exact component={List} />
      </Router>
    </div>
  )
}

export default Example;