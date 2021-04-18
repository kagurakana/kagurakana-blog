import { request } from "./request";
export function postHello(timeStamp, refer = "", ua, platform, loadTime, pv) {
  return request({
    method: "post",
    url: "/access/hello",
    data: { timeStamp, refer, ua, platform, loadTime, pv },
  });
}
