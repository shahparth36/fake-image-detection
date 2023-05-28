import axios from "axios";

let baseURL = "http://ec2-13-235-2-222.ap-south-1.compute.amazonaws.com/api";
// let baseURL = "http://localhost:8000/api";

const instance = axios.create({
  baseURL,
});

export { instance, baseURL };