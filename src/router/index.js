import {createRouter, createWebHistory} from 'vue-router'

// import component layout
import DefaultLayout from "../layout/default-layout/DefaultLayout";
import NoLayout from "../layout/no-layout/NoLayout.vue"

// function lazy load view
function loadView(view) {
    let folder = '';
    for (let i = 0; i < view.length; i++) {
        if (view[i] === view[i].toUpperCase()
            && view[i] !== view[i].toLowerCase() && i > 0) {
            folder += `-${view[i].toLowerCase()}`
        } else {
            folder += view[i].toLowerCase()
        }
    }
    return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${folder}/${view}Component.vue`)
}


const routes = [
    {
        path: '/admin',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: loadView('Home'),
            },
        ],
    },
    {
        path: '/',
        component: NoLayout,
        children:
            [
                {
                    path: '/login',
                    name: 'login',
                    component: loadView('Login')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: loadView('Register')
                },
                {
                    path: '/forgot-password',
                    name: 'forgot-password',
                    component: loadView('ForgotPassword')
                },
            ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'page-not-found',
        component: loadView('PageNotFound')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
