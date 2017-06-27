// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into goods(id, name, price) values (0, ?, ?)',
    select: 'select name from goods'
  }
}
module.exports = sqlMap
/**
 * Created by Administrator on 2017/6/27.
 */
