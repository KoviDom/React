import { useState } from "react";


export function Counter({ start }) {

    const [count, setCount] = useState(parseInt(start));

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Počet: {count}</h1>
            <button className="btn btn-info" onClick={handleClick}>Zvýšit počet</button>
            <h1>Počet: {count}</h1>
            <button className="btn btn-danger" onClick={ () => setCount(count - 1) }>Uber počet</button>
        </div>
    );
}