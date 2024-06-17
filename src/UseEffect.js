import React, { useState, useEffect } from 'react';



const UseEffect = () => {

    const [data,setData]=useState([]);

    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((json)=>setData(json))
        },[]
    );



  return (
    <div>
       <h1>Fetch API Data using UseEffect Hook</h1>


{data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}


        </div>
  )
}

export default UseEffect