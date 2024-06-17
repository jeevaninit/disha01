import React from 'react'
import { connect } from 'react-redux'
import {DecAction, IncAction} from './action';

const PrintStoreValue = ({
  count,
  myname,
  address,
  city,
  IncAction,
  DecAction
}) => {
  return (
    <div>
            <p>
        {count}
      </p>
      <button onClick={IncAction}>Increment</button>
      <button onClick={DecAction}>Decrement</button>
       <p>
        MyName: {myname}
        </p>
        <p>
        my Address: {address}
        </p>
        <p>
        my City:{city}
      </p>
        
    </div>
  )
}



const mapStateToProps=(state)=>({
    count:state.count,
    myname:state.myname,
    address:state.mydata.address,
    city:state.mydata.city
  })
  
export default connect (mapStateToProps,{IncAction,DecAction}) (PrintStoreValue)