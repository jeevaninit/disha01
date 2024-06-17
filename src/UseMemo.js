import React, { useMemo, useState } from 'react'

export const UseMemo = () => {

    const [count,setCount]=useState(1);

    let num1=10;
    let num2=30;

    let sum=useMemo(()=>{
        return num1+num2
    },[num1]
    )


  return (
    <div>
        <h1>Working with use UseMemo</h1>
        <h2>{count}</h2>
        <button onClick={()=>{
                setCount(count+1)
        }}>update value</button>
        <h2>{sum}</h2>
    </div>
  )
}
