// 引用base
const webpack = require('webpack')
let baseConfig = require('./webpack.base')
let DefinePlugin = webpack.DefinePlugin;
baseConfig.plugins.push(new DefinePlugin({
    "process.env":'"development "'
}))
module.exports={
    ...baseConfig,
    devServer:{
        historyApiFallback: true, 
        inline:true,
        open:true,
        port:3000,
        noInfo: true// 去掉大量的信息
    },
    devtool:"eval-source-map"// 找bg用的，可以快速的找到错误
}