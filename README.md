---
title:前端react框架
---
# 前端react框架

## 代码规范

### 基本规则
- 每个文件只包含一个 React 组件
- 除非是从一个非 JSX 文件中初始化 app，否则不要使React.createElement
### 命名
- 扩展名: 使用 jsx 作为 React 组件的扩展名
- 文件名: 文件命名采用帕斯卡命名法，如：ReservationCard.jsx
- 引用名: 组件引用采用帕斯卡命名法，其实例采用驼峰式命名法
### 声明
- 不要通过 displayName 来命名组件，通过引用来命名组件
### 对齐
- 括号开始与结束标签对齐
### 引号
- 所有均使用单引号 ‘’

### 空格
- 在自闭和标签之前留一个空格
### 属性
- 属性名采用驼峰式命名法
### 括号
- 当组件跨行时，要用括号包裹 JSX 标签
### 标签
- 没有子组件的父组件使用自闭和标签
- 如果组件有多行属性，闭合标签应写在新的一行上
### 方法
- 不要对 React 组件的内置方法使用 underscore 前缀


### 钩子函数顺序
1. constructor
2. optional static methods
3. getChildContext
4. componentWillMount
5. componentDidMount
6. componentWillReceiveProps
7. shouldComponentUpdate
8. componentWillUpdate
9. componentDidUpdate
10. componentWillUnmount
11. clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
12. getter methods for render like getSelectReason() or getFooterContent()
13. Optional render methods like renderNavigation() or renderProfilePicture()
14. render

*项目中使用eslint语法校验，配置规则如下：
``` 
框架结构
│  .babelrc                          #babel配置文件
|   .eslint                            #语法校验
│  package.json                      #依赖配置
│  readme.md                       #项目介绍 
│  webpack.config.js                 #webpack生产配置文件
│  webpack.dev.config.js             #webpack开发配置文件
│  
├─dist
├─public         #公共资源文件
└─src                                #项目源码
    │  index.html                    #index.html模板
    │  index.js                      #入口文件
    │  
    ├─component                      #组建库
    │  └─Hello
    │          Hello.js
    │          
    ├─pages                          #页面目录
    │  ├─Counter
    │  │      Counter.js
    │  │      
    │  ├─Home
    │  │      Home.js
    │  │      
    │  ├─Page
    │  │  │  Page1.css                #页面样式
    │  │  │  Page1.js
    │  │  │  
    │  │  └─images                    #页面图片
    │  │          brickpsert.jpg
    │  │          
    │  └─UserInfo
    │          UserInfo.js
    │          
    ├─redux                    #redux 状态管理文件
    │  │  reducers.js
    │  │  store.js
    │  │  
    │  ├─actions
    │  │      counter.js
    │  │      userInfo.js
    │  │      
    │  ├─middleware
    │  │      promiseMiddleware.js
    │  │      
    │  └─reducers
    │          counter.js
    │          userInfo.js
    │          
    └─router                        #路由文件
            Bundle.js
            router.js
            
```
## 技术栈
*所有依赖都是最新版本
### Webpack
```
安装webpack
Npm i webpack --save-dev
webpack.common.config.js:公共配置
webpack.config:生产配置
webpack.dev.config:开发环境配置
```
### Bable
```
将开发的es6/es7编译成浏览器支持的es5
项目安装依赖
 npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
babel-core 提供api转换码
babel-loader
babel-preset-es2015
babel-preset-react 
babel-preset-stage-0
```
### React
```
安装react：
npm install --save react react-dom
```
### react-router-dom
```
安装react路由 和bundle-loader 路由按需加载
npm install --save react-router-dom
npm install bundle-loader --save-dev
使用方式：
import UserManage from 'bundle-loader?lazy&name=userManage!pages/UserManage'
```
### Redux
```
redux状态管理安装：
redux npm install --save redux
redux npm install --save react-redux
Actions: action告诉我们做如何的操作
Reducers:对不同action做出不同操作
Store :管理state的单一对象
```
### Axios
```
安装axios
npm install --save axios
Axios 功能点：
1.从浏览器中创建 XMLHttpRequests
2.从 node.js 创建 http 请求
3.支持 Promise API
4.拦截请求和响应
5.转换请求数据和响应数据
6.取消请求
7.自动转换 JSON 数据
8.客户端支持防御 XSRF
请求方式：
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```
### Nodejs
```
下载安装最新版即可。
 Node作为前端开发依赖环境，
 后期添加中间层处理请求响应。
```
### Es6
`
项目中使用es6语法特性，通过eslint配置禁止使用es5
`
## 生产及开发
### 本地
1. 本地开发采用热部署，执行webpack命令：npm run start 
2. 开发时前端采用mock.js模拟数据接口
3. 编译打包成静态文件命令：npm run duild
4. 验证代码语法错误命令：npm run lint

### 生产
```
生产服务端采用nginx 部署，代理接口解决跨域
主要配置：
location / { 
          root D:/QianDuan/operationPlatform/trunk/operationPlatform-v1.0.0/app; 
           index index.html;        
     } 

  location ^~/FamilyBilling/billing/category/ {
          rewrite ^/FamilyBilling/billing/category/categoryList/(.*)$ /$1 break; 
           proxy_pass   http://localhost:8080; 
```
## 后续添加
- node服务端，添加server和client目录 ,同构方式处理服务端渲染.
- 离线缓存，对于不经常修改的静态资源缓存到客户端