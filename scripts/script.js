import {addNewTask, handleTaskBehaviour} from "./functions.js";
import refs from "./refs.js";



refs.addBtn.addEventListener("click", addNewTask)
refs.myUL.addEventListener("click", handleTaskBehaviour);