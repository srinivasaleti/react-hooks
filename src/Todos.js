import { useState, useEffect } from "react";

export function Todos() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return <div>
        {
            data &&
            data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
            })
        }
    </div>;
}