export const registeredCoursesReducer =(state = [] , action) =>{
    switch(action.type){
        case "UPDATE REGISTERED COURSE LIST":
            return action.payload;
        case "REMOVE REGISTERED LIST":
            return [];
        default :
            return state ;
    }
}