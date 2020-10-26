import React, { useContext } from 'react';
import CounterContext from './CounterContext';
const Child = () => {
    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return (
        <div>
            <h1>
                Thi is a heading {counterValue[0]}
            </h1>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>
                Increment!
            </button>
        </div>
    )
} 

export default Child;