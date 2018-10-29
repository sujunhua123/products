const express=require("express")
var router=express.Router();

var pool=require("../pool")

//通过pid查询数据库的 数据

router.get("/details",(req,res)=>{
 var   pid=req.query.pid
  var sql="select * from products where pid=?"
  pool.query(sql,[pid],(err,result)=>{
   if(err)throw err;
   res.send(result);

  })

})









module.exports=router;