import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export function UseEffectCleanupDemo() {
    const [open, setOpen] = useState(true);

    return (
        <div>
            {open && <Chat />}
            <button onClick={() => setOpen(!open)}>Toogle Chat</button>
        </div>
    )
}

function Chat() {
    useEffect(() => {
        return () => {
            alert("Chat window closed");
        }
    });

    useEffect(() => {
        alert("Chat window opened");
    }, []);

    return <div>
        <h1>Chat Window</h1>
    </div>
}