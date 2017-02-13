import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VuexFire from 'vuexfire'
import router from './router'
import { db, store } from './store'

new Vue({
  el: '#app',
  computed: Vuex.mapGetters([
    'articles'
  ]),
  firebase: {
    articles: db.ref('/articles')
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})
