import { request } from './request'


export function getUploadToken(){
  return request({
    method:'get',
    url:'/imgupdate/uptoken'
  })
}