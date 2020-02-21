import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import TodoList from './TodoList'
import store from './store'
import './index.css';

// 提供器
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
