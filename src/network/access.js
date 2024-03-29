import { request } from "./request";
export function postHello(timeStamp, refer = "", ua, platform, loadTime, pv) {
  return request({
    method: "post",
    url: "/access/hello",
    data: { timeStamp, refer, ua, platform, loadTime, pv },
  });
}

export function getAccessData(timeSpan) {
  return request({
    method: "get",
    url: "/access/get-access",
    params: timeSpan,
  });
}

export function getServerMonitorData() {
  return request({
    method: "get",
    url: "/access/get-server-monitor-data",
  });
}
