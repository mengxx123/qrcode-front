import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Extension from '@/views/Extension'
import About from '@/views/About'

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/extension',
        component: Extension
    },
    {
        path: '/about',
        component: About
    }
]

export default new Router({
    mode: 'history',
    routes: routes
})
