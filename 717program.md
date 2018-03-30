## 总体
    1、页面
     首页 分类列表页 搜索页 详情页 分类页 购物车 
     我的 ：登录 注册
     邮寄地址管理：添加 邮寄地址表
     订单管理页
## 1
    整体使用react,react-redux,react-router,redux-sage
    react 是单向数据流
    react配合webpack
## 2
    用npm run build 进行打包
    用npm run dev 起服务
## 3
    router路由的各种组件
    react-router创建内部路由配置对象
    路由：一级路由 二级路由
## 4
    父子传参
    父级将可回调的函数当做属性传给子级，然后子级直接调用函数从而和父级通信
## 5
    react-redux提供了connect(将组件和redux连接起来),provider (将store传给组件)
    组件通过dispatch发出action,store根据action的type属性调用对应的reducer并传入state和action
    reducer对state进行处理并返回一个新的state放入store
    connect监听到store发生变化，调用setState更新组件，此时组件的props也就跟着变化
## 6
    登录;
        1.前端进行请求然后获取值
        2.前端对证信息，登录成功后跳转首页
    注册;
        1.获取username 和passWord 判断是否注册成功
        2.重复的,不相符的不成功

    http;
        1.全路径：协议， 域名 端口 ，请求路径
        2.同源策略：协议相同， 域名相同， 端口号相同
## 7
    getCookie
    前后端分离的好处弊端
    $http ,ajax ;  get,post