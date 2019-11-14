import { all, takeLatest } from "redux-saga/effects";

import { Types as MidiaTypes } from "../ducks/midia.ducks";

import getMidia from "./midia.sagas";

export default function* rootSaga() {
  yield all([takeLatest(MidiaTypes.GET_REQUEST, getMidia)]);
}
