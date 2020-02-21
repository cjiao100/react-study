import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
  }
  render() {
    return (
      <>
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