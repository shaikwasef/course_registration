import React from 'react';
import { useDispatch } from 'react-redux';
import {changeUserStateToAdmin} from "../../actions/changeUserStateToAdmin"
import {changeUserStateToStudent} from "../../actions/changeUserStateToStudent"
import UserStateButton from "./UserStateButton"
import "./UserStateButtonContainer.css"

function UserStateButtonContainer(props) {
    const dispatch = useDispatch();
    return (
        <div className = "buttonArrangement">
            <UserStateButton onClick = {() => dispatch(changeUserStateToStudent())} buttonText = "STUDENT" />
            <UserStateButton onClick = {() =>  dispatch(changeUserStateToAdmin())} buttonText = "ADMIN"/>
        </div>
    );
}

export default UserStateButtonContainer;