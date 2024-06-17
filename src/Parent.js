import React from 'react'
import Child_01 from './Child_01'
import Child_02 from './Child_02'

const Parent=()=>{

    const userdata={
        username:'JeevanKonduru',
        email:'jeevaninfo@gmail.com',
        password:'123456789',
        otherinof:'in the sesstion we are learn about State and Propos...'
    }

    const condition=false;
    return(
        <>
        <h1>Hello am from Parent Data...</h1>


{/*         <Child_01 un={userdata.username} oi={userdata.otherinof} />
        <Child_02 email={userdata.email} pass={userdata.password} /> */}

   {
        condition ? (<Child_01 un={userdata.username} oi={userdata.otherinof} />):(<Child_02 email={userdata.email} pass={userdata.password} />)
        }

        


        

        </>
    )
}
export default Parent