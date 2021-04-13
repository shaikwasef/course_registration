export const userStateReducer = (state = "STUDENT" , action) => {
    switch(action.type){
        case "STUDENT":
            return "STUDENT";
        case "ADMIN" :
            return "ADMIN"
        default :
            return state;
    }
}