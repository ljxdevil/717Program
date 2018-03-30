const jwt = require('jsonwebtoken') // node的第三方包，koken字段加密
const http = require('http') // 请求远端的数据
const querystring = require('querystring')
const fs = require('fs') // 文件的I/O是由标准的POSIX函数封装二成的。需要使用require(‘fs’)访问这个模块,这册页，把后台接受到的数据放在一个文件里
const Mock = require('mockjs')

// 封装
function queryApi(url, methods, params){
   return new Promise((resolve, reject)=>{
       let data = ''
        // 商品列表的接口， 传数据给服务器
        const options = { // 复制过来的配置项
            hostname: 'www.lb717.com', // 域名
            port: 80, // 默认的都是80
            path: url,
            method: methods,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }
        };

        let request = http.request(options, (response) => {
            response.setEncoding('utf8');
            // 接收数据
            response.on('data', (chunk) => {
                console.log(`响应主体: ${chunk}`); // 请求网站上的数据
                data += chunk
            });
            response.on('end', () => {
                resolve(JSON.stringify(data))
            });
        })
        if(methods.toLowerCase()=='post'){
            request.write(querystring.stringify(params)) // 传参
        }
        request.end()
    })
}

module.exports = function (app) {

    // 商品列表的接口， 传数据给服务器
    // const options = { // 复制过来的配置项
    //     hostname: 'www.lb717.com', // 域名
    //     port: 80, // 默认的都是80
    //     path: '/mall/index/getGoodsChannel',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     }
    // };
   
    app.post('/mall/index/getGoodsChannel', function (req, res) {
        // let data = '';
        // let request = http.request(options, (response) => {
        //     response.setEncoding('utf8');
        //     // 接收数据
        //     response.on('data', (chunk) => {
        //         console.log(`响应主体: ${chunk}`); // 请求网站上的数据
        //         data += chunk
        //     });
        //     response.on('end', () => {
        //         res.end(JSON.stringify(data))
        //     });
        // })
        // request.write(querystring.stringify(req.body)) // 传参
        // request.end()

        queryApi('/mall/index/getGoodsChannel', 'post', req.body)
        .then((data)=>{
            res.end(data)
        })
    })
    app.post('/user/register', function (req, res) {
        console.log(req.body) // 新数据
        let user = fs.readFileSync('user.json', { encoding: 'utf-8' }) // 怎么读取文件
        user = JSON.parse(user);
        user.push(req.body); // 把新数据放到user.json，前提是此文件有个空[]
        console.log(user) // [],接收新接收到的数据数据
        fs.writeFile('user.json', JSON.stringify(user), function () {
            res.end(JSON.stringify({
                "success": 1,
                "info": "register success"
            }))
        })
    })


    // 登录接口
    app.post('/user/login', function (req, res) {
        let user = fs.readFileSync('user.json', { encoding: 'utf-8' });
        user = JSON.parse(user); // 把字符串转换为对象， user:字符串
        let login = req.body;
        let resInfo = {
            success: 0,
            info: "用户名或密码错误",
            token: ''
        }

        user.forEach(usr => {
            if (usr.username == login.username && usr.password == login.password) {
                resInfo.success = 1;
                resInfo.info = "login success"
            }
        });

        // 判断成功加密
        if (resInfo.success == 1) {
            resInfo.token = jwt.sign(login, '9826') // login加密的对象， 9826，密码, 
        }
        res.end(JSON.stringify(resInfo))
    })

    // 错误中间键
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    // 添加购物车接口
    app.post('/user/Cart/addCart', function (req, res) {
        console.log(req.body)
        jwt.verify(req.body.token, '9826', (err, decoded) => {// 解密
            if (err) {
                res.end(err)
            } else {
                let cartInfo = JSON.parse(fs.readFileSync(__dirname + '/cart_info.json', { encoding: 'utf-8' }))
                if (cartInfo[decoded.username]) {
                    cartInfo[decoded.username].push(req.body.goods_info)
                } else {
                    cartInfo[decoded.username] = [req.body.goods_info]
                }
                console.log(cartInfo)
                fs.writeFile(__dirname + '/cart_info.json', JSON.stringify(cartInfo), function () {// 写入成功时
                    res.end('1')// 向后端响应一个信息
                })
            }

        })
        res.end("1")// 只能是字符串,添加购物车返回1
    })

    // 分类页接口
    app.get('/mobile/Category/categorySon', function (req, res) {
        console.log(req.query)
        res.json(data)
        
    })
}