console.log(process.env.NODE_ENV)
let path = require('path')
let  dir = process.cwd()// 获取当前程序运行的目录
console.log(dir)
// dev 起服务，不进行压缩
// build 不用起服务，要进行压缩代码分离
// module.exports=

// NODE_ENV:进行区分两个服务，在命令行进行：set NODE_ENV=development && webpack 回车用来区分环境变量， 只是node的环境变量
let baseConfig= {// common.js规范
    entry:{// 整个项目的入口文件
        "bundle":dir+'/src/main'
    },
    output:{
        "filename":"[name].js",
        "path":dir+"/dist"// 输出，放在dist目录下
    },
    module:{
        rules:[// 规则
            {
                test:/\.(js|jsx)$/,// 用babelrc去处理， 引一下文件
                use:['babel-loader']// 有依赖，需要babelrc的一些插件( "env"(es6),"react"(react的))
            },
            {
                test:/\.(css|sass|scss)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/.(eot|svg|ttf|woff)$/,
                use:['url-loader']
            },
            {
                test:/.(jpg|png|gif|jpeg)$/,
                use:['url-loader']
            }
        ]
    },
    plugins:[],
    resolve:{
        extensions:['.js', '.jsx']
    }
}

// 抛出
module.exports = baseConfig  
