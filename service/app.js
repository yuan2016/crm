/**
 * Created by Administrator on 2017/6/27.
 */
// node 后端服务器入口
const userApi = require('./api/userApi')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 注册api路由
app.use('/api/user', userApi)

// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
