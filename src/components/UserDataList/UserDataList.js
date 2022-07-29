import React from "react";
import Card from "../UI/Card";

import './UserDataList.css';

const UserDataList = (props) => {
    if(props.users.length  === 0){
        return;
    }
    
    return (
        <Card className="users">
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>{user.username} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}

export default UserDataList;