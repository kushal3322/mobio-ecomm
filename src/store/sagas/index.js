/* eslint-disable import/prefer-default-export */
import { all } from "redux-saga/effects";
import authSagas from "./Auth/auth";

export default function* rootSaga() {
  yield all([authSagas()]);
}
