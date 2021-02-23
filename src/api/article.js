import request from '@/utils/request.js'

export function list(params) {
  return request({
    url: '/article/list',
    method: 'get',
    params
  })
}

export function detail(params) {
  return request({
    url: '/article/detail',
    method: 'get',
    params
  })
}
