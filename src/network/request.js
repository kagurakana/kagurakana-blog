import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'http://121.36.145.94:8080/api',
    //baseURL:'http://localhost:8080/api',
    timeout:5000
  })
  instance.interceptors.response.use(res=>{
    // console.log(res.data.errno)
    if(res.data.errno!=404){
      return res.data;
    }else{
      // console.log('1111111111111111111')
      window.location.replace('/home')
    }
  })
  return instance(config)
}
