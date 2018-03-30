
import Detail from '../views/detail'
import Login from '../views/login'
import Register from '../views/register'

import Indexs from '../views/indexs'

import Home from '../views/home'
import Search from '../views/search'
import Catagory from '../views/catagory'
import Cart from '../views/cart'
import Mine from '../views/mine'
import Result from '../views/result'
let router = {
    routes: [{
            path: '/detail',
            component: Detail
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/',
            component: Indexs,
            children: [{
                    path: '/index/home',
                    component: Home
                },
                {
                    path: '/index/search',
                    component: Search
                },
                {
                    path: '/index/catagory',
                    component: Catagory
                },
                {
                    path: '/index/cart',
                    component: Cart,
                    authorization:true
                },
                {
                    path: '/index/mine',
                    component: Mine,
                    authorization:true
                },
                {
                    path: '/index/result',
                    component: Result
                }
            ]
        }
    ]
}
export default router