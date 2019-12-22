import React, { Component } from 'react';

// import store from './store'
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
// import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

class TodoListUI extends Component {

    render() {
        return (
            <div style={{
                margin: '10px'
            }}>
                <div>
                    <Input
                        placeholder={this.props.inputValue}
                        value={this.props.inputValue}
                        style={{
                            width: '250px',
                            marginRight: '10px'
                        }}
                        onChange={this.props.changeInputValue}
                    />
                    <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
                </div>
                <p>{this.props.inputValue}</p>
                <div style={{
                    margin: '10px',
                    width: '300px'
                }}>
                    <List
                        bordered
                        dataSource={this.props.data}
                        renderItem={(item, index) => <List.Item onClick={this.props.deleteTodo.bind(this, index)}>
                            {item}
                        </List.Item>}
                    ></List>
                </div>
            </div>
        );
    }
}

export default TodoListUI