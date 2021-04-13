import React,{useRef} from 'react';
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {displayNewTopicList} from "../../actions/displayNewTopicList"
import {displayNewCourseList} from "../../actions/displayNewCourseList"

function RegistrationArea(props) {
    const dispatch = useDispatch();
    const selectedTopic = useRef("");
    const topicList = useSelector(state => state.newTopicListReducer);
    const courseList = useSelector(state =>  state.newCourseListReducer);

     const getTopics = async () => {
        const url = "http://localhost:8080/topics";
        await axios.get(url).then((response) => dispatch(displayNewTopicList(response.data)));
    }

    const getCourses = async(selectedTopic)=>{
        if(selectedTopic === ""){
            alert("Select topic for registration");
            return;
        }
        const url = "http://localhost:8080/topics/" + selectedTopic + "/courses";
        await axios.get(url).then((response) => dispatch(displayNewCourseList(response.data)));
    }

    const topics = topicList.map((topic,index) => {
        return <option key ={index} >{topic.id}</option>
    });

    const courses = courseList.map((course,index) => {
        return <option key ={index} >{course.id}</option>
    });
    return (
        <div>
            <input placeholder="Enter ID No." required/>
            <input placeholder="Enter Name " required/>
            <select className = "topicSelector" onClick = {getTopics} ref = {selectedTopic} required>
                <option value="">--Please Topic to Register--</option>
                {topics}
            </select>
            <select className = "courseSelector" onClick = {() => getCourses(selectedTopic.current.value)} required>
                <option value="">--Please choose course to Register--</option>
                {courses}
            </select>
        </div>
    );
}

export default RegistrationArea;