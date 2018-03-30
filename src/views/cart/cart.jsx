import React, {Component} from 'react'
import mapStateToProps from './state'
import {connect} from 'react-redux'
import './cart.scss'
class Cart extends Component{
    render(){
        return <div id='cart'>
            购物车
        </div>
    }

    // 验证数据有没有挂在上，获取到
    componentDidMount(){
        console.log(this.props)
    }

}
export default connect(mapStateToProps)(Cart)