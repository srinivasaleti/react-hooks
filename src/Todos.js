import { useState, useEffect } from "react";

export function Todos() {
    const data = useFetch("https://jsonplaceholder.typicode.com/todos");

    return <div>
        {
            data &&
            data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
            })
        }
    </div>;
}

// "https://jsonplaceholder.typicode.com/todos"
function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return data
}