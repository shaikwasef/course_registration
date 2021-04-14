import {combineReducers} from "redux"
import {userStateReducer} from "./userStateReducer"
import {newTopicListReducer} from "./newTopicListReducer"
import {newCourseListReducer} from "./newCourseListReducer"
import {registeredCoursesReducer} from "./registeredCoursesReducer"
export const allReducers = combineReducers({userStateReducer,newTopicListReducer,newCourseListReducer,registeredCoursesReducer});