import React, { useRef, useState } from 'react'

const UseRef_02 = () => {

    const searchInput=useRef(null);
    const [inputValue, setInputValue] = useState('')

    const Handleclick=()=>{
        const inputvalue=searchInput.current.value;
        console.log(inputvalue);

        setInputValue(inputvalue);
    }

  return (
    <div>
        <h1>Working with UseRef Example-02</h1>

        <input type='text' placeholder='UserName' ref={searchInput} />
        <h1>{inputValue}</h1>

        <button onClick={Handleclick}>Click Here..</button>
    </div>
  )
}

export default UseRef_02