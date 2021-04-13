import React from 'react';
import "./UserStateButton.css"

function UserStateButton({buttonText,onClick}) {
    return (
        <div>
            <button className = "button" onClick = {onClick} >{buttonText}</button> 
        </div>
    );
}

export default UserStateButton;