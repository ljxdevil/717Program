import React, {Component} from 'react'
import Swiper from 'Swiper'// 下载后，使用

import 'swiper/dist/css/swiper.css'
console.log(Swiper)

let img1 = require('../../static/img/1.png')// 这么引入的好处：webpack会对图片打包
class SwiperComponent extends Component{
    render(){
        return <div className='swiper-container' ref='scDom'>
            <div className='swiper-wrapper'>
                <div className='swiper-slide'><img src={img1} alt=""/></div>
                <div className='swiper-slide'><img src={require('../../static/img/2.png')} alt=""/></div>
                <div className='swiper-slide'><img src={require('../../static/img/3.png')} alt=""/></div>
                <div className='swiper-slide'><img src={require('../../static/img/4.png')} alt=""/></div>
                <div className='swiper-slide'><img src={require('../../static/img/5.png')} alt=""/></div>
            </div>

        </div>
    }
    componentDidMount (){
        new Swiper(this.refs.scDom, {
            autoplay:true,
            loop:true
        })
    }
}

export default SwiperComponent// 在home页去引入该插件