import { request } from './request'

export function addComment(blogId, username, email, comment, replyId, isRegisted) {
  return request({
    url: '/comment/new',
    method: 'post',
    data: {
      blogId, username, email, comment, replyId, isRegisted
    }
  })
}

export function getCommentList(id) {
  return request({
    url: '/comment/getlist',
    method: 'get',
    params: {
      id
    }
  })
}