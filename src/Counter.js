import { useState } from "react"

export function Counter() {
    const [x, setX] = useState(0)

    const onClickListener = () => {
        setX(x+1);
    }

    return <div>
        <h1>Count : {x}</h1>
        <button onClick={onClickListener}>Increment</button>
    </div>
}