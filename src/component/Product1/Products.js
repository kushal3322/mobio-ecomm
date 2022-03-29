import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getProductSaga,
  addCartSaga,
  getProductSortSaga,
} from "../../store/actions";
import "./Product.css";

const AllProducts = (props) => {
  const dispatch = useDispatch();
  const { productList, cartList } = useSelector((state) => state.authReducer);
  const history = useHistory();
  const [productData, setProductData] = useState();
  const [search, setSearch] = useState(false);
  const [sortOrder, setSortOrder] = useState();
  const [ran, setRan] = useState();
  const [list, setList] = useState([]);
  const { productlist, cartlist } = props;
 
  // finalArray = [];
  // updatedPosts = this.props.StoredProd;
  // console.log(updatedPosts);

  useEffect(() => {
    setSortOrder(productList);
    setList([...cartList]);
  }, [productList]);

  const handleSort = (e) => {
    let x1 = sortOrder;
    // dispatch(getProductSortSaga({ sort: e.target.value }));

    if (e.target.value === "asc") {
      // setSortOrder(false);
      setRan("asc order");
      setSortOrder(
        x1.sort((a, b) => {
          return a.price - b.price;
        })
      );
    }
    if (e.target.value === "desc") {
      setRan("desc order");
      // setSortOrder(false);
      setSortOrder(
        x1.sort((a, b) => {
          return b.price - a.price;
        })
      );
    }
  };

  useEffect(() => {
    dispatch(getProductSaga());
    console.log("yahoo");
    // props.getAllProducts();
    // axios
    //   .get("https://fakestoreapi.com/products/")
    //   .then((res) => console.log(res, "responseeeee"));
  }, []);

  const SearchData = (e) => {
    console.log(e.target.value, "on chnge value");
    if (!e.target.value) {
      setSearch(false);
    } else {
      const data =
        productList &&
        productList.filter((item) => {
          if (item.title.toLowerCase().includes(e.target.value)) {
            return true;
          } else {
            return false;
          }
        });
      console.log(data, "gfytfytftftygu");
      setSearch(true);
      setProductData(data);
    }
  };

  let data = [];

  const handleCart = () => {
    dispatch(addCartSaga({ cartList: list }));
    history.push("/cart");
  };

  const addToCart = (item) => {
    item.stock = 0;
    setList((oldArray) => [...oldArray, item]);
    // if (cartList && cartList.length) {
    //   final = [...cartList, ...data];
    // } else {
    //   final = data;
    // }

    dispatch(addCartSaga({ cartList: list }));
  };
  console.log(list);

  return (
    <div>
      <div className="d-flex mt-3 mb-3">
        <input
          type="text"
          onChange={SearchData}
          placeholder="search product by name"
        ></input>

        <div className="accordion_select ml-5">
          <span id="whoFollow" className="general_text selectbox">
            <select
              onChange={handleSort}
              className="accordion_selectbox w-70 float-right"
            >
              <option>Sort by</option>
              <option value="desc">Price: High to Low</option>
              <option value="asc">Price: Low to High</option>
            </select>
          </span>
        </div>
        <div>
          <button style={{ marginLeft: "300px" }} onClick={handleCart}>
            Your Cart
          </button>
        </div>
      </div>
      {search ? (
        productData &&
        productData.length > 0 &&
        productData.map((item) => {
          return (
            <div className="card">
              <img
                style={{
                  width: "50%",
                  height: "130px",
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
              <div className="d-flex justify-content-center mb-2">
                <button
                  className="d-flex justify-content-center"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="col-lg-12 col-md-8">
          <div className="row" id="sideimg">
            {sortOrder &&
              sortOrder.length &&
              sortOrder.map((item) => {
                return (
                  <div className="col-lg-3">
                    <div className="card1 mb-5">
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
                      <div className="pb-2">
                        <div className="d-flex justify-content-center">
                          <button
                            className="d-flex justify-content-center"
                            onClick={() => addToCart(item)}
                          >
                            Add to Cart
                          </button>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
