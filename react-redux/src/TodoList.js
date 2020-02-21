import React from 'react';
import { connect } from 'react-redux'
    
const TodoList = props => {
    const { list, inputValue, inputChange, clickBth, deleteItem } = props
    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={inputChange}
                />
                <button onClick={clickBth}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => <li key={index} onClick={deleteItem.bind(this, index)}>{item}</li>)
                }
            </ul>
        </div>
    );
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