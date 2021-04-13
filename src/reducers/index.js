import {combineReducers} from "redux"
import {userStateReducer} from "./userStateReducer"
import {newTopicListReducer} from "./newTopicListReducer"
import {newCourseListReducer} from "./newCourseListReducer"

export const allReducers = combineReducers({userStateReducer,newTopicListReducer,newCourseListReducer});