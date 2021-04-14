import React, { useRef } from 'react';
import axios from "axios"
import AdderButton from "./AdderButton"
import "./StudentAdder.css"

function StudentAdder(props) {
    const studentId = useRef("");
    const studentName = useRef("");

    const updateStudentRecord = async (studentId,studentName) => {
        if(studentId === "" || studentName === ""){
            alert("Enter correct field values");
            return;
        }
        const url = "http://localhost:8080/students";
        const courseObject = {
            "id" : studentId ,
            "name" : studentName
        }
        await axios.post(url,courseObject);
    }

    return (
        <div className = "studentAdder">
            <input placeholder = "Please Enter Student ID" ref = {studentId} required/>
            <input placeholder = "Please Enter Student Name" ref = {studentName} required/>
            <AdderButton buttonText="ADD STUDENT" onClick = {() => updateStudentRecord(studentId.current.value ,studentName.current.value)} />
        </div>
    );
}

export default StudentAdder;