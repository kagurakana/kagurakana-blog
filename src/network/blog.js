import { request } from './request'

export function postNewBlog(headPic, title, tags, desc, content) {
  return request({
    method: 'post',
    url: '/blog/postblog',
    data: {
      headPic, title, tags, desc, content
    }
  })
}

export function postUpdateBlog(id, headPic, title, tags, desc, content) {
  return request({
    method: 'post',
    url: '/blog/update',
    data: {
      id, headPic, title, tags, desc, content
    }
  })
}
export function getBlogList(tags, search) {
  return request({
    method: 'get',
    url: '/blog/getbloglist',
    params: {
      tags,
      search
    }
  })
}

export function getBlogDetail(id) {
  return request({
    method: 'get',
    url: '/blog/getblogdetail',
    params: {
      id
    }
  })
}

export function postDeleteBlog(id) {
  return request({
    method: "post",
    url: '/blog/delete',
    data: {
      id
    }
  })
}
