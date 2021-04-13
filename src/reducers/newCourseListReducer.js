export const newCourseListReducer = (state = [] , action) => {
    switch(action.type){
        case "UPDATE COURSE LIST" :
            return action.payload;
        default :
            return state;
    }
}