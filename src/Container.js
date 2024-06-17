import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BusinessSolutions from './BusinessSolutions'

import MyPress from './Press';
import Career from './Career';
import Contact from './Contact';
import Insurance from './Insurance';
import Healthinsurance from './Healthinsurance';
import Vehicleinsurance from './Vehicleinsurance';
import Lifeinsurance from './Lifeinsurance';
import Travelinsurance from './Travelinsurance';

const Container = () => {
  return (
    <div>
        <h1>Display Area here...</h1>

        <Routes>
            <Route path='/businesssolutions' element={<BusinessSolutions />}/>
           <Route path='/career' element={<Career />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/press' element={<MyPress />}/>
            <Route path='/insurance' element={<Insurance />}>
                        <Route path='/insurance/lifeinsurance' element={<Lifeinsurance />}/>
                        <Route path='/insurance/healthinsurance' element={<Healthinsurance />}/>
                        <Route path='/insurance/travelinsurance' element={<Travelinsurance />}/>
                        <Route path='/insurance/vehicleinsurance' element={<Vehicleinsurance />}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Container