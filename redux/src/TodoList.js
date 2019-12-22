import React, { Component } from 'react';

import TodoListUI from './TodoListUI'

import store from './store'
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'

// import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

class TodoList extends Component {

    constructor(props) {
        super(props)

        // 获取reducer中的数据
        console.log(store.getState())
        let {inputValue, list} = store.getState()

        this.state = {
            data: list,
            inputValue
        }

        // 订阅store保证页面的更新
        store.subscribe(this.storeChange.bind(this))
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        let { inputValue, list } = store.getState()

        // console.log(this)

        this.setState({
            inputValue,
            data: list
        })
    }

    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteTodo(index){
        console.log(this)
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    render() {
        return (
            <TodoListUI
                data={this.state.data}
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue.bind(this)}
                clickBtn={this.clickBtn.bind(this)}
                deleteTodo={this.deleteTodo.bind(this)}
            />
        );
    }
}

export default TodoList