var express=require("express");
var router=express.Router();

var pool=require("../pool")


//查找所有的商品

router.get("/products",(req,res)=>{
   var sql="select * from products";

   pool.query(sql,(err,result)=>{
      if(err)throw err 
      res.send(result)
   })


})


















module.exports=router;