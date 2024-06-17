import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Lifeinsurance from './Lifeinsurance';
import Healthinsurance from './Healthinsurance';
import Travelinsurance from './Travelinsurance';
import Vehicleinsurance from './Vehicleinsurance';

const Insurance = () => {

    const navigation = useNavigate();

    const insurancelist = [
        { label: 'Life Insurance', path: '/insurance/lifeinsurance' },
        { label: 'Health Insurance', path: '/insurance/healthinsurance' },
        { label: 'Travel Insurance', path: '/insurance/travelinsurance' },
        { label: 'Vehicle Insurance', path: '/insurance/vehicleinsurance' },

    ]

    const insurancetype = (path) => {
        navigation(path);
    }

    return (
        <div>
            <h1>
                Insurance Page
            </h1>

            <main>
                <div>
                    {insurancelist.map((item, index) => <li onClick={() => { insurancetype(item.path) }}>{item.label}</li>)}
                </div>

                <div className='displayarea'>
                    <Routes>
                        <Route path='lifeinsurance' element={<Lifeinsurance />}/>
                        <Route path='healthinsurance' element={<Healthinsurance />}/>
                        <Route path='travelinsurance' element={<Travelinsurance />}/>
                        <Route path='vehicleinsurance' element={<Vehicleinsurance />}/>
                    </Routes>
                </div>
            </main>

        </div>
    )
}

export default Insurance