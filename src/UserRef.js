import React, { useRef } from 'react'

const UserRef = () => {

    let myRefid=useRef(null);

  return (
    <div>
        <h1 ref={myRefid}>Welcome to UserRef Hook</h1>

        <button onClick={()=>{
            myRefid.current.innerHTML='Welcome to React Class 9am-working with UseRef Hook..';
            myRefid.current.classList.toggle('mycustomclss')
        }}>Update h1 Element</button>
    </div>
  )
}

export default UserRef