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
    url: '/blog/postblog',
    params: {
      id
    }
  })
}