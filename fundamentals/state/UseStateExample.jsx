// just a counter

import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    const HandleClick = (prop) => {
        prop === 'Min' ? setCount(count - 1) : setCount(count + 1)
    }
    return (
        <>
            <div>Count{count}</div>
            <button onClick={HandleClick('add')}>Increase</button>
            <button onClick={HandleClick('Min')}>Decrease</button>
        </>
    )
}

export default Counter