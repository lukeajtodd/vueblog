import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'

Vue.use(Vuex)
Vue.use(VuexFire)

export default new Vuex.Store({
    mutations: VuexFire.mutations,
    state: {
        articles: []
    }
})