import React, { Component } from 'react'

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.addCount = this.addCount.bind(this)
  }
  render() {
    return (
      <div>
      <p>you clicked {this.state.count} time</p>
      <button onClick={this.addCount}>Click</button>
    </div>
    );
  }

  componentDidMount() {
    console.log(`componentDidMount => You clicked ${this.state.count}`)
  }
  
  componentDidUpdate() {
    console.log(`componentDidUpdate => You clicked ${this.state.count}`)
  }

  addCount() {
        this.setState({
          count: this.state.count + 1
        })
      }
}

export default Example3;