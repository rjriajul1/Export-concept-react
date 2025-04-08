import React, { useEffect, useState } from 'react';

const Counter = ({setColor}) => {

    const [counter, setCounter ] = useState(0)

    useEffect(()=>{
        console.log(counter);

        return ()=>{
            setColor('red')
        }
    },[counter])
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increment BUTTON</button>
        </div>
    );
};

export default Counter;