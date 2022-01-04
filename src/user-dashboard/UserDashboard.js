import { createContext, useState } from "react";
import { Profile } from "./Profile";
import { EditUser } from "./EditUser";

export const UserContext = createContext({});

export function UserDashboard() {
    const [user, setUser] = useState({ name: "srinu", age: 26 })

    return <div>
        <UserContext.Provider value={{ user: user, setUser: setUser }} >
            <Profile />
            <EditUser />
        </UserContext.Provider >
    </div >
}