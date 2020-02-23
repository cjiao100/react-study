import React, { useState, createContext, useContext } from 'react'

// 创建上下问
const CountContext = createContext();

// 子组件
function Counter() {
  // 接受数据
  let count = useContext(CountContext)

  return <div>{count}</div>
}

// 父组件
function Example4 () {
  const [count, setcount] = useState(0)

  return (
    <div>
      <p>you clicked {count} time</p>
      <button onClick={() => setcount(count + 1)}>Click</button>
      {/* 共享数据 */}
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default Example4;