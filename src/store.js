import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import firebase from 'firebase'

Vue.use(Vuex)
Vue.use(VuexFire)

var config = {
    apiKey: "AIzaSyBZr-V2fVbOk__KwvTKrL-wnXyK2PQ6YEw",
    authDomain: "vueblog-f5f5d.firebaseapp.com",
    databaseURL: "https://vueblog-f5f5d.firebaseio.com",
    storageBucket: "vueblog-f5f5d.appspot.com",
    messagingSenderId: "360980777620"
  };

firebase.initializeApp(config);

// Export db for use in main
export const db = firebase.database()

// Export store for use in main
export const store = new Vuex.Store({
    state: {
        articles: []
    },
    mutations: VuexFire.mutations,
    getters: {
      articles: function(state) { return state.articles }
    }
})