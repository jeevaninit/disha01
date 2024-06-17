import React, { useCallback } from 'react'

const UseCallback = () => {

/*     const myfun=()=>{
        console.log('Hello am from useCallback Hook...');
    } */
    let name='Jeevan Konduru';
    
    const myfun=useCallback(
        ()=>{
            console.log('Hello am from using callback Hook.....')
        },[]
    )

    const myfun2=useCallback(()=>{
        console.log('Hi am from callback-2')
    },[name])

  return (
    <div>
        <button onClick={myfun}>Call Back</button>
        <button onClick={myfun2}>Call Back</button>
    </div>
  )
}

export default UseCallback