import React, { useState, useEffect } from 'react';

const CounterF = ({ step = 1 }) => { 
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count has changed: ${count}`);
    }, [count]); 

    const increment = () => {
        setCount(prevCount => prevCount + step); 
    };

    const decrement = () => {
        setCount(prevCount => prevCount - step); 
    };
    const reset = () => {
        setCount(0); 
    };
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CounterF;