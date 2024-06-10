import axios from "axios";
const instance = axios.create({
  //baseURL: 'https://el-delivery.ru:8080/api/v1'
  baseURL: "http://localhost:8080/api/v1",
});
export default instance;
