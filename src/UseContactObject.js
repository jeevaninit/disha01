import React, { createContext } from 'react'
import AccessUseContextData from './AccessUseContextData'
import StudentDetails from './StudentDetails'


const Myglobaldata=createContext()

const UseContactObject = () => {

  const objectvalue={
    institute:'ITproSkillSet',
    course:'React',
    fee:15000,
    classtime:'9 Am',
    studentname:'Disha'
  }

  return (
    <div>
      <Myglobaldata.Provider value={objectvalue}>
        <AccessUseContextData />
        <StudentDetails />
      </Myglobaldata.Provider>
    </div>
  )
}

export default UseContactObject
export {Myglobaldata}