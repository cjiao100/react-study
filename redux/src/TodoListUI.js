import React from 'react';

// import store from './store'
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
// import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

// 使用无状态组件
const TodoListUI = props => {
    return (
        <div style={{
            margin: '10px'
        }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    value={props.inputValue}
                    style={{
                        width: '250px',
                        marginRight: '10px'
                    }}
                    onChange={props.changeInputValue}
                />
                <Button type="primary" onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{
                margin: '10px',
                width: '300px'
            }}>
                <List
                    bordered
                    dataSource={props.data}
                    renderItem={(item, index) => <List.Item onClick={props.deleteTodo.bind(this, index)}>
                        {item}
                    </List.Item>}
                ></List>
            </div>
        </div>
    );
}

export default TodoListUI