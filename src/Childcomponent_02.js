import React, { useContext } from 'react'
import { Mycontext2 } from './UseContexthook';
const Childcomponent_02 = () => {

  const coursename=useContext(Mycontext2);

  return (
    <div>
      {coursename}
      </div>
  )
}

export default Childcomponent_02