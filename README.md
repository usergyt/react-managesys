前端react框架
 代码规范
基本规则
 每个文件只包含一个 React 组件
使用 JSX 语法
除非是从一个非 JSX 文件中初始化 app，否则不要使用 React.createElement
命名
扩展名: 使用 jsx 作为 React 组件的扩展名
文件名: 文件命名采用帕斯卡命名法，如：ReservationCard.jsx
引用名: 组件引用采用帕斯卡命名法，其实例采用驼峰式命名法
声明
 不要通过 displayName 来命名组件，通过引用来命名组件
对齐

引号
所有均使用单引号 ‘’

空格
在自闭和标签之前留一个空格
属性
属性名采用驼峰式命名法
括号
当组件跨行时，要用括号包裹 JSX 标签
标签
没有子组件的父组件使用自闭和标签
如果组件有多行属性，闭合标签应写在新的一行上
方法
不要对 React 组件的内置方法使用 underscore 前缀


钩子函数顺序
1.constructor
2.optional static methods
3.getChildContext
4.componentWillMount
5.componentDidMount
6.componentWillReceiveProps
7.shouldComponentUpdate
8.componentWillUpdate
9.componentDidUpdate
10.componentWillUnmount
11.clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
12.getter methods for render like getSelectReason() or getFooterContent()
13.Optional render methods like renderNavigation() or renderProfilePicture()
14.render

*项目中使用eslint语法校验，配置规则如下：

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
            

技术栈
*所有依赖都是最新版本
Webpack
安装webpack
Npm i webpack --save-dev
webpack.common.config.js:公共配置
webpack.config:生产配置
webpack.dev.config:开发环境配置
Bable
将开发的es6/es7编译成浏览器支持的es5
项目安装依赖
 npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
babel-core 提供api转换码
babel-loader
babel-preset-es2015
babel-preset-react 
babel-preset-stage-0
react
react-router-dom
redux
Axios
Nodejs
Es6
生产及开发
本地
1.本地开发采用热部署，执行webpack命令：npm run start 
2.开发时前端采用mock.js模拟数据接口
3.编译打包成静态文件命令：npm run duild
4.验证代码语法错误命令：npm run lint

生产
生产服务端采用nginx 部署，代理接口解决跨域
主要配置：
location / { 
          root D:/QianDuan/operationPlatform/trunk/operationPlatform-v1.0.0/app; 
           index index.html;        
     } 

  location ^~/FamilyBilling/billing/category/ {
          rewrite ^/FamilyBilling/billing/category/categoryList/(.*)$ /$1 break; 
           proxy_pass   http://localhost:8080; 

