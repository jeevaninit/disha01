import React, { useContext } from 'react'
import { Myglobaldata } from './UseContactObject'

const AccessUseContextData = () => {
    const coursedetails=useContext(Myglobaldata);

    const {institute,course,fee}=coursedetails;

  return (
    <div>
        <p>Institute Name: {institute}</p>
        <p>Course Name: {course}</p>
        <p>Course Fee: {fee}</p>
    </div>
  )
}

export default AccessUseContextData