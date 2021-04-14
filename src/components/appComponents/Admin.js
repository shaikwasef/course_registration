import React from 'react';
import CourseAdder from "../adminComponents/CourseAdder"
import StudentAdder from '../adminComponents/StudentAdder';
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