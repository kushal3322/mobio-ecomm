/* eslint-disable import/no-anonymous-default-export */
import * as actionLabels from "../../actionLabels";

const initialState = {
  jwtToken: "",
  userId: "",
  userType: "",
  productList: {},
  cartList: {},
  transactionList: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.AUTH_SUCCESS: {
      return {
        ...state,
      };
    }
    case actionLabels.AUTH_FAIL: {
      return {
        ...state,
      };
    }
    case actionLabels.GET_PRODUCT_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        productList: action.payload.data,
      };
    }
    case actionLabels.GET_PRODUCT_FAIL: {
      return {
        ...state,
      };
    }
    case actionLabels.GET_PRODUCT_SORT_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        productList: action.payload.data,
      };
    }
    case actionLabels.GET_PRODUCT_SORT_FAIL: {
      return {
        ...state,
      };
    }
    case actionLabels.ADD_CART_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        cartList: action.payload.data,
      };
    }
    case actionLabels.ADD_CART_FAIL: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
