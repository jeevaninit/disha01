import React from 'react'

const ConditionTesting04 = () => {

    const myfruits=[
        {
        id:1,
        tilte:'Cabbage',
        des:'Jairam Ramesh accuses BJP of misusing central agencies, questions PM Modis stance on Black Money',
        isFruit:false,
        },{
        id:2,
        tilte:'Garlic',
        des:'Jairam Ramesh accuses BJP of misusing central agencies, questions PM Modis stance on Black Money',
        isFruit:false,
        },{
        id:3,
        tilte:'Apple',
        des:'Jairam Ramesh accuses BJP of misusing central agencies, questions PM Modis stance on Black Money',
        isFruit:true,
        },{
            id:4,
        tilte:'Mango',
        des:'Jairam Ramesh accuses BJP of misusing central agencies, questions PM Modis stance on Black Money',
        isFruit:true,
        }
        
]

const listItems=myfruits.map(
    condition=><li key={condition.id} 
    style={{
    color:condition.isFruit?'Magenta':'DarkGreen'
}}>
    <p>{condition.tilte}</p>
    <p>{condition.des}</p>
</li>)

  return (
    <div>
        <h1>Working with condition Testing-04</h1>
        <div>{listItems}</div>
     
    </div>
  )
}

export default ConditionTesting04