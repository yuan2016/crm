/**
 * Created by Administrator on 2017/6/27.
 */
var models = require('../db/db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../db/sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  console.log(ret)
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 增加用户接口
router.post('/addUser', (req, res) => {
  var add = $sql.user.add
  var select = $sql.user.select
  var params = req.body
  console.log(params)
  conn.query(add, [params.name, params.price])
  conn.query(select, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router
