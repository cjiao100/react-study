// 这样的函数被称为reducer函数
// function countReducer(state, action) {
//   switch(action.type) {
//     case 'add': 
//       return state + 1
//     case 'sub': 
//       return state - 1
//     default: 
//       return state
//   }
// }

// 使用useReducer
import React, { useReducer } from "react"


function ReducerDemo() {
  // useReducer的第一个参数是回调函数，第二个参数是初始值。会返回数据和调用器
  const [state, dispatch] = useReducer((state, action) => {
    switch(action) {
      case 'add': 
        return state + 1
      case 'sub': 
        return state - 1
      default: 
        return state
    }
  }, 0)

  return (
    <div>
      <h2>现在的分数是{state}</h2>
      <button onClick={() => {dispatch('add')}}>Increment</button>
      <button onClick={() => {dispatch('sub')}}>Decrement</button>
    </div>
  )
}


export default ReducerDemo