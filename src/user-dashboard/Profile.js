import { useContext } from "react";
import { UserContext } from "./UserDashboard";

export function Profile() {
    return <User />
}

function User() {
    const user = useContext(UserContext).user;

    return <div>
        <h1 style={{ color: 'red' }}>Profile</h1>
        <h1>name: {user.name}</h1>
        <h2>age: {user.age}</h2>
    </div>
}