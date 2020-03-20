import { outRequest } from "./request"

export function getQqInfo(qqNum) {
  return outRequest({
    method: 'get',
    url: "http://users.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg",
    data: {
      uins: qqNum
    }
  })
}