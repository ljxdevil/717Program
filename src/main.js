import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store'
console.log(process.env)

import router from './router/router.config'

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import RouterWraper from './components/routeWraper'

import fontset from './utils/fontset'
import './static/css/reset.css'
import './static/font/iconfont.css'
import './static/css/goodsItem.scss'
import './static/css/common.css'

ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
                        <Switch>
                                <Redirect exact from= '/' to='/index/home'></Redirect>
                                <RouterWraper routes={router.routes}></RouterWraper>
                        </Switch>
                </BrowserRouter>
        </Provider>,
document.querySelector('#root'))