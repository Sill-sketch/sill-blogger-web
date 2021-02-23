import axios from 'axios'

import settings from '@/settings'

import { Message } from 'view-design'

const http = axios.create({
  baseURL: 'http://localhost:9528/dev-api/',
  timeout: settings.timeout // 请求超时
})

// request 拦截器
http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response 拦截器
http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    Message.error(error.message)
    return Promise.reject(error)
  }
)

export default http
