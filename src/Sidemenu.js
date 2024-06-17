import React from 'react'

const Sidemenu = (props) => {
  return (
    <div className='menusidelist'>
        <div className='sidelist'>{props.slidelist}</div>
    </div>
  )
}

export default Sidemenu