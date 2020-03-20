import axios from 'axios'

axios.defaults.withCredentials = true;

export function request(config) {
  const instance = axios.create({
    // baseURL:'https://www.kagurakana.xyz/api',
    baseURL: 'http://localhost:8080/api',
    timeout: 5000
  })
  instance.interceptors.response.use(res => {
    if (res.data.errno != 404) {
      return res.data;
    } else {
      window.location.replace('/home')
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