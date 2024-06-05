import axios from "axios";
const instance = axios.create({
  // baseURL: 'http://el-delivery.ru:8080/api/v1'
baseURL: 'http://localhost:8080/api/v1'
})
export default instance;
// axios.defaults.baseURL = "http://localhost:8080/api/login";
// axios.defaults.headers.post["Content-Type"] = "application/json";

// export const request = (method, url, data) => {
//   return axios({
//     method: method,
//     url: url,
//     data: data,
//   });
// };
