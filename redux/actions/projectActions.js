import { ADD_PROJECT, UPDATE_PROJECTS } from "../actions/types";
import { v4 as uuid } from "uuid";

export const addProject = (project) => (dispatch) => {
  const newProject = {
    ...project,
    id: uuid(),
    date: Date.now(),
  };

  dispatch({
    type: ADD_PROJECT,
    payload: newProject,
  });
};

export const openProject = (projectID) => (dispatch, getState) => {
  const projects = getState().project.projects;

  projects.forEach((project, i) => {
    projects[i].open = project.id === projectID ? !projects[i].open : false;
  });

  dispatch({
    type: UPDATE_PROJECTS,
    payload: projects,
  });
};
