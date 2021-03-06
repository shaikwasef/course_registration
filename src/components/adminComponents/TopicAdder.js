import axios from 'axios';
import React,{useRef} from 'react';
import AdderButton from "./AdderButton.js"
import "./TopicAdder.css"

function TopicAdder(props) {
    const topicInput = useRef(null);

    const postTopicInput = async (topicInput) => {
        if(topicInput===""){
            alert("Enter a topic Name");
            return;
        }
        const url = "https://course-registration-wasef.herokuapp.com/topics";
        const postTopicObject = {
            "id" : topicInput
        }
        await axios.post(url,postTopicObject,{
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((response) => {console.log(response)});
    }

    return (
        <div className = "topicAdderContainer">
            <input placeholder = "Please Enter Topic Name" ref = {topicInput} required/>
            <AdderButton buttonText = "ADD TOPIC" onClick ={() => {postTopicInput(topicInput.current.value) ; topicInput.current.value=""}}/>
        </div>
    );
}

export default TopicAdder;