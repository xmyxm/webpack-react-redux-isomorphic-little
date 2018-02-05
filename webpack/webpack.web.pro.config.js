"use strict";
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let config=require('./webpack.web.base.config.js');

config.plugins = config.plugins||[];
config.plugins.push(
	//css 文件抽离设置 如为dev 环境 disable必须为 true 才会把 css 打为内联样式来实现热刷新，若线上环境必须disable必须为false才会单独抽离出css文件
  //allChunks: true;时指定从所有模块中抽取CSS输出至单独CSS文件，包括异步引入的额外模块；此插件默认是只抽取初始模块内引入的CSS
	new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
);
// 线上打包启用代码压缩工具
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    // 最紧凑的输出
    beautify: false,
    // 删除所有的注释
    comments: false,
    compress: {
      // 在UglifyJs删除没有用到的代码时不输出警告  
      warnings: false,
      // 删除所有的 `console` 语句
      // 还可以兼容ie浏览器
      drop_console: true,
      // 内嵌定义了但是只用到一次的变量
      collapse_vars: true,
      // 提取出出现多次但是没有定义成变量去引用的静态值
      reduce_vars: true,
    }
}));

config.plugins.push(
  //允许你创建一个在编译时可以配置的全局常量，只能在被打包的文件中读取到这个全局变量
  new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('production')
      },
      BUILD_ENV: JSON.stringify("web")
  })
);
//source-map的打包可以告诉我们错误源自源码的具体的位置,devtool来选定生成的source-map的详细程度
//config.devtool = 'source-map';//
config.devtool = 'cheap-module-source-map';//生成一个没有列信息（column-mappings）的SourceMaps文件，同时 loader 的 sourcemap 也被简化为只包含对应行的。
config.output.publicPath = 'http://qqweb.top/m/';//上线配置文件公共路径直接替换为线上域名
config.output.chunkFilename = 'js/[name]-[chunkhash:8].js';//上线文件打上hash
module.exports = config;

































