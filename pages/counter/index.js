import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../../src/counter/action';

export default function CounterApp() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const decrement = () => {
        dispatch(decrementCounter(count));
    }
    const increment = () => {
        dispatch(incrementCounter(count));
    }
    return (
        <>
            <h1> {count} </h1>
            <button
                onClick={() => decrement()}
            > - </button>
            <button
                onClick={()=> increment()}
            > + </button>
        </>
    )
}