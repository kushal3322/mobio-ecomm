import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCartSaga } from "../../store/actions";
import "./cart.css";
let CD;

const Cart = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cartList } = useSelector((state) => state.authReducer);
  console.log(cartList);
  useEffect(() => {
    dispatch(getCartSaga());
  }, []);

  let a2 = [
    { name: "banana", price: 25 },
    { name: "Orange", price: 55 },
  ];

  const handleChecout = () => {
    history.push("/show");
  };

  // a2.map((item)=>{
  //   item.stock =0;
  //   // thing.total = (thing.count)*(thing.price);
  // })

  // const addOrder = () => {};

  const addOrder = (item) => {
    console.log(item, "item");
    let final2;
    const data = [item];
    if (props.orderlist && props.orderlist.length) {
      final2 = [...props.orderlist, ...data];
    } else {
      final2 = data;
    }
    props.AddOrder(final2);
  };

  const removefromCart = (item) => {
    console.log(item, "item");
    let final1;
    CD = a2;
    const index = a2.indexOf(item);
    if (index > -1) {
      a2.splice(index, 1);
    }
    console.log("newAfterarray", a2);
    // props.RemovefromCart(CD);
  };

  return (
    <div>
      <div className="d-flex">
        <p className="p-3">Shopping Cart</p>
        <div className="p-3">
          <button style={{ marginLeft: "630px" }} onClick={handleChecout}>
            Checkout
          </button>
        </div>
      </div>
      <div className="col-lg-12 col-md-8">
        <div className="row" id="sideimg">
          {props &&
            cartList &&
            cartList.length > 0 &&
            cartList.map((item) => {
              // item.n = Number(1);
              return (
                <div className="col-lg-3">
                  <div className="card1 mb-3">
                    <img
                      style={{
                        width: "100%",
                        height: "130px",
                        alignItems: "center",
                        objectFit: "contain",
                      }}
                      src={item.image}
                      alt="Avatar"
                    />
                    <div class="container">
                      <h6>
                        <b>{item.title}</b>
                      </h6>
                      <p>Price: $ {item.price}</p>
                    </div>
                    {/* <button onClick={() => this.props.AddtoCartfn(item)}>Add to Cart</button> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
