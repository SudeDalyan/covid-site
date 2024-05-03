import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";

export function* fetchHomeSaga(action) {
  try {
    const country = action.payload.country;
    console.log(country);
    if (country === undefined) {
      const url = `https://covid-19.dataflowkit.com/v1/world`;
      const response = yield axios.get(url);
      yield put(actions.fetchHomeSuccess(response.data));
    } else {
      const url = `https://covid-19.dataflowkit.com/v1/${country}`;
      const response = yield axios.get(url);
      yield put(actions.fetchHomeSuccess(response.data));
    }
  } catch (error) {
    yield put(actions.fetchHomeFail(error));
  }
}
