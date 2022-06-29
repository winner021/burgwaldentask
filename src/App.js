import React from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'

const App=()=>{
    return(
        <div>
            <div className='title'>
            BURG DB
            </div>
            <div className='about'>
            Financial Advisory firm

            </div>
            <BarChart/>
            <LineChart/>
        </div>
    )
}

export default App