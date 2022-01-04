import { useContext, useState } from "react";
import { UserContext } from "./UserDashboard";

export const EditUser = () => {
    const userContext = useContext(UserContext);
    const user = userContext.user;

    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);

    const onSubmit = () => {
        userContext.setUser({ name, age });
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