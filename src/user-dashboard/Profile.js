export function Profile(props) {
    return <User user={props.user} />
}

function User(props) {
    const user = props.user;
    
    return <div>
        <h1 style={{color: 'red'}}>Profile</h1>
        <h1>name: {user.name}</h1>
        <h2>age: {user.age}</h2>
    </div>
}