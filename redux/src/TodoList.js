import React, { Component } from 'react';

import store from './store'

import { Input, Button, List } from 'antd'
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
        const action = {
            type: 'changeInput',
            value: e.target.value
        }

        store.dispatch(action)
    }

    storeChange() {
        let { inputValue, list } = store.getState()

        console.log(this)

        this.setState({
            inputValue,
            data: list
        })
    }

    clickBtn() {
        const action = {
            type: 'addItem'
        }

        store.dispatch(action)
    }

    render() {
        return (
            <div style={{
                margin: '10px'
            }}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        value={this.state.inputValue}
                        style={{
                            width: '250px',
                            marginRight: '10px'
                        }}
                        onChange={this.changeInputValue.bind(this)}
                    />
                    <Button type="primary" onClick={this.clickBtn.bind(this)}>增加</Button>
                </div>
                <p>{this.state.inputValue}</p>
                <div style={{
                    margin: '10px',
                    width: '300px'
                }}>
                    <List
                        bordered
                        dataSource={this.state.data}
                        renderItem={item => <List.Item actions={[
                            <Button type="danger" icon="close" shape="circle" size="small"></Button>
                        ]}>
                            {item}
                        </List.Item>}
                    ></List>
                </div>
            </div>
        );
    }
}

export default TodoList