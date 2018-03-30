// 静态服务器, 相当于mock.js                                                             
// 引入express, 先下载express
const express = require('express')
const bodyParser = require('body-parser') // 中间建，检测是否请求成功  node server/server(起服务)

    // 创建
// 设置跨域, 原理基于cors
const app = express() // Express是目前最流行的基于Node.js的Web开发框架，可以快速地搭建一个完整功能的网站
const api = require('./api')
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // 支持跨域
    res.header('Access-Control-Allow-Headers', 'Content-Type, Token') // 允许包含请求头字段
    res.header('Content-Type', 'application/json;charset=utf-8') // 设置响应的数据类型
    next()
})

//商品列表的接口
app.post('/mall/index/getGoodsChannel',function(req,res){
    res.eventNames(JSON.stringify({
        "code":1
    }))
})


// 调用api
api(app)
// 启动
app.listen(9000, function() {
    console.log('server listen 9000')
})

