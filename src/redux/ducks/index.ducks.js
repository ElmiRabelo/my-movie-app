import { combineReducers } from "redux";

import movies from "./movies.ducks";
import error from "./error.ducks";

export default combineReducers({
  movies,
  error
});
