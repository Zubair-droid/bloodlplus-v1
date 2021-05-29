import React from 'react'
import StepSection from './components/StepSection';
import TopSection from './components/TopSection';
import Background from './components/Background';
import Reach from './components/Reach';
import FareWell from './components/Farewell'

function App() {
    return (
        <div className = "App">
            <TopSection/>
            <Background/>
            <StepSection/>
            <Reach/>
            <FareWell/>
        </div>
    )
}

export default App
