import { useState } from "react";

const User = ({name}) => {
    const [count,setcount ] = useState(0)
    const [count2] = useState(1)

    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count : {count2}</h1>
        <h3>Name : {name}</h3>
        <h4>Location : </h4>
        <h4>Contact: @vaibhav123</h4>
        </div>
    )
}


export default User;