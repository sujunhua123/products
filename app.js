//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const session=require("express-session")
var user = require('./routes/user.js');
var index=require("./routes/index.js")
var products=require("./routes/products.js")
var details=require("./routes/details.js")
var carts=require("./routes/carts.js")
var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(session({
   secret:"随机字符串",
   cookie:{maxAge:60*1000*30},
   resave:false,
   saveUninitialized:true
}))

//使用路由器来管理路由
//把user路由器挂载到/user下
app.use('/user',user);
app.use('/index',index);
app.use("/products",products);
app.use("/details",details)
app.use("/carts",carts)
//把product路由器挂载到/product下
