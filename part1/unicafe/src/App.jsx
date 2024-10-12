import React from 'react';
import { useState } from 'react'
import Button from './Button';
import Statistics from './Statistics';

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incState = (state, setState) => {
        const newState = state + 1;
        setState(newState);
    }

    console.log("App re-rendered.")
    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => incState(good, setGood)}
                    text="good" />
            <Button onClick={() => incState(neutral, setNeutral)}
                    text="neutral" />
            <Button onClick={() => incState(bad, setBad)}
                    text="bad" />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App