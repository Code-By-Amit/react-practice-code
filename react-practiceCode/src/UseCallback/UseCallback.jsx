import React, { memo, useCallback, useState } from 'react'

export const Button = memo(({onClick,children}) => {
    console.log(`Rendered Button Component: ${children}`);
  return (
    <button className={`px-4 py-3 text-white ${children == "Increment"? 'bg-green-700':'bg-red-600'} my-2`} onClick={onClick}>{children}</button>
  )
})

export const UseCallback=()=>{
    const [count,setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prev=>prev+1)
        console.log('Increament Count')
    },[]);

    const decrement = useCallback(() => {
        setCount(prev=>prev-1);
        console.log('Decreament Count');
    },[]);

    return (
        <div className='flex justify-center items-center flex-col h-screen gap-3'>
        <h1>Count: {count}</h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        </div>
    )
}
