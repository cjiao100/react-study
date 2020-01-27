import { createStore, applyMiddleware, compose } from 'redux'
// 引入中间件
// import thunk from 'redux-thunk'
import creatSagaMiddleware from 'redux-saga'
//  引入reducer
import reducer from './reducer'
import mySages from './sagas'

// 增强函数
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// thunk增强函数
// const enhancers = composeEnhancers(applyMiddleware(thunk))
// saga增强函数
const sagaMiddleware = creatSagaMiddleware()
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware))


// createStore最多支持两个参数，如果需要使用中间件，需要使用增强函数来使用
const store = createStore(
    reducer,
    // 增强函数
    enhancers
    // 调试redux
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // 使用中间件
    // applyMiddleware(thunk),
)
sagaMiddleware.run(mySages)
export default store