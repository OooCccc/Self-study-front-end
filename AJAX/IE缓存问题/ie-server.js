// 1.引入express
const express = require("express");
// 2.创建对象
const app = express();
// 3.创建路由规则
app.get("/ie-server", (resquest, response) => {
  //设置响应头允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应体
  response.send("你好 ie!!!!!!!!!!!!!！淦");
});
//4.监听端口启动服务
app.listen(8000, () => {
  console.log("服务已经启动,8000端口监听中......");
});
