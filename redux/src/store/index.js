import { createStore } from 'redux'
//  引入reducer
import reducer from './reducer'

const store = createStore(
    reducer,
    // 调试redux
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store