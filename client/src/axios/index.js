import axios from "axios";

let baseURL = "http://ec2-13-235-2-222.ap-south-1.compute.amazonaws.com/api";

const instance = axios.create({
  baseURL,
  timeout: 3000,
});

export { instance, baseURL };