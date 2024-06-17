import React, { useContext } from 'react'
import { Myglobaldata } from './UseContactObject'

const StudentDetails = () => {

    const studentdetails=useContext(Myglobaldata);
    

  return (
    <div>
  
            <h1>StudentDetails</h1>
            <p>{studentdetails.studentname}</p>
            <p>{studentdetails.classtime}</p>
    
    </div>
  )

}
export default StudentDetails