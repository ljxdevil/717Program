import React, {Component} from 'react'
import $http from '../../utils/http'
import './register.scss'
class Register extends Component{
    constructor(){
        super()
        this.toRegister = this.toRegister.bind(this)
    }
    render(){
        return <div id='register'>
            <header>注册717</header>
            <section>
                <p><input type="text" className='username' placeholder='请输入用户名' ref='username'/></p>
                <p><input type="password" className='password' ref='password' placeholder='请输入密码'/></p>
                <p><button onClick={this.toRegister}>注册</button></p>
            </section>
        </div>
    }
    
    // 在前端进行请求
    toRegister(){
        // 注册的时候需要获取username, password的值
        let {username, password} = this.refs
        $http.post('/user/register',{
            username: username.value,
            password: password.value
        })
        .then(res=>{
            // 判断如果注册成功，跳到登录页面
            if(res.success==1){
                this.props.history.push('/login')
            }
        })
    }
}

export default Register