import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const Increase=()=>{
        setCount(count+10);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Welcome to Counter Program</h1>
        <hr />
        <p>{count}</p>
        <button onClick={Increase}>IncValue</button>
    </div>
  )
}

export default Counter