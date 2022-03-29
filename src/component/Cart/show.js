import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCartSaga } from "../../store/actions";
import "./order.css";

const Show = (props) => {
  const { cartList } = useSelector((state) => state.authReducer);
  const history = useHistory();
  let total = 0;
  cartList &&
    cartList.length &&
    cartList.map((item) => {
      total = total + item.price;
    });
  let finaltotal = total;
  console.log(finaltotal);

  console.log(props.orderlist);

  return (
    <div>
      <div>
        <h2 className="mt-3">Thanks for your order!</h2>
        <h2>Your Final order Price : $ {finaltotal} </h2>
      </div>
      <div className="card">
        <div class="container">
          {cartList &&
            cartList.length > 0 &&
            cartList.map((item) => {
              return (
                <div>
                  <h6>
                    <b>{item.title}</b>
                  </h6>
                  <p>Price: $ {item.price} </p>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <br />
        <br />
      </div>
      <h3>Do visit here again!</h3>
    </div>
  );
};
export default Show;
