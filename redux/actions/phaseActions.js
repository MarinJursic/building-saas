import { ADD_PHASE, UPDATE_PHASES } from "./types";
import { returnErrors, clearErrors } from "./errorActions";
import { v4 as uuid } from "uuid";

export const addPhase = (phase) => (dispatch) => {
  const newPhase = {
    ...phase,
    id: uuid(),
    subphases: [],
    tasks: [],
    open: false,
    start: new Date(),
    end: new Date(),
  };

  dispatch({
    type: ADD_PHASE,
    payload: newPhase,
  });
};

export const openPhase =
  (phaseID, forceOpen = false, subphaseID = null) =>
  (dispatch, getState) => {
    const phases = getState().phase.phases;

    phases.forEach((phase, i) => {
      if (phase.id === phaseID) {
        if (subphaseID) {
          phase.subphases.forEach((subphase, j) => {
            if (subphase.id === subphaseID) {
              phases[i].subphases[j].open =
                forceOpen || !phases[i].subphases[j].open;
            }
          });
        } else {
          phases[i].open = forceOpen || !phases[i].open;
        }

        dispatch({
          type: UPDATE_PHASES,
          payload: phases,
        });
      }
    });
  };

export const addTask = (newTaskInfo, phaseID) => (dispatch, getState) => {
  const phases = getState().phase.phases;

  if (newTaskInfo.end - newTaskInfo.start < 1) {
    dispatch(
      returnErrors(
        "Cannot add task because duration is too short",
        400,
        "ADD_TASK_FAIL"
      )
    );
    return;
  } else dispatch(clearErrors());

  const newTask = {
    id: uuid(),
    ...newTaskInfo,
  };

  phases.forEach((phase, i) => {
    if (phase.id === phaseID) {
      phases[i].tasks.push(newTask);

      let minDate = phases[i].tasks[0].start,
        maxDate = phases[i].tasks[0].end;

      phases[i].tasks.forEach((task) => {
        minDate = Math.min(minDate, task.start);
        maxDate = Math.max(maxDate, task.end);
      });

      phases[i].start = minDate;
      phases[i].end = maxDate;

      dispatch({
        type: UPDATE_PHASES,
        payload: phases,
      });
    }
  });
};

export const addSubphase =
  (newSubphaseInfo, phaseID) => (dispatch, getState) => {
    const phases = getState().phase.phases;

    const newSubphase = {
      ...newSubphaseInfo,
      id: uuid(),
      tasks: [],
      start: new Date(),
      end: new Date(),
      open: false,
    };

    phases.forEach((phase, i) => {
      if (phase.id === phaseID) {
        phases[i].subphases.push(newSubphase);

        dispatch({
          type: UPDATE_PHASES,
          payload: phases,
        });
      }
    });
  };
