import React from 'react';
import { useSelector } from 'react-redux';
import "./RegisteredCourses.css"

function RegisteredCourses(props) {
    const registeredCourses = useSelector(state => state.registeredCoursesReducer);

    const registeredCourseContent = registeredCourses.map((course) => {return (
        <tr>
                <td>{course.topicId}</td>
                <td>{course.courseId}</td>
        </tr>
    )})
    return (
        <div className="registeredCourses">
             
           <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {registeredCourseContent}
                </tbody>
            </table>
        </div>
    );
}

export default RegisteredCourses;