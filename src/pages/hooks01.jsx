import React, {useState} from 'react';

export default function HooksPage1() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Hooks Demo</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
