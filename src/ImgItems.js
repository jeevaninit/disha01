import React from 'react'

const ImgItems = (props) => {
  return (
    <div >
        <h1>Reuse Component</h1>

        <img src={props.imgitems} alt='text' width={350}/>
    </div>
  )
}

export default ImgItems