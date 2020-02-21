import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.inputChange}
                    />
                    <button onClick={this.props.clickBth}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => <li key={index} onClick={this.props.deleteItem.bind(this, index)}>{item}</li>)
                    }
                </ul>
            </div>
        );
    }
}

const stateToProps = state => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = dispatch => {
    return {
        inputChange(e) {
            // console.log(e.target.value)
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickBth(e) {
            let action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        deleteItem(i) {
            // console.log(i)
            let action = {
                type: 'delete_item',
                value: i
            }
            dispatch(action)
        }
    }
}
// 建立影射关系
export default connect(stateToProps, dispatchToProps)(TodoList);