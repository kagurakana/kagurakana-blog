import { request } from './request'
import { hmacSha } from '@/utils/cryp'
class User {
  constructor(username, password, email, avatar) {
    this.username = username
    this.password = password
    this.email = email
    this.avatar = avatar
  }
}
//测试用户名唯一性
export function getValidUsername(username) {
  return request({
    method: 'get',
    url: '/user/checkusername',
    params: {
      username
    }
  })
}
//测试邮箱唯一性
export function getValidEmail(email) {
  return request({
    method: 'get',
    url: '/user/checkemail',
    params: {
      email
    }
  })
}

//发送登录请求
export function postLogin(username, password) {
  password = hmacSha(password)
  return request({
    method: 'post',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}
//发送注册请求
export function postRegister(username, password, email, avatar) {
  password = hmacSha(password)
  const user = new User(username, password, email, avatar)
  return request({
    method: 'post',
    url: '/user/register',
    data: {
      user
    }
  })
}
//添加友链
export function postAddFriendLink(avatar, name, URL, bio) {
  return request({
    method: 'post',
    url: '/user/addlink',
    data: {
      avatar, name, URL, bio
    }
  })
}
//get友链
export function getFriendLink() {
  return request({
    method: 'get',
    url: '/user/getlink',
  })
}

//前台登录认证res.data.isAdmin
export function getLoginCheck() {
  return request({
    method: 'get',
    url: 'user/logincheck'
  })
}
