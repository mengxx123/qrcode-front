import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Extension from '@/views/Extension'
import About from '@/views/About'
import Recognition from '@/views/Recognition'

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
        path: '/recognition',
        component: Recognition
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
