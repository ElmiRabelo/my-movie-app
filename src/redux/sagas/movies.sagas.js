import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as MoviesActions } from "../ducks/movies.ducks";

export default function* getMovies(action) {
  const movieName = action.payload;
  const response = yield call(
    api.get,
    `/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${movieName}&language=pt-BR&region=BR`
  );
  yield put(MoviesActions.getSuccess(response.data.results));
}
