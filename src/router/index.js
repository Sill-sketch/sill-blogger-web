import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// #解决 Avoided redundant navigation to current location 错误、路由重复
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

import Home from '@/views/Home'
import Article from '@/views/Article'

export default new Router({
  // mode: 'history', // 移除 #
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/article/:articleId.html',
      component: Article,
      props: true
    }
  ]
})
