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


// export function getQqInfo(qqNum) {
//   return outRequest({
//     method: 'get',
//     url: "http://users.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg",
//     data: {
//       uins: qqNum
//     }
//   })
// }