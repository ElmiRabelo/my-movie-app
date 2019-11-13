import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as MoviesActions } from "../ducks/movies.ducks";

export default function* getMovies(action) {
  try {
    const movieName = action.payload.inputValue;
    const response = yield call(
      api.get,
      `/search/${action.payload.typeSearch}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${movieName}&language=pt-BR&region=BR`
    );
    //Filtra e retorna somente os filmes que tiverem sinopse
    const movieData = yield response.data.results.filter(
      movie => movie.overview
    );
    yield put(MoviesActions.getSuccess(movieData));
  } catch (err) {
    console.tron.log(err);
  }
}
