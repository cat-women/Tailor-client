import axios from "axios";

export default function axiosConfigu(token) {
  const url = "http://127.0.0.1:3333/api";

  axios.defaults.baseURL = url;
  if (token) {
    axios.defaults.headers.common["Authorization"] ="Bearer " + token.token;
  }
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
}
