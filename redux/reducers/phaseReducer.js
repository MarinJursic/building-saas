import { ADD_PHASE, UPDATE_PHASES } from "../actions/types";
import { v4 as uuid } from "uuid";

const initialState = {
  phasesUpdated: 0,
  phases: [],
};

/**
 *     {
      id: uuid(),
      name: "Excavation",
      progress: 40,
      start: new Date(),
      end: new Date(),
      open: false,
      subphases: [
        {
          id: uuid(),
          open: false,
          name: "Subphase",
          progress: 50,
          tasks: [
            {
              id: uuid(),
              name: "Task 1",
              progress: 60,
              start: new Date(),
              end: new Date(),
            },
            {
              id: uuid(),
              name: "Task 2",
              progress: 30,
              start: new Date(),
              end: new Date(),
            },
          ],
        },
      ],
      tasks: [
        {
          id: uuid(),
          name: "Task 3",
          progress: 100,
          start: new Date(),
          end: new Date(),
        },
      ],
    },
    {
      id: uuid(),
      open: false,
      name: "Foundation",
      start: new Date(),
      end: new Date(),
      progress: 65,
      subphases: [],
      tasks: [
        {
          id: uuid(),
          name: "Task 1",
          progress: 20,
          start: new Date(),
          end: new Date(),
        },
        {
          id: uuid(),
          name: "Task 2",
          progress: 70,
          start: new Date(),
          end: new Date(),
        },
        {
          id: uuid(),
          name: "Task 3",
          progress: 30,
          start: new Date(),
          end: new Date(),
        },
      ],
    },
 */

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PHASE:
      return {
        ...state,
        phases: [...state.phases, action.payload],
      };

    case UPDATE_PHASES:
      return {
        ...state,
        phases: action.payload,
        phasesUpdated: state.phasesUpdated + 1,
      };

    default:
      return state;
  }
}
