import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Article from 'components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/:article_id', name: 'Article', component: Article, props: true }
  ]
})
