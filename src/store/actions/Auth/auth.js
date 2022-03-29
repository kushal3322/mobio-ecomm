import * as actionLabels from "../../actionLabels";

export const authStart = () => ({
  type: actionLabels.AUTH_START,
});
export const authSaga = (payload) => ({
  type: actionLabels.AUTH_SAGA,
  payload,
});
export const authSuccess = (payload) => ({
  type: actionLabels.AUTH_SUCCESS,
  payload,
});
export const authFail = (error) => ({
  type: actionLabels.AUTH_FAIL,
  error: error.msg,
});

export const getProductStart = () => ({
  type: actionLabels.GET_PRODUCT_START,
});
export const getProductSaga = (payload) => ({
  type: actionLabels.GET_PRODUCT_SAGA,
  payload,
});
export const getProductSuccess = (payload) => ({
  type: actionLabels.GET_PRODUCT_SUCCESS,
  payload,
});
export const getProductFail = (error) => ({
  type: actionLabels.GET_PRODUCT_FAIL,
  error: error.msg,
});

export const getProductSortStart = () => ({
  type: actionLabels.GET_PRODUCT_SORT_START,
});
export const getProductSortSaga = (payload) => ({
  type: actionLabels.GET_PRODUCT_SORT_SAGA,
  payload,
});
export const getProductSortSuccess = (payload) => ({
  type: actionLabels.GET_PRODUCT_SORT_SUCCESS,
  payload,
});
export const getProductSortFail = (error) => ({
  type: actionLabels.GET_PRODUCT_SORT_FAIL,
  error: error.msg,
});

export const addCartStart = () => ({
  type: actionLabels.ADD_CART_START,
});
export const addCartSaga = (payload) => ({
  type: actionLabels.ADD_CART_SAGA,
  payload,
});
export const addCartSuccess = (payload) => ({
  type: actionLabels.ADD_CART_SUCCESS,
  payload,
});
export const addCartFail = (error) => ({
  type: actionLabels.ADD_CART_FAIL,
  error: error.msg,
});

export const getCartStart = () => ({
  type: actionLabels.GET_CART_START,
});
export const getCartSaga = (payload) => ({
  type: actionLabels.GET_CART_SAGA,
  payload,
});
export const getCartSuccess = (payload) => ({
  type: actionLabels.GET_CART_SUCCESS,
  payload,
});
export const getCartFail = (error) => ({
  type: actionLabels.GET_CART_FAIL,
  error: error.msg,
});
