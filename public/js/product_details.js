//获取传过来的pid
$(function(){
   var pid=location.search.split("=")[1];

  $.ajax({
   url:"http://127.0.0.1:3000/details/details?pid="+pid,
   type:"get",
   datatype:"json",
   async:false,
   success:function(data){
      result= data;
   }   
  })
 
  .then(res=>{
      id=res[0].id;
    $(".big-img").attr("src",res[0].img_url);
    $("#div-lg").css("background","url(../"+res[0].img_url+") no-repeat")
    $("#div-lg").css("background-size","1000px 990px")
    $("#details-title").html(res[0].title)
    $("#details-price").html("￥"+res[0].price.toFixed(2))

  })




  console.log(result)
   var id=result[0].id;
   var img_url=result[0].img_url;
   var title=result[0].title;
   var price=result[0].price;
   var sum=result[0].sum;
   console.log(pid)


 $("#addCarts").click(function(){
   $.ajax({
    url:"http://127.0.0.1:3000/carts/getCarts?pid="+pid+"&img_url="+
    img_url+"&title="+title+"&price="+price+"&sum="+sum,
    type:"get",
    datatype:"json",
    success:function(data){
      if(data.code==0){
         alert("用户未登陆,请先登陆!")
         location.href="http://127.0.0.1:3000/login.html?back="
            +location.href;
      }else{
        alert("添加到购物车成功！")
      }  

    }

   })
 }) 





//点小图切换到大图
var $bigImg=$("#big-img>img")

$("#small-img>li>img").click(function(){
  var $small=$(this);
  var src=$small.attr("data-target")
  $bigImg.attr({src})
})

  var  sMask=document.getElementById("super-mask");
  var  mask=document.getElementById("mask");
 var  divLg=document.getElementById("div-lg");
 sMask.onmousemove=function(e){
       var {offsetX,offsetY}=e;
       var top=offsetY-88;
       var left=offsetX-88;
       top=top<25?25:top>250?250:top;
       left=left<40?40:left>264?264:left;
       mask.style.top=`${top}px`;
        mask.style.left=`${left}px`;
        divLg.style.backgroundPosition=`${-16/7*left}px ${-16/7*top}px`;
    }  

    sMask.onmouseover=function(){
         mask.className=mask.className.replace("d-none","")
       divLg.className=divLg.className.replace("d-none","")
    }
  sMask.onmouseout=function(){
         mask.className+=" d-none";
       divLg.className+=" d-none";
    }





  })