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

import React, { useState } from 'react'

function Example () {
  const [count, setcount] = useState(0)

  return (
    <div>
      <p>you clicked {count} time</p>
      <button onClick={() => setcount(count + 1)}>Click</button>
    </div>
  )
}

export default Example;