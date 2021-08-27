import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import Vue from 'vue'
import VueRouter from 'vue-router'

import vuetify from './plugins/vuetify'

import Home from './components/Home'

const routes = [
    { path: '/', component: Home, name: 'home' }
]

const router = new VueRouter({
    mode: 'history',
    base: '/app/',
    routes
})

Vue.use(VueRouter)

new Vue({
    router,
    vuetify
}).$mount('#app')