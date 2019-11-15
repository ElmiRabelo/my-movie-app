import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as MidiaActions } from "../ducks/midia.ducks";
import { Creators as ErrorActions } from "../ducks/error.ducks";

//Reposavel por fazer o request a api em busca de filmes e series. Possui um payload que é um objeto que possuo dois valores, o que o usuário deseja buscar e o tipo de busca: filme, serie ou ambos
export default function* getMidia(action) {
  try {
    const { inputValue, searchFor } = action.payload;
    const response = yield call(
      api.get,
      `/search/${searchFor}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${inputValue}&language=pt-BR`
    );
    if (!response.data.results.length) throw "Sem resultados";
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
    yield put(MidiaActions.getError());
  }
}
