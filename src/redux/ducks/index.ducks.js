import { combineReducers } from "redux";

import midia from "./midia.ducks";
import error from "./error.ducks";

export default combineReducers({
  midia,
  error
});
