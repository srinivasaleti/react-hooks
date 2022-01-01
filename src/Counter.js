import { useState, useEffect } from "react"

export function Counter() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const onClickListenerX = () => {
        setX(x + 1);
    }
    const onClickListenerY = () => {
        setY(y + 1);
    }

    useEffect(function(){
        document.title = "You Clicked " + y + " times";
    }, [y]);

    return <div>
        <h1>X: Count : {x}</h1>
        <h1>Y: Count : {y}</h1>
        <button onClick={onClickListenerX}>Increment X</button>
        <button onClick={onClickListenerY}>Increment Y</button>
    </div>
}