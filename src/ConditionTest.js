import React from 'react'
import { LoginButton } from './LoginButton';
import LogoutButton from './LogoutButton';

const ConditionTest = () => {

    const isloading=false;
    const error=false;


  return (
    <div>
        <h1>Welcome to Condition Testing...</h1>

{/* 
    if is True
*/}
        {!error && !isloading && (
            <>
            <LoginButton />
            <LogoutButton />
            </>
        )}

{/* 
if is Error
*/}

{error && <p>Authentication Error....</p>}

{!error && isloading && <p>Loading....</p>}
    </div>
  )
}

export default ConditionTest