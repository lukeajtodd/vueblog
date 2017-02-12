import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import firebase from 'firebase'
import vuefire from 'vuefire'
import vuexfire from 'vuexfire'
import router from './router'
import store from './store'

Vue.use(vuexfire)

var config = {
    apiKey: "AIzaSyBZr-V2fVbOk__KwvTKrL-wnXyK2PQ6YEw",
    authDomain: "vueblog-f5f5d.firebaseapp.com",
    databaseURL: "https://vueblog-f5f5d.firebaseio.com",
    storageBucket: "vueblog-f5f5d.appspot.com",
    messagingSenderId: "360980777620"
  };
firebase.initializeApp(config);

var articlesRef = firebase.database().ref('articles')

new Vue({
  el: '#app',
  firebase: {
    articles: articlesRef
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})
