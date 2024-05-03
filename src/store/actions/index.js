import * as actionTypes from "../actionTypes";

export const fetchHome = (country) => {
  return {
    type: actionTypes.FETCH_HOME,
    payload: {
      country: country,
    },
  };
};

export const fetchHomeSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HOME_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetchHomeFail = (error) => {
  return {
    type: actionTypes.FETCH_HOME_FAIL,
    payload: {
      error: error,
    },
  };
};
