import { CHANGE_NAME, CHANGE_ADDRESS } from "../actions/types";
import axios from "axios";

export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
};

export const changeAddress = (address) => {
  return {
    type: CHANGE_ADDRESS,
    payload: address,
  };
};
