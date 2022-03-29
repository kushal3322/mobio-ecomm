import axios from "axios";
// const URL = "http://localhost:3000/api/v1";
const URL = "https://fakestoreapi.com";

const axiosMain = axios.create({
  baseURL: URL,
  // process.env.NODE_ENV === "development"
  //   ? `${process.env.REACT_APP_API_URL}/api/v1`
  //   : `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosMain;
