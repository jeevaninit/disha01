import React from 'react'

const ConditionTesting02 = () => {

    /* 
    creating Student Records
    */

    const student1 = { myname: 'John', grade: 98};
    const student2 = { myname: 'Bosco', grade: 99 };

    /* 
    Condition Check
    using grade
    */

    const higherGradeStudent = student1.grade > student2.grade ? student1 : student2;


  return (
    <div>
        <h1>ConditionTesting02</h1>

        <p>
            {higherGradeStudent.myname}
            {higherGradeStudent.grade}
        </p>
    

    {/* 
    adding condition to display more info..
    */}

    {higherGradeStudent ===student1 && (
        <p>
        {higherGradeStudent.myname} doing great!...
        </p>
    )}


    {
        higherGradeStudent===student2 && (
            <p>
                {higherGradeStudent.myname} is doing excelling!...
            </p>
        )
    }
    </div>
  )
}

export default ConditionTesting02