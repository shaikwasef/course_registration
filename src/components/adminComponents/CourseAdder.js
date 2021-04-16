import React,{useRef} from 'react';
import AdderButton from './AdderButton';
import "./CourseAdder.css"
import {useDispatch, useSelector} from "react-redux"
import axios from 'axios';
import {displayNewTopicList} from "../../actions/displayNewTopicList"


function CourseAdder(props) {
    const dispatch = useDispatch();
    const topicList = useSelector(state => state.newTopicListReducer);
    const courseName = useRef("");
    const selectedTopic = useRef("");

    const getTopics = async () => {
        const url = "https://course-registration-wasef.herokuapp.com/topics";
        await axios.get(url).then((response) => dispatch(displayNewTopicList(response.data)));
    }

    const topics = topicList.map((topic,index) => {
        return <option key ={index} >{topic.id}</option>
    });

    const updateCourseList = async (selectedTopic,courseName) => {
        if(courseName === "" || selectedTopic === ""){
            alert("Choose or enter correct field values");
            return;
        }
        const url = "https://course-registration-wasef.herokuapp.com/topics/" + selectedTopic + "/courses";
        const courseObject = {
            "id" : courseName
        }
        await axios.post(url,courseObject);
    }

    return (
        <div className ="courseAdderContainer">
            <select className = "topicSelector" onClick = {getTopics} ref = {selectedTopic} required>
                <option value="">--Please choose a Topic to add Course--</option>
                {topics}
            </select>
            <input placeholder = "Please Enter Course Name" ref = {courseName} required/>
            <AdderButton buttonText="ADD COURSE" onClick = {() => {updateCourseList(selectedTopic.current.value , courseName.current.value); courseName.current.value=""}} />
        </div>
    );
}

export default CourseAdder;