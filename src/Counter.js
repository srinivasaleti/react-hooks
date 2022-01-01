import { useState, useEffect } from "react"

export function Counter() {
    const [x, setX] = useState(0)

    const onClickListener = () => {
        setX(x + 1);
    }

    useEffect(function(){
        document.title = "You Clicked " + x + " times";
    });

    return <div>
        <h1>Count : {x}</h1>
        <button onClick={onClickListener}>Increment</button>
    </div>
}