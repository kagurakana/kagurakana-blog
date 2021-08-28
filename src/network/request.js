import axios from "axios";
// import { __ENV__ } from "@/assets/.env/env";
axios.defaults.withCredentials = true;

// 线上版本注释Localhost
let url;
switch (process.env.NODE_ENV) {
  case "production":
    url = "https://www.kagurakana.xyz/api";
    break;
  case "development":
    url = "http://localhost:8080/api";
    // url = "http://192.168.134.132:8001/api";
    break;

  default:
    break;
}
// export const BASE_URL = 
//   process.env.NODE_ENV === "production" ?
//   "https://www.kagurakana.xyz/api" :
//   "http://192.168.134.132:8001/api";

export const BASE_URL = url;

// http://localhost:8080/api";

export const BASE_URL_OUT = BASE_URL + "/out";

export function request(config) {
  const instance = axios.create({
    // baseURL:'https://www.kagurakana.xyz/api',
    // baseURL: 'http://localhost:8080/api',
    baseURL: BASE_URL,
    timeout: 20000,
  });
  instance.interceptors.response.use((res) => {
    if (res.data.errno != 404) {
      return res.data;
    } else {
      window.location.replace("/");
    }
  });
  return instance(config);
}
// 跨域代理请求
export function proxyRequest(config) {
  const instance = axios.create({
    baseURL: BASE_URL_OUT,
    timeout: 20000,
  });
  instance.interceptors.response.use((res) => {
    if (res.data.errno != 404) {
      return res.data;
    } else {
      window.location.replace("/");
    }
  });
  return instance(config);
}

// 非本站请求
export function outRequest(config) {
  const instance = axios.create({
    timeout: 5000,
  });
  return instance(config);
}