import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ApiwithAxios = () => {

    const [data,setData]=useState([]);

        useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response)=>setData(response.data))
        },[])

  return (
    <div >
        <h1>Fetch API Data using Axios Dependence</h1>
        <div className='parent'>
    {data.map(item=><div key={item.id} className='apidata'>
        <p>{item.name} - {item.email}</p>
        <p>{item.body}</p>
       
    </div>)}
    </div>
    </div>
  )
}

export default ApiwithAxios