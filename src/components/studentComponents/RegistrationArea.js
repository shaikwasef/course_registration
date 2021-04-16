import React,{useRef} from 'react';
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {displayNewTopicList} from "../../actions/displayNewTopicList"
import {displayNewCourseList} from "../../actions/displayNewCourseList"
import "./RegistrationArea.css"
import RegisterButton from "./RegisterButton"
import { showRegisteredCourses } from '../../actions/showRegisteredCourses';
import RegisteredCourses from './RegisteredCourses';

function RegistrationArea(props) {
    const dispatch = useDispatch();
    const selectedTopic = useRef("");
    const selectedCourse = useRef("");
    const studentId = useRef("");
    const topicList = useSelector(state => state.newTopicListReducer);
    const courseList = useSelector(state =>  state.newCourseListReducer);
    

     const getTopics = async () => {
        const url = "https://course-registration-wasef.herokuapp.com/topics";
        await axios.get(url).then((response) => dispatch(displayNewTopicList(response.data)));
    }

    const getCourses = async(selectedTopic)=>{
        if(selectedTopic === ""){
            alert("Select topic for registration");
            return;
        }
        const url = "https://course-registration-wasef.herokuapp.com/topics/" + selectedTopic + "/courses";
        await axios.get(url).then((response) => dispatch(displayNewCourseList(response.data)));
    }

    const topics = topicList.map((topic,index) => {
        return <option key ={index} >{topic.id}</option>
    });

    const courses = courseList.map((course,index) => {
        return <option key ={index} >{course.id}</option>
    });

    const registerCourse = async (studentId,topic,course) => {
        if(topic === "" || course === "" || studentId === ""){
            alert("Choose appropriate fields");
            return;
        }
        const url = "https://course-registration-wasef.herokuapp.com/students/" + studentId + "/courses";
        const postCourseObject = {
            "courseId" : course ,
            "topicId" : topic
        }
        await axios.post(url,postCourseObject,{
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((response) => {console.log(response)});

          await axios.get(url).then((response)=>dispatch(showRegisteredCourses(response.data)));
        }

    return (
        <div className = "container">
        <div className = "RegistrationArea">
            <input placeholder="Enter ID No." ref = {studentId} required />
            <input placeholder="Enter Name " required />
            <select className = "topicSelector" onClick = {getTopics} ref = {selectedTopic} required >
                <option value="">--Please Topic to Register--</option>
                {topics}
            </select>
            <select className = "courseSelector" ref = {selectedCourse} onClick = {() => getCourses(selectedTopic.current.value)} required>
                <option value="">--Please choose course to Register--</option>
                {courses}
            </select>
            <RegisterButton buttonText = "REGISTER" onClick = {() => registerCourse(studentId.current.value,selectedTopic.current.value,selectedCourse.current.value)} />
        </div>
        <div>
            <RegisteredCourses />
        </div>
        </div>
    );
}

export default RegistrationArea;