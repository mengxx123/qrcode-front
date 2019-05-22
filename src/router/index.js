import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import V1 from '@/views/V1'
import V2 from '@/views/V2'
import Extension from '@/views/Extension'

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/v1',
        component: V1
    },
    {
        path: '/v2',
        component: V2
    },
    {
        path: '/extension',
        component: Extension
    },
]

export default new Router({
    mode: 'history',
    routes: routes
})
