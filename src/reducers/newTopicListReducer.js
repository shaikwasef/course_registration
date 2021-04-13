export const newTopicListReducer = (state = [] , action) => {
    const payloadLength = action.payload == null ?  0 : action.payload.length;
    switch(action.type){
        case "SHOW" :
            if(state.length !== payloadLength){
                return action.payload;
            }
            else{
                return state;
            }
        default :
            return state;
    }
    
}