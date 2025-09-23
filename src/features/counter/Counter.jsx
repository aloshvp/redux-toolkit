import { useSelector, useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from "./counterSlice"
import { useState } from 'react';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section className="counter-card">
            <h2 className="counter-heading">✨ Redux Counter</h2>
            <p className="counter-display">{count}</p>

            <div className="btn-row">
                <button className="btn primary" onClick={() => dispatch(increment())}>+</button>
                <button className="btn secondary" onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type="text"
                className="input-field"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
                placeholder="Enter number"
            />

            <div className="btn-row">
                <button className="btn success" onClick={() => dispatch(incrementByAmount(addValue))}>
                    ➕ Add Amount
                </button>
                <button className="btn danger" onClick={resetAll}>
                    🔄 Reset
                </button>
            </div>
        </section>
    )
}

export default Counter;
