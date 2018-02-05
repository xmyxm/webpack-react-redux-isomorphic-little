//webpack.server.config.js
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const packageFilePath = path.join(__dirname, "../dist/server/")
const isProduct = false

// babel
let babelPluginsArr = [
    "transform-object-rest-spread",
    "transform-decorators-legacy",
    "transform-class-properties",
    "transform-async-to-generator",
    "transform-es2015-modules-commonjs"
];

module.exports = {
    // 告诉 webpack 打包的对象是 node 端的代码，这样一些原生模块webpack 就不会做处理
    target: 'node',  
    node: {
        __filename: true,
        __dirname: true
    },
    //一旦报错就停止打包
    bail: true, 
    entry: {
        index: ['./platforms/server/index.js']
    },
    output: {
        filename: '[name].js',
        path: packageFilePath,
        // vscode断点node端源码
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        //当你的libraryTarget值为commonjs2的时候，你的bundle最终会以module.exports导出整个bundle模块，这种情况大部分是在node环境下运行
        libraryTarget: 'commonjs2'
    },
    //vscode 中调试必备 inline-source-map
    devtool: isProduct ? 'hidden-source-map' : 'inline-source-map',
    module: {
        rules: [{
            test: /\.(es6|jsx|js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "react"
                    ],
                    "plugins": babelPluginsArr
                }
            }
        }, 
        {
            test: /\.css$/,
            use: {
                loader: 'ignore-loader'
            }
        },
        {
            test: /\.woff|ttf|woff2|eot|otf$/,
            use: {
                loader: 'ignore-loader'
            }
        }, 
        {
            test: /\.less$/,
            use: {
                loader: 'ignore-loader'
            }
        }, 
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: {
                loader: 'ignore-loader'
            }
        }]
    },
    resolve: {
        //别名设置,主要是为了配和webpack.ProvidePlugin设置全局插件;
        alias: {
            //绝对路径;
             actionpath: path.resolve(__dirname,'../src/redux/action'), 
             utilspath: path.resolve(__dirname,'../src/utils'),
             componentpath: path.resolve(__dirname,'../src/component'),
             stylepath: path.resolve(__dirname,'../src/style'),
             reduxpath: path.resolve(__dirname,'../src/redux')
        }
    },
    plugins: [
        // fix encoding/lib/iconv-loader.js warning
        new webpack.NormalModuleReplacementPlugin(
            /\/iconv-loader$/, 'node-noop'
        ),
        new webpack.DefinePlugin({
            BUILD_ENV: JSON.stringify("node")
        })
    ]
}





