import React, { useState } from 'react'
import Count from './MemoCount';

export const ReactMemo = () => {
    const [count,setCount] = useState(0);
  return (
    <>
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <Count />
    </div>
    </>
)
}
