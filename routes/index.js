var express=require("express");
var router=express.Router();

var pool=require("../pool")

//查询首页商品的数据

router.get("/",(req,res)=>{
   var sql="select * from index_products"    
 pool.query(sql,(err,result)=>{
    if(err)throw err;
    //res.send(result);
    res.writeHeader(200,{
        "Access-Control-Allow-Origin":"*"
      });
      res.write(JSON.stringify(result));
      res.end();
 })
})

router.get("/carousel",(req,res)=>{
 var sql="select * from index_carousel"
 pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.writeHeader(200,{
      "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result));
    res.end();  

 }) 
})




//查询销售榜的数据


router.get("/saleslist",(req,res)=>{
  var sql="select * from sales_list"
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.writeHeader(200,{
     "Access-Control-Allow-Origin":"*"
   });
   res.write(JSON.stringify(result));
   res.end();  
  })
 
 })





module.exports=router;