import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as MidiaActions } from "../ducks/midia.ducks";
import { Creators as ErrorActions } from "../ducks/error.ducks";

export default function* getMidia(action) {
  try {
    const midiaQuery = action.payload.inputValue;
    const response = yield call(
      api.get,
      `/search/${action.payload.searchFor}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${midiaQuery}&language=pt-BR`
    );
    //Filtra e retorna somente os filmes que tiverem sinopse
    const midiaData = yield response.data.results.filter(
      midia => midia.overview
    );
    yield put(MidiaActions.getSuccess(midiaData));
  } catch (err) {
    yield put(
      ErrorActions.setError(
        "Desculpe, algo deve ter acontecido na nave-mãe. Tente novamente."
      )
    );
  }
}
