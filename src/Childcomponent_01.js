import React, { useContext } from 'react';
import { Mycontext } from './UseContexthook';

const Childcomponent_01 = () => {
  const inst = useContext(Mycontext);
  return (
    <div>
      <p>{inst}</p>
    </div>
  );
};

export default Childcomponent_01;
