let baseConfig = require('./webpack.base')
const webpack = require('webpack')// 引webpack
let UglifyPlugin = webpack.optimize.UglifyJsPlugin;
let DefinePlugin = webpack.DefinePlugin;

baseConfig.plugins.push(new UglifyPlugin())
baseConfig.plugins.push(new DefinePlugin({
    "process":'"production"'
}))
module.exports={
    ...baseConfig,
}