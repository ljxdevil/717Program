import React, {Component} from 'react'
import $http from '../../utils/http'
import {Link} from 'react-router-dom'
import './login.scss'
class Login extends Component{
    constructor(){
        super()
        this.toLogin = this.toLogin.bind(this)
    }
    render(){
        return <div id='login'>
            <header>登录</header>
            <p><Link to='/register' style={{float:"right", padding:"0 .02rem", color:"red"}}>注册</Link> </p>
            <section>
                <p><input type="text" placeholder='请输入用户名' className='username' ref='username'/></p>
                <p><input type="password" placeholder='请输入你的密码' className='password' ref='password'/></p>
                <button onClick={this.toLogin}>登录</button>
            </section>
        </div>
    }

     // 在前端进行请求
     toLogin(){
         // 获取到值
        let {username, password} = this.refs
        
        $http.post('/user/login',{
            username: username.value,
            password: password.value
        })
        .then(res=>{
           if(res.success==1){
                document.cookie = "token="+res.token// 前端获取, 登录成功后默认跳转到首页

                let from = this.props.location.state ? this.props.location.state.from || 'index/home':'index.home'
               this.props.history.push(from)
                  //this.props.history.push('/index/home')
           }else{
               alert('登录错误')
           }
        })
     }
}

export default Login