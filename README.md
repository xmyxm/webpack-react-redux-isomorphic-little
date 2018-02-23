# webpack-react-redux-isomorphic-little
react同构应用
基于react的单页应用脚手架

依赖主要组件如下：

react 16.x

react-router 4.x

redux 3.x

react-redux 5.x


说明：

事例为一个单页同构博客项目


特点：

1.基本跟随使用目前最新的react全家桶

2.基于node端渲染，方便SEO

3.首屏渲染速度更快，解决首屏白屏体验问题

3.项目功能简单完整，是一个简单的脚手架，可以改写为自己的项目，非常适合新手学习，可作为react入门demo


使用步骤：

git clone 本项目

运行本项目依次在三个命令窗口依次执行下面三个命令即可：

1. npm run startweb web端代码打包并启动webpack-dev-server服务

2. npm run buildserver server端代码打包

3. npm run startserver 启动node端服务


打包本项目：

直接执行 gulp 命令


说明：

1.此项目 线上访问地址(单页应用，因为非node环境所以非同构，部署于iis服务器) http://qqweb.top/m/index.html

2.little 版本相比较非 little 版本 会在node端直接调用 api 的function 而省去了之前在 node 端发送 127.0.0.1 的网络消耗，性能更好


关于作者
  var info = {
    name:"blog",
    site : "http://qqweb.top/"
  }
