import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        {
          id: 1,
          title: '技术'
        },
        {
          id: 2,
          title: '无言'
        },
        {
          id: 3,
          title: '沉默是金'
        }
      ]
    };
    // 编程式重定向
    this.props.history.push('/home')
  }
  render() {
    return (
      <>
        {/* 标签式重定向 */}
        {/* <Redirect to="/home" /> */}
        <h2>JSS</h2>
        <ul>
          {
            this.state.list.map(item => (
              <li key={item.id}>
                <Link to={`/list/${item.id}`}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}

export default Index;