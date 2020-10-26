import  React, { useReducer } from 'react';
import CounterReduser from './counterreduser';
const Child2 = () =>{
    let [state, dispatch] = useReducer(CounterReduser, 1);
    console.log(state)
    return(
        <div>
            <h2>
                This is an Increment Button {state}
            </h2>
            <button onClick={
                () => dispatch('INCREMENT')
            }>
                Increment Reducer
            </button>
        </div>

    )
}
export default Child2;