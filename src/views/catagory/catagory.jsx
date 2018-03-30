import React, {Component} from 'react'
import $http from '../../utils/http'// 接口分类页

import './catagory.scss'
class Catagory extends Component{
     constructor(){
        super()
        this.state={
            activeIndex:0
        }
        this.toSearch = this.toSearch.bind(this)
    }
    toSearch(){
        let {history} = this.props;
        history.push('/index/search')
    }
    render(){
        let catList = ['家乡味道', '进口食品', '牛奶乳品', '休闲零食', '生鲜果蔬', '米面粮油', '调味调料', '酒水饮料']
        return <div id='catagory'>
           <header><input type="text" onFocus={this.toSearch}/></header> 
           <div className='left-side'>
                <ul>
                    {
                        catList.map((item, index)=>{
                            return <li className={this.state.activeIndex==index ? 'catagory-active':''} key={index} onClick={()=>{this.toggleActive(index)}}>{item}</li>
                        })
                    }
                </ul>
           </div>
           <div className='right-side'>4567890-98765</div>
        </div>
    }
    toggleActive(idx){
        // 分类页的接口
        $http.get('/mobile/Category/categorySon', {sonid:idx+1}).then((res)=>{
            console.log(res)
        })
        console.log(idx)
        this.setState({
            activeIndex:idx
        })
    }
}
export default Catagory