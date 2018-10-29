//ajax("http://127.0.0.1:3000/header.html")
$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/header.html",
        type:"get"
    })
    .then(res=>{
        document.getElementById("header").innerHTML=res;

       /*var $btnSearch=$("#btnSearch");
       $btnSearch.click(function(){
         location.href="http://localhost:3000/product_lol.html"
          
       }) */
        
        function isLogin(){  
        $.ajax({
          url:"http://127.0.0.1:3000/user/islogin",
          type:"get",
          dataType:"json",
        success:function(data){
            if(data.ok==0){
              $("#islogin").show().next().hide();
            }else{
              $("#islogin").hide().next().show();
              $("#uname-login").html(data.uname)
            }
        }
        })
      } 
        isLogin();
      /* $("#OutLogin").click(function(e){
            e.preventDefault()
            $.ajax({
                url:"http://127.0.0.1:3000/user/outlogin",
                type:"get",
                success:isLogin            
            })
        }) */

      /* $("#btnLogin").click(function(e){
            e.preventDefault();
            location.href="http://127.0.0.1:3000/login.html?back="+location.href;
          })
         */ 
       new Vue({
         el:"#header",
         data:{},
         methods:{
           Login(){
            location.href="http://127.0.0.1:3000/login.html?back="
            +location.href;
           },
           OutLogin(){
            $.ajax({
              url:"http://127.0.0.1:3000/user/outlogin",
              type:"get",
              success:isLogin            
          })
           }
         }

       }) 
         
  })
   
   /*显示当前页面的*/
   $("#header_active>li>a").click(function(){
       $(this).addClass("active").siblings().removeClass("active")      
   }) 
  $("") 


})