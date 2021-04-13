import React from 'react';
import "./AdderButton.css"

function AdderButton({buttonText,onClick}) {
    return (
        <div>
            <button className = "AdderButton" onClick ={onClick} >{buttonText}</button>
        </div>
    );
}

export default AdderButton;