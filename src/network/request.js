import axios from 'axios'

axios.defaults.withCredentials = true;


// 线上版本注释Localhost 
export const BASE_URL = "https://www.kagurakana.xyz/api"
// export const BASE_URL = "http://localhost:8080/api"
export const BASE_URL_OUT = BASE_URL + "/out"


export function request(config) {
  const instance = axios.create({
    // baseURL:'https://www.kagurakana.xyz/api',
    // baseURL: 'http://localhost:8080/api',
    baseURL: BASE_URL,
    timeout: 20000
  })
  instance.interceptors.response.use(res => {
    if (res.data.errno != 404) {
      return res.data;
    } else {
      window.location.replace('/')
    }
  })
  return instance(config)
}

export function proxyRequest(config) {
  const instance = axios.create({
    baseURL: BASE_URL_OUT,
    timeout: 20000
  })
  instance.interceptors.response.use(res => {
    if (res.data.errno != 404) {
      return res.data;
    } else {
      window.location.replace('/')
    }
  })
  return instance(config)
}

export function outRequest(config) {
  const instance = axios.create({
    timeout: 5000
  })
  return instance(config)
}