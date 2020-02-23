import { request } from './request'

class User {
  constructor(username,password,email,avatar){
    this.username = username
    this.password = password
    this.email = email
    this.avatar = avatar
  }
}

export function postLogin(username,password){
  return request({
    method:'post',
    url:'/api/user/login',
    data:{
      username,
      password
    }
  })
}

export function postRegister(username,password,email,avatar){
  const user = new User(username,password,email,avatar)
  return request({
    method:'post',
    url:'/user/register',
    data:{
      user
    }
  })
}
