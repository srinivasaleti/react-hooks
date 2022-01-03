import { useState } from "react";

export const EditUser = (props) => {
    const user = props.user;

    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);

    const onSubmit = () => {
        props.setUser({ name, age });
    }

    return (
        <div>
            <h1 style={{color: 'red'}}>Edit User</h1>
            <div>Name <input value={name} onChange={e => setName(e.target.value)} /></div>
            <div>Age <input value={age} onChange={e => setAge(e.target.value)} /></div>
            <button onClick={onSubmit} > Edit </button>
        </div>
    )
}