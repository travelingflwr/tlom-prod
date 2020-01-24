import { combineReducers } from "redux";
import todos from "./todos/todosReducers";
import projects from "./projects/projectsReducers";

export default combineReducers({
  todos,
  projects
});