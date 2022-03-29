/* eslint-disable */
import { all, takeEvery, put, takeLatest } from "redux-saga/effects";
import {
  authSuccess,
  authStart,
  authFail,
  transactionListingFail,
  transactionListingStart,
  transactionListingSuccess,
  getProductSuccess,
  getProductFail,
  getProductStart,
  getProductSortSuccess,
  getProductSortFail,
  getProductSortStart,
  getCartSuccess,
  getCartFail,
  getCartStart,
  addCartSuccess,
  addCartFail,
  addCartStart,
} from "../../actions/Auth/auth";
import { axios } from "../../../http";
import * as actionLabels from "../../actionLabels";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  theme: "colored",
};

// const URL = "http://localhost:3000/api/v1" ;

toast.configure();

function* authSaga({ payload }) {
  try {
    yield authStart();
    const { email, password } = payload;
    console.log("login cred payload", payload);
    const response = yield axios.post("/login", {
      email,
      password,
    });
    if (response.status === 200) {
      console.log("status is 200");
      if (result === 1) {
        yield put(authSuccess({ data: response.data }));
      } else {
        toast.error(response.data.msg, options);
        yield put(authFail({ msg: response.data.msg }));
      }
    }
  } catch (error) {
    yield put(authFail({ msg: error }));
  }
}

function* getProductSaga({ payload }) {
  try {
    yield getProductStart();
    // const token1 = localStorage.getItem("JwtToken");
    // const token = JSON.parse(token1);
    console.log("login cred payload", payload);
    const response = yield axios.get("/products", {
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    });
    if (response.status === 200) {
      console.log("status is 200");

      yield put(getProductSuccess({ data: response.data }));
    } else {
      toast.error(response.data.msg, options);
      yield put(getProductFail({ msg: response.data.msg }));
    }
  } catch (error) {
    yield put(getProductFail({ msg: error }));
  }
}

function* getProductSortSaga({ payload }) {
  try {
    yield getProductStart();
    // const token1 = localStorage.getItem("JwtToken");
    // const token = JSON.parse(token1);
    console.log("login cred payload", payload);
    const { sort } = payload;
    const response = yield axios.get(`/products?sort=${sort}`, {
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    });
    if (response.status === 200) {
      console.log("status is 200");

      yield put(getProductSortSuccess({ data: response.data }));
    } else {
      toast.error(response.data.msg, options);
      yield put(getProductSortFail({ msg: response.data.msg }));
    }
  } catch (error) {
    yield put(getProductSortFail({ msg: error }));
  }
}

function* getCartSaga({ payload }) {
  try {
    yield getProductStart();
    // const token1 = localStorage.getItem("JwtToken");
    // const token = JSON.parse(token1);
    console.log("login cred payload", payload);
    const response = yield axios.get("/carts", {
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    });
    if (response.status === 200) {
      console.log("status is 200");

      yield put(getCartSuccess({ data: response.data }));
    } else {
      toast.error(response.data.msg, options);
      yield put(getCartFail({ msg: response.data.msg }));
    }
  } catch (error) {
    yield put(getCartFail({ msg: error }));
  }
}

function* addCartSaga({ payload }) {
  try {
    yield addCartStart();
    const { cartList } = payload;
    console.log("cart payload", payload);
    yield put(addCartSuccess({ data: cartList }));
  } catch (error) {
    yield put(addCartFail({ msg: error }));
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionLabels.AUTH_SAGA, authSaga),
    yield takeEvery(actionLabels.GET_PRODUCT_SAGA, getProductSaga),
    yield takeEvery(actionLabels.GET_PRODUCT_SORT_SAGA, getProductSortSaga),
    yield takeEvery(actionLabels.GET_CART_SAGA, getCartSaga),
    yield takeEvery(actionLabels.ADD_CART_SAGA, addCartSaga),
  ]);
}
