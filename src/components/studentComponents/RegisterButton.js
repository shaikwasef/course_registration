import React from 'react';
import "./RegisterButton.css"

function RegisterButton({onClick,buttonText}) {
    return (
        <div>
            <button className = "RegisterButton" onClick ={onClick}>{buttonText}</button>
        </div>
    );
}

export default RegisterButton;