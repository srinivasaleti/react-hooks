import { useState } from "react";
import { Profile } from "./Profile";
import { EditUser } from "./EditUser";

export function UserDashboard() {
    const [user, setUser] = useState({ name: "srinu", age: 26 })

    return <div>
        <Profile user={user} />
        <EditUser user={user} setUser={setUser} />
    </div>
}