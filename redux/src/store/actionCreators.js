import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () => ({ type: ADD_ITEM })
export const deleteItemAction = (index) => ({ 
    type: DELETE_ITEM,
    item: index
}) 
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

// thunk
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://easy-mock.com/mock/5e29a55e9ac87461cb753455/study/redux/getList').then(res => {
            const data = res.data.data.list
            const action = getListAction(data)
            dispatch(action)
        }).catch(err => {
            console.log(err)
        })
    }
}

// saga
export const getMyListAction = () => ({
    type: GET_MY_LIST
})