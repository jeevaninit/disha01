import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigationbar = () => {


    const navigation=useNavigate();

    const menuitems=[
        {label:'HOME', path:'/home'},
        {label:'BUSINESS SOLUTIONS', path:'/businesssolutions'},
        {label:'PRESS', path:'/press'},
        {label:'CAREERS', path:'/career'},
        {label:'CONTACT US', path:'/contact'},
        {label:'INSURANCE', path:'/insurance'},
    ]

    const handlenavigation=(path)=>{
        navigation(path);
    }
  return (
    <div>
        <nav>
            <ul>
                {menuitems.map((item,index)=><li onClick={()=>{handlenavigation(item.path)}}>{item.label}</li>)}
            </ul>
        </nav>
    </div>
  )
}

export default Navigationbar