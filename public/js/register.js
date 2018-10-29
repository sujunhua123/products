
/*function uname_focus(){
   $("showUname").innerHTML="3-12位的数字、字母和下划线的任意组合"
}

function upwd_focus(){
   $("showUpwd").innerHTML="8-16位置的数字、字母和下划线的任意组合"
}
function upwd_blur(){
    var upwd=$("upwd").value;
    if(upwd==""){
        $("showUpwd").innerHTML="密码不能为空!";
    }else{
        $("showUpwd").innerHTML="通过"
    }
}

function cpwd_focus(){
    $("showCpwd").innerHTML="请输入与上面一样的密码"
}

function cpwd_blur(){
    var upwd=$("upwd").value;
    var cpwd=$("cpwd").value;
    if(cpwd!="" && cpwd==upwd){
        $("showCpwd").innerHTML="通过";
    }else{
        $("showCpwd").innerHTML="两次密码不一致！"
    }
}

function email_focus(){
    $("showEmail").innerHTML="带有@和后缀的邮箱"
}

function phone_focus(){
    $("showPhone").innerHTML="请输入11位的手机号码"
}   
  */

/*
var isRegister=false;

//发送异步请求
function checkUname(){
  var  xhr=createXhr()
    xhr.onreadystatechange=function(){
       if(xhr.readyState==4&&xhr.status==200){
           var res=xhr.responseText;
          // alert(res); 
          if(res==1){
          $("showUname").innerHTML="用户名已存在！";
             isRegister=false;
          }else{
              $("showUname").innerHTML="用户名可注册！";
              isRegister=true;
          } 
       } 
    }
    
    var uname=$("uname").value
     xhr.open("get","/user/checkUname?uname="+uname,true);
     xhr.send(null);

}  */


 /*
function register(){
    if(isRegister==true)
    {
     var xhr=createXhr();
  xhr.onreadystatechange=function(){
     if(xhr.readyState==4&&xhr.status==200){
         var res=xhr.responseText;
         alert(res);
     } 
  }  
    //3.打开连接
   xhr.open("post","/user/register",true)
   xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
     //4 获取所有要提交的数据
   var uname=$("uname").value;
   var upwd=$("upwd").value;
   var email=$("email").value;
   var phone=$("phone").value;
    var url="uname="+uname+"&upwd="+upwd+"&email="+email+"&phone="+phone;
     xhr.send(url);
     console.log(url)  
   

 
    }else{
         alert("请检查用户名是否被占用或者密码不一致");
    }  
         
}
*/



$("#upwd").focus(function(){
    $("#showUpwd").html("8-16位置的数字、字母和下划线的任意组合")
    $("#showUpwd").css("color","red");
})

var isUpwd=false;
$("#upwd").blur(function(){
    var upwd=$("#upwd").val();
    var re=/^[0-9a-zA-Z_]{8,16}$/
    if(!re.test(upwd)||upwd==""){
        $("#showUpwd").html("密码格式不对!"); 
        $("#showUpwd").css("color","red");
        isUpwd=false; 
    }else{
        $("#showUpwd").css("color","green");
        $("#showUpwd").html("通过!");
        isUpwd=true;
    }
})


$("#cpwd").focus(function(){
    $("#showCpwd").html("请输入与上面一样的密码")
    $("#showCpwd").css("color","red");
})
var isCpwd=false;
$("#cpwd").blur(function(){
    var upwd=$("#upwd").val();
    var cpwd=$("#cpwd").val();
    if(cpwd!="" && cpwd==upwd){
        $("#showCpwd").html("通过!");
        $("#showCpwd").css("color","green")
        isCpwd=true;
    }else{
        $("#showCpwd").html("两次密码不一致!")
        $("#showCpwd").css("color","red");
        isCpwd=false;
    }
})


$("#email").focus(function(){
    $("#showEmail").html("带有@和后缀的邮箱")
    $("#showEmail").css("color","red");
})



var isEmail=false
$("#email").blur(function(){
    var email=$("#email").val();
 var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 if(pattern.test(email)){
     $("#showEmail").html("邮箱格式正确!")
     $("#showEmail").css("color","green")
     isEmail=true;
 }else{
    $("#showEmail").html("邮箱格式不对!")
    $("#showEmail").css("color","red")
    isEmail=false;

 }
   


})



$("#phone").focus(function(){
    $("#showPhone").html("请输入11位的手机号码")
    $("#showPhone").css("color","red");
})

var isPhone=false;
$("#phone").blur(function(){
    var  re = /^1\d{10}$/
    var phone=$("#phone").val(); 
   if(re.test(phone)){
    $("#showPhone").html("手机号码格式正确！");
    $("#showPhone").css("color","green");
    isPhone=true;

   }else{
    $("#showPhone").html("手机号码格式错误！");
    $("#showPhone").css("color","red");
    isPhone=false;
   } 

})



var isUname=false;
$("#uname").focus(function(){
 $("#showUname").html("3-12位的数字、字母和下划线的任意组合")
 $("#showUname").css("color","red");
})

$("#uname").blur(function(){
var  uname=$("#uname").val();
$.ajax({
  url:"http://127.0.0.1:3000/user/checkUname?uname="+uname,
  type:"get",
  success:function(data){
      if(data.ok==0){
          $("#showUname").html("用户名不能为空!")
          $("#showUname").css("color","red");
          isUname=false;
      }else if(data.ok==1){
         $("#showUname").html("用户名已存在")
         $("#showUname").css("color","red");
         isUname=false;
    }else{
        $("#showUname").css("color","green")
         $("#showUname").html("用户名可以注册!")
         isUname=true;     
      }
  }

})

})

  $("#Button").click(function(){
    if(isUname==false){
     alert("请检查用户名是否被占用!")
    }else if(isUpwd==false){
     alert("请输入密码正确格式!")
    }else if(isCpwd==false){
        alert("两次密码不一致!")
    }else if(isEmail==false){
      alert("请检查邮箱格式是否正确！")
     }else if(isPhone==false){
        alert("请检查手机格式是否正确！") 
     }else if(isUname==true&&isUpwd==true&&isCpwd==true&&isPhone==true&&isEmail==true){ 
    var uname=$("#uname").val();
    var upwd=$("#upwd").val();
    var email=$("#email").val();
    var phone=$("#phone").val();
   $.ajax({
    url:"http://127.0.0.1:3000/user/register?uname="+uname+"&upwd="+upwd+"&email="+email+"&phone="+phone,
    type:"post",
    data:{uname,upwd,email,phone},
    success:function(data){
       alert("注册成功,返回首页!");
     location.href="index.html"

    }
  

   })
  }
  })







