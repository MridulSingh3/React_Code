import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from '../features/counter/counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    return (
        <>
            <h1>Count:{count}</h1>

            <button onClick={() => dispatch(increment())}>Inc</button>
            <button onClick={() => dispatch(decrement())}>Desc</button>

            <br /><br />

            <input type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))} />

            <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Add Amount</button>

            <br /><br />

            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default Counter
