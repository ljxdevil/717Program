// 创建一个index内容
import React, {Component} from 'react'
import './indexs.css'

import $http from '../../utils/http' // 引入去使用$http

import {ToastContainer} from 'react-toastify' 
import RouterWrapper from '../../components/routeWraper'
import {NavLink} from 'react-router-dom'

class Indexs extends Component{
    constructor(){
        super()
        this.toSearch = this.toSearch.bind(this)
    }
    toSearch(){
        let {history} = this.props;
        history.push('/index/search')
    }
    render(){
        let {routes} = this.props
        return <div className='index'>
            <ToastContainer></ToastContainer>
                {/* <header><input type="text" onFocus={this.toSearch}/></header> */}
            <div className='content'>
                <RouterWrapper routes={routes}></RouterWrapper>
            </div>
            <ul className='nav'>
                <li>
                    <NavLink to='/index/home' activeClassName='tab-active'>
                        <span className="iconfont icon-home"></span>
                        <span>首页</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/index/catagory' activeClassName='tab-active'>
                        <span className="iconfont icon-catagory"></span>
                        <span>分类</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/index/cart' activeClassName='tab-active'>
                        <span className="iconfont icon-cart"></span>
                        <span>购物车</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/index/mine' activeClassName='tab-active'>
                        <span className="iconfont icon-mine"></span>
                        <span>我的</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    }
    componentDidMount(){
        // $http.post("/server/test.json",{id:2})
        // .then(data=>{console.log(data)})
        // .catch(err=>{console.log(err)})
    }
}
export default Indexs