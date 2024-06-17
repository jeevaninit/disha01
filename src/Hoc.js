/* 
HOC-Higher Order Component
-with help of hoc to reuse logic 
-HOC  is a pure function with zero side effects.

 */
import React, { useState } from 'react'

const Hoc = () => {
  return (
    <div>
        <Hocredcomponent comp={Counter} />
        <Hocgreencomponent comp={Counter} />
    </div>
  )
}



const Hocredcomponent=(props)=>{
    return (
        <>
        <h3 style={{background:'red'}}>
            Red Counter:<props.comp />
        </h3>
        </>
    )
}
const Hocgreencomponent=(props)=>{
return(
    <>
    <h3 style={{background:'green'}}>
            Green Counter: <props.comp/>
        </h3>
    </>
)
}

//com
const Counter=()=>{
    const [count,setCount]=useState(0)
return(
    <>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update Counter Value</button>
    </>
)
}
export default Hoc