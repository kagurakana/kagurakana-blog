import { request } from './request'

export function addComment(blogId, username, email,resaveEmail,URL, comment, replyId,replyCommentId, replyUsername , isRegisted) {
  return request({
    url: '/comment/new',
    method: 'post',
    data: {
      blogId, username, email,resaveEmail,URL, comment, replyId,replyCommentId, replyUsername , isRegisted
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
//通过审核和删除评论
export function controlComment(passlist, deleteList) {
  return request({
    method: 'post',
    url: '/comment/controlComment',
    data: {
      passlist, deleteList
    }
  })
}