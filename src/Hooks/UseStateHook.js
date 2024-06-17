import React, { useState } from 'react'

const UseStateHook = () => {

   /*  const [data,setData]=useState(''); */

const [count,setCount]=useState(0);
const [product,setProduct]=useState('Apple 15 pro');

const [arr,setArr]=useState([
    'value1',
    'value2',
    'value3'
])

const [arrobj,setArrobj]=useState([
    {id:'01',name:'Jeevan'},
    {id:'02',name:'sai'},
  
])
const increase=()=>{
    setCount(count+1);
}

const decrease=()=>{
    setCount(count-1);
}

const updatephone=()=>{

    let pname=document.getElementById('pname').value;

    setProduct(pname);

}



const [username,setUsername]=useState('Jeevan Konduru');

  return (
    <div>
        <center>
        <h1>UseStateHook</h1>
        <p>{count}</p>
        <p>{username}</p>
{/* 
        <button onClick={increase}>Increase Count Value</button>
        <button onClick={decrease}>Decrease Count Value</button> */}

        
        <button onClick={()=>setCount(count+1)}>Increase Count Value</button>
        <button onClick={()=>setCount(count-1)}>Decrease Count Value</button>
        
        <h2>{product}</h2>

        <input type='text' id='pname'/>

        {/* <button onClick={updatephone}>UpDateValue</button> */}


        <button onClick={()=> {
                let pname=document.getElementById('pname').value;
                setProduct(pname);
        }

        }>UpDateValue</button>


        </center>
        </div>
  )
}

export default UseStateHook