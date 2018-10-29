//异步请求
/*function ajaxlogin(){
    var xhr=createXhr();
  xhr.onreadystatechange=function(){
     if(xhr.readyState==4&&xhr.status==200){
         var res=xhr.responseText;
         alert(res);
     }
  }
     //3.打开连接
     xhr.open("post","/user/login",true);
     xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
       // 获取所有要提交的数据
   var uname=$("uname").value;
   var upwd=$("upwd").value;
     var url="uname="+uname+"&upwd="+upwd;
     //4.发送请求;
     xhr.send(url);
}  
   */



  $(function(){
    
    $("#login").click(function(){
    var  uname=$("#uname").val();
    var upwd=$("#upwd").val(); 
     $.ajax({
         url:"http://127.0.0.1:3000/user/login",
         type:"post",
         data:{uname,upwd},
         dataType:"json",
         success:function(data){
            if(data.ok=="0"){           
                alert(data.msg);
            }else{ 
                alert("登录成功,自动返回上一页!");
                var back=location.search.slice(6);
                location.href=back;
            }
         } 
       })

  })
 
})
 



