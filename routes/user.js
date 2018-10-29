const express=require("express");
var router=express.Router();

//引入连接池
var pool=require("../pool")

//获取数据库用户信息
router.get('/userlist',(req,res)=>{
var sql="select * from user";
pool.query(sql,(err,result)=>{
  if(err)throw error;
    res.send(result)
  })
})


//注册用户
router.post('/register',(req,res)=>{
 /* req.on("data",(data)=>{
    console.log(data.toString());
  })  */


   var $uname=req.body.uname;
   console.log(req.body);
    if(!$uname){ 
       res.send('用户名不存在');
       return;
    } 
var $upwd=req.body.upwd;
if(!$upwd){
    res.send('用户密码不存在');
    return;
}

var $email=req.body.email;
if(!$email){
 res.send("没有获取到用户邮箱")
   return;
}

var $phone=req.body.phone;
if(!$phone){
  res.send("没有获取到用户手机号码")
  return;
} 
var  sql="insert into user values(NULL,?,?,?,?)";
    pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
        if(err){
         throw error;

        }
         res.send("注册成功!");
    })
});

//登录页面
router.post("/login",(req,res)=>{
  var {uname,upwd}=req.query; 
  if(!uname){
        res.send("用户名不能为空");
      return;
  }
  if(!upwd){
    res.send("密码不能为空");
  return;
  }
  var sql="select * from user where uname=? and upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if (err) throw err
    console.log(result)
    if(result.length>0){
      req.session.uid=result[0].uid;
        res.send({ok:1, msg:"登录成功"})
    }else{
    res.send({ok:0, msg:"用户名或密码错误"});

    }


  })

}) 



router.get("/islogin",(req,res)=>{
  if(req.session.uid==null)
    res.send({ok:0});
  else{
    var sql="select * from user where uid=?";
    pool.query(sql,[req.session.uid],(err,result)=>{
      res.send({ok:1,uname:result[0].uname});
    })
  }  
})

router.get("/outlogin",(req,res)=>{
   delete req.session.uid;
   res.send("注销成功！");
})

//检验用户名是已经被占用
router.get("/checkUname",(req,res)=>{
  var $uname=req.query.uname;
  if(!$uname){
     res.send({ok:0,msg:"用户名不能为空！"})
     return;
  }
    var  sql="select * from user where uname=?";
    pool.query(sql,[$uname],(err,result)=>{
      if(result.length>0){
          res.send({ok:1,msg:"用户名已存在"}) // 用户名已存在！

      }else{
         res.send({ok:2,msg:"用户名可以注册！"})
      }

    });

})




module.exports=router;