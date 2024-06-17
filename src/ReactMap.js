import React from 'react'
import Menuitems from './Menuitems';
import Sidemenu from './Sidemenu';

const ReactMap = () => {

    const menuitems=[
        'Home',
        'About',
        'Service',
        'Career',
        'Contact'
    ];

    const courses=[
        'Angular',
        'React',
        'Node',
        'ExpressJS'

    ]

  return (
    <div>

    <div className='horizontalmenu' style={{display:'flex',width:'100%',lineHeight:'40px',background:'blue',alignItems:'center',justifyContent:'space-evenly'}}>

        {menuitems.map((items,itemindex)=>
        
        <Menuitems 
        key={itemindex}
        arrayvalue={items}
        />

        )}
</div>

<div className='sidemenu'>
{courses.map(
    (course,courseindex)=>
    <Sidemenu
    key={courseindex}
    slidelist={course}
    />
)}
</div>

    </div>
  )
}

export default ReactMap