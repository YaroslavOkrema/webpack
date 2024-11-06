import React, {useState} from 'react';
import classes from './App.module.scss';

const App = () => {
    const [count, setCount] = useState(0);

    function plus() {
        setCount(count + 1);
    }

    function minus() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
};

export default App;