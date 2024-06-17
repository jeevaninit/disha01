import React from 'react'

const StateValues = () => {

    /* Defining State Values */
    const course='React';
    const duration='45 Days';

    const userdata={
        myname:'jeevan',
        loaction:'Dilsukhnagar',
        contact:8934983498
    }

  return (
    <div>
        {/* Accessing State Values */}
       <h1>Working with Statemanagement </h1> 
        <h1 style={{color:'red'}}>Name of the Course: {course}</h1>
    
       <h3>Course Duration: {duration}</h3>

       <h2>Person Details</h2>
       <p>Name of the Candidate : {userdata.myname}</p>
       <p>Address of th Candidate : {userdata.loaction}</p>
       <p>Contact Number : {userdata.contact}</p>

    </div>
  )
}

export default StateValues