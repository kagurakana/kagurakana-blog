import { outRequest } from "./request"



export function getBangumi(pn,sn) {
  return outRequest({
    withCredentials: true,
    method: 'get',
    url: '/bangumi',
    params:{
      pn,
      sn,
      type:1,
      follow_status:0,
      vmid:14076737
    }
  })
}


export function getqqInfo(qqNum) {
  return outRequest({
    method: 'get',
    url: "/qqinfo",
    params: {
      uins: qqNum,
      g_tk:'1518561325'
    }
  })
}