import React from 'react';
import RegistrationArea from "./RegistrationArea"
import "./Student.css"
import RegisteredCourses from "./RegisteredCourses"

function Student(props) {
    

    return (
        <div className = "studentContainer">
            <RegistrationArea/>
        </div>
    );
}


export default Student;