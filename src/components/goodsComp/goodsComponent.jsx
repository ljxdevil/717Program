// 创建商品组建
import React, {Component} from 'react'
import $http from '../../utils/http'
import Lazyload from 'react-lazyload'
import {getCookie} from '../../utils/utils'
import {ToastContainer, toast} from 'react-toastify' 
// import {connect} from 'react-redux'
class Placeholder extends Component{
  
    render(){
        return <img src={require('../../static/img/1.png')} alt=""/>
    }
}
class GoodsItem extends Component{
      constructor(){
        super()
        this.addCart=this.addCart.bind(this)
    }
    render(){
         // 进行数据渲染
        let {data} = this.props
        return <dl className='goods-item' onClick={()=>{this.toDetail(data.goods_id)}}>
            <dt><Lazyload height={'100%'} overflow once placeholder={<Placeholder></Placeholder>} debounce={200}><img src={'http://www.lb717.com'+data.obj_data} alt=""/></Lazyload></dt>
            <dd>
                {/*debounce={200} 延迟时间  */}
                {/*描述信息  */}
                <p className='goods-detail'>{data.goods_name}</p>
                <p>
                    <span className='goods-price'>{data.discount_price}</span>
                    <span onClick={this.addCart} className='iconfont icon-cart'></span>
                </p>
                
            </dd>
        </dl>
    } 

    // post 请求
    addCart(e){
        e.stopPropagation()// 阻止冒泡
        console.log(getCookie('token'))
        let {data} = this.props;

        // 判断是否有token值
        if(getCookie('token')){
            console.log(getCookie('token'))
             $http.post('/user/Cart/addCart', {// 请求数据，连接接口
                goods_id:data.goods_id,
                goods_info:data,
                token:getCookie('token')// 调用，传给对应的值，
            })
            .then((res)=>{
                console.log(res)// 返回 
                // 登录超时返回信息
                if(res==1){// 
                    toast.success("购物车添加成功",{
                        position:toast.POSITION.TOP_CENTER
                    })
                }else{
                    toast.warn(res.info,{// 失败时
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:2000,
                        className:"text"
                    })
                    let {history, location} = this.props
                    history.push('/login', {
                        from:location.pathname
                        //from:'/index/home'
                    })
                }
                
            })
        }else{// 没有就跳转到首页
            let {history, location} = this.props
            history.push('/login', {
                from:location.pathname
                 //from:'/index/home'
            })
        }
    }
    toDetail(goods_id){
        this.props.history.push('/detail?goods_id'+goods_id, {// 跳转到详情页
            state:goods_id
        })  
    }
}
export default GoodsItem