import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: [
            { id: 0,
                title: 'I Am The Title',
                content: [
                    'lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur.'
                ] },
            { id: 1,
                title: 'Wordpress Plugins',
                content: [
                    'There are occasions when you need to manually create multiple Posts to see how they look with your chosen WP Theme. This plugin assists in auto generating placeholder content instead of you doing so manually. Simply follow the easy steps below to create that dummy content for your website. Please note that you should not use this for actual content of a live website.',
                    'There are occasions when you need to manually create multiple Posts to see how they look with your chosen WP Theme. This plugin assists in auto generating placeholder content instead of you doing so manually. Simply follow the easy steps below to create that dummy content for your website. Please note that you should not use this for actual content of a live website.',
                    'There are occasions when you need to manually create multiple Posts to see how they look with your chosen WP Theme. This plugin assists in auto generating placeholder content instead of you doing so manually. Simply follow the easy steps below to create that dummy content for your website. Please note that you should not use this for actual content of a live website.'
                ] },
            { id: 2,
                title: 'My Story',
                content: [
                    'lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur.'
                ] },
            { id: 3,
                title: 'TITLE 4',
                content: [
                    'lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur.'
                ] },
            { id: 4,
                title: 'TITLE 5',
                content: [
                    'lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur. lorem ipsum dolor sit amet consecteur.'
                ] },
        ]
    }
})