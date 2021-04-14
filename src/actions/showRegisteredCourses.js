export const showRegisteredCourses = (studentCourses) => {
    return {
        type : "UPDATE REGISTERED COURSE LIST",
        payload : studentCourses
    }
}