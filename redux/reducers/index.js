import { combineReducers } from "redux";
import infoReducer from "./infoReducer";
import activityReducer from "./activityReducer";
import colormodeReducer from "./colormodeReducer";

export default combineReducers({
  info: infoReducer,
  activity: activityReducer,
  color: colormodeReducer,
});
