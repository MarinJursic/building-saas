import { ADD_PROJECT, UPDATE_PROJECTS } from "../actions/types";
import { v4 as uuid } from "uuid";

const initialState = {
  projects: [
    {
      id: uuid(),
      name: "Project 1",
      imgUrl:
        "https://media.architecturaldigest.com/photos/56ba787ca254b168296a8fff/1:1/w_3460,h_3460,c_limit/zaha-hadid-architecture-01.jpg",
      open: false,
    },
    {
      id: uuid(),
      name: "Project 2",
      imgUrl:
        "https://media.architecturaldigest.com/photos/56ba787ca254b168296a8fff/1:1/w_3460,h_3460,c_limit/zaha-hadid-architecture-01.jpg",
      open: false,
    },
    {
      id: uuid(),
      name: "Project 3",
      imgUrl:
        "https://media.architecturaldigest.com/photos/56ba787ca254b168296a8fff/1:1/w_3460,h_3460,c_limit/zaha-hadid-architecture-01.jpg",
      open: false,
    },
    {
      id: uuid(),
      name: "Project 4",
      imgUrl:
        "https://media.architecturaldigest.com/photos/56ba787ca254b168296a8fff/1:1/w_3460,h_3460,c_limit/zaha-hadid-architecture-01.jpg",
      open: false,
    },
  ],
};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    case UPDATE_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    default:
      return state;
  }
}
