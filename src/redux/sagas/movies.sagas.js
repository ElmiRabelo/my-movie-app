import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as MoviesActions } from "../ducks/movies.ducks";

export default function* getMovies(action) {
  try {
    const movieName = action.payload;
    const response = yield call(
      api.get,
      `/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${movieName}&language=pt-BR&region=BR`
    );
    const movieData = yield response.data.results.filter(
      movie => movie.overview
    );
    yield put(MoviesActions.getSuccess(movieData));
  } catch (err) {
    console.tron.log(err);
  }
}
