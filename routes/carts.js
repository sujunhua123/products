const express=require("express")
var router=express.Router();
var pool=require("../pool")


/*通过传过来的pid查询数据库carts有没有该商品,有就num+1 没有就创建*/

router.get("/getCarts",(req,res)=>{
    var pid = parseInt(req.query.pid);
      var title = req.query.title;
        var img_url= req.query.img_url;
        var price = req.query.price;
        var sum=req.query.sum;
        var sql = `SELECT id FROM carts WHERE pid=?`;
  if(req.session.uid==null){
      res.send({code:0,msg:"insert  fail"})
  }else{
        pool.query(sql,[pid],(err,result)=>{
            if(err) throw err;
            if(result.length==0){
                var sql = `INSERT INTO carts VALUES(?,null,?,?,?,1,?)`;
                pool.query(sql,[pid,img_url,title,price,sum],(err,result)=>{
                    if(err) throw err;
                    res.send({code:1,msg:'insert success'});
                })
          }else{
                var sql = `UPDATE carts SET num=num+1 WHERE pid=?`;
                pool.query(sql,[pid],(err,result)=>{
                    if(err) throw err;
                    res.send({code:1,msg:'insert success'});
                })
            }
        })
			
       }
    })


    /*查询数据库购物车是否有商品然后反馈数据*/

    router.get("/cartsList",(req,res)=>{
   var sql="select * from carts"
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({ok:0});
        }else{
           res.send(result); 
        }
    })


    })
    
/*增加carts的num和减少num*/
    router.get("/addcartsList",(req,res)=>{
        var pid=req.query.pid
        var sql=`update carts set num=num+1,sum=num*price where pid=?`;
      pool.query(sql,[pid],(err,result)=>{
              var sql = `SELECT num FROM carts WHERE pid=?`
        pool.query(sql,[pid],(err,result)=>{
             if(err)throw err;
             res.send(result)
        })
      })
      
     })

     router.get("/lesscartsList",(req,res)=>{
        var pid=req.query.pid
        var sql=`update carts set num=num-1,sum=num*price where pid=?`;
      pool.query(sql,[pid],(err,result)=>{
              var sql = `SELECT num FROM carts WHERE pid=?`
        pool.query(sql,[pid],(err,result)=>{
             if(err)throw err;
             res.send(result)
        })
      })
      
      })  
/*删除数据库carts中一个商品*/

router.get("/deleteCart",(req,res)=>{
  var pid=req.query.pid
  var sql=`delete from carts where pid=?`;
  pool.query(sql,[pid],(err,result)=>{
    if(err)throw err;
    res.send(result);

  })

})

/*删除数据库表中的所有行数*/

router.get("/deleteAll",(req,res)=>{
   var sql="TRUNCATE TABLE carts"
  pool.query(sql,(err,result)=>{
   if(err)throw err;
   res.send(result);

  }) 

})



















module.exports=router;