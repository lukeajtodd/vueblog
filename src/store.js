import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: [
            { id: 0, title: 'TITLE 1', content: 'lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur.' },
            { id: 1, title: 'TITLE 2', content: 'lorem ipsum dolor sit amet consecteur.' },
            { id: 2, title: 'TITLE 3', content: 'lorem ipsum dolor sit amet consecteur.' },
            { id: 3, title: 'TITLE 4', content: 'lorem ipsum dolor sit amet consecteur.' },
            { id: 4, title: 'TITLE 5', content: 'lorem ipsum dolor sit amet consecteur.' },
        ]
    }
})