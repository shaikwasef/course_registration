import React from 'react';
import CourseAdder from "../adminComponents/CourseAdder"
import TopicAdder from "../adminComponents/TopicAdder"

function Admin(props) {
    return (
        <div>
           <TopicAdder/>
           <CourseAdder/>
        </div>
    );
}

export default Admin;