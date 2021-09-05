import { CHANGE_NAME, CHANGE_ADDRESS } from "../actions/types";

const initialState = {
  name: "2031 Twisted Elm",
  address: "2031 Twisted Elm Dr, Austin, TX 78726",
};

export default function infoReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case CHANGE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
}
