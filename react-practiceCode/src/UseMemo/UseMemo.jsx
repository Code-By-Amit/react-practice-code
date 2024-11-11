import React, { useMemo,memo, useState } from 'react'

export const ExpCount = () => {
    // const [count,setCount] = useState();
    
    function sum(){
        let i = 0;
        for(i=1;i<=1000000000;i++){
            i++;
        }
        return i;
    }
    const total = useMemo(()=>sum(),[])
    

  return (
    <div>
        <p>ExpCount: {total} </p>
    </div>
  )
};

export const MemoParentComponent = () => {
    const [count,setCount] = useState(0);

    return(
        <>
        <div className='h-screen flex justify-center items-center flex-col gap-3'>
        <ExpCount/>
        <button className='px-2 py-3 bg-blue-700 text-white rounded-lg' onClick={()=>setCount(count+1)}>Increment</button>
        <p>Count: {count}</p>
        </div>
        </>
    )
}
