import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  SET_ACTIVE_ACTIVITY,
} from "../actions/types";
import { v4 as uuid } from "uuid";

const initialState = {
  activities: [
    {
      id: uuid(),
      title: "Installed flooring",
      author: "Jane Doe",
      date: Date.now(),
      description: "A description of one task that was done today",
    },
    {
      id: uuid(),
      title: "Installed flooring",
      author: "John Smith",
      date: Date.now(),
      description: "A description of one task that was done today",
    },
    {
      id: uuid(),
      title: "Installed flooring",
      author: "Donald Kellam",
      date: Date.now(),
      description: "A description of one task that was done danas",
    },
    {
      id: uuid(),
      title: "Installed flooring",
      author: "Donald Kellam",
      date: Date.now(),
      description: "A description of one task that was done danas",
    },
  ],
  activeActivity: null,
};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        activites: [...state.activities, action.payload],
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload
        ),
      };

    case SET_ACTIVE_ACTIVITY:
      return {
        ...state,
        activeActivity: action.payload,
      };

    default:
      return state;
  }
}
