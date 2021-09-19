import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  SET_ACTIVE_ACTIVITY,
  UPDATE_ACTIVITY,
} from "../actions/types";
import { v4 as uuid } from "uuid";

export const addActivity = (title, description) => (dispatch) => {
  const newActivity = {
    title,
    description,
    id: uuid(),
    date: Date.now(),
    author: "Author Name",
    shortDescription: "A description of one task that was done today",
    imgs: [
      {
        id: uuid(),
        imgUrl:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        filetype: "img",
        filename: "ab-photo1.jpg",
      },
      {
        id: uuid(),
        imgUrl:
          "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
        filetype: "img",
        filename: "ab-photo2.jpg",
      },
      {
        id: uuid(),
        imgUrl:
          "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
        filetype: "pdf",
        filename: "wall.pdf",
      },
    ],
  };

  console.log(newActivity);

  dispatch({
    type: ADD_ACTIVITY,
    payload: newActivity,
  });
};

export const deleteActivity = (id) => {
  return {
    type: DELETE_ACTIVITY,
    payload: id,
  };
};

export const setActiveActivity = (activity) => {
  return {
    type: SET_ACTIVE_ACTIVITY,
    payload: activity,
  };
};

export const updateInfo =
  (id, title = null, description = null) =>
  (dispatch, getState) => {
    const activities = getState().activity.activities;

    activities.forEach((activity, i) => {
      if (activity.id === id) {
        if (title) activity.title = title;
        if (description) activity.description = description;

        activities[i] = activity;

        dispatch({
          type: UPDATE_ACTIVITY,
          payload: {
            activities,
            activity,
          },
        });

        return;
      }
    });
  };

export const deleteImage = (activity_id, image_id) => (dispatch, getState) => {
  const activities = getState().activity.activities;

  activities.forEach((activity, i) => {
    if (activity.id === activity_id) {
      activity.imgs = activity.imgs.filter((img) => img.id !== image_id);

      activities[i] = activity;

      dispatch({
        type: UPDATE_ACTIVITY,
        payload: {
          activities,
          activity,
        },
      });

      return;
    }
  });
};
