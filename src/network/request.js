import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'http://localhost:8080/api',
    timeout:50000
  })
  instance.interceptors.response.use(res=>{
    return res.data;
  })
  return instance(config)
}