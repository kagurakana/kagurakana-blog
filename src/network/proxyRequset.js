import { proxyRequest } from "./request"



export function getBangumi(pn,sn) {
  return proxyRequest({
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
  return proxyRequest({
    method: 'get',
    url: "/qqinfo",
    params: {
      uins: qqNum,
      g_tk:'1518561325'
    }
  })
}

export function getGitHubCommits() {
  return proxyRequest({
    withCredentials: false,
    method: 'get',
    url: '/commits',
  })
}
