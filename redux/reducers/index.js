import { combineReducers } from "redux";
import infoReducer from "./infoReducer";
import activityReducer from "./activityReducer";
import colormodeReducer from "./colormodeReducer";
import phaseReducer from "./phaseReducer";
import projectReducer from "./projectReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  info: infoReducer,
  activity: activityReducer,
  color: colormodeReducer,
  phase: phaseReducer,
  project: projectReducer,
  error: errorReducer,
});
