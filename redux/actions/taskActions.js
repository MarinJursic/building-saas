import { ADD_TASK, DELETE_TASK, SET_ACTIVE_TASK } from "../actions/types";
import { v4 as uuid } from "uuid";

export const addTask = (task) => (dispatch) => {
  const newTask = {
    ...Task,
    id: uuid(),
    date: Date.now(),
  };

  dispatch({
    type: ADD_TASK,
    payload: newTask,
  });
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const setActiveTask = (Task) => {
  return {
    type: SET_ACTIVE_TASK,
    payload: activity,
  };
};
