import React, { createContext } from 'react';
import Childcomponent_01 from './Childcomponent_01';
import Childcomponent_02 from './Childcomponent_02';


const Mycontext = createContext();
const Mycontext2=createContext();

const UseContexthook = () => {
  
  return (
    <div>
      <h1>UseContexthook</h1>
      <Mycontext.Provider value={'ITpro-SkillSet'}>
        <Childcomponent_01 />
      </Mycontext.Provider>

      <Mycontext2.Provider value={'React Course'}>
      <Childcomponent_02 />
      </Mycontext2.Provider>
    </div>
  );
};

export default UseContexthook;
export { Mycontext,Mycontext2 };

/* spring batch
ejb 
javabeans 
hybernet */
