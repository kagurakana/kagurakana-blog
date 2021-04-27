import { request } from "./request";

export function getUploadToken() {
  return request({
    method: "get",
    url: "/imgupdate/uptoken",
  });
}

export function getImageList(marker) {
  return request({
    method: "get",
    url: "/imgupdate/listimages",
    params: { marker },
  });
}
