import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'

function * mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}

function * getList() {
    const res = yield axios.get('https://easy-mock.com/mock/5e29a55e9ac87461cb753455/study/redux/getList')
    const action = getListAction(res.data.data.list)
    console.log(action)
    yield put(action)
}

export default mySaga