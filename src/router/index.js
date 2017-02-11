import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Article from 'components/Article'
import Archive from 'components/Archive'
import Welcome from 'components/Welcome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Welcome', component: Welcome },
    { path: '/archive', name: 'Archive', component: Archive, props: true },
    { path: '/:article_id', name: 'Article', component: Article, props: true }
  ]
})
