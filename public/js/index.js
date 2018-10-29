$(function(){
$.ajax({
  url:"http://127.0.0.1:3000/products/products",
  type:"get",
  dataType:"json"
})
 .then(products=>{
  new Vue({
     el:"#content_1",
     data:{products}
  }) 
 })

 $.ajax({
 url:"http://127.0.0.1:3000/index/carousel",
 type:"get",
 dataType:"json"
 })
.then(carousels=>{
    new Vue({
        el:"#carousel",
        data:{carousels}
     }) 

})

$.ajax({
 url:"http://127.0.0.1:3000/products/products",
 type:"get",
dataType:"json"
})
.then(hotproducts=>{
  new Vue({
      el:".p_color",
      data:{hotproducts}
  })

})

$.ajax({
    url:"http://127.0.0.1:3000/products/products",
    type:"get",
   dataType:"json"
   })
   .then(salesList=>{
     new Vue({
         el:"#sales_list",
         data:{salesList}
     })    
   /*显示和隐藏销售榜*/
 $("#data>div>p").hover(function(){                
    $(this).addClass("on").prev().removeClass("on").parent().siblings().children(":first-child").addClass("on")
    $(this).parent().siblings().children(":last-child").removeClass("on")       
});
 })

 $.ajax({
    url:"http://127.0.0.1:3000/products/products",
    type:"get",
   dataType:"json"
   })
   .then(salesList=>{
     new Vue({
         el:"#LOLsales_list",
         data:{salesList}
     })    
   /*显示和隐藏销售榜*/
 $("#data>div>p").hover(function(){                
    $(this).addClass("on").prev().removeClass("on").parent().siblings().children(":first-child").addClass("on")
    $(this).parent().siblings().children(":last-child").removeClass("on")       
});
 })

   $.ajax({
    url:"http://127.0.0.1:3000/index/saleslist",
    type:"get",
   dataType:"json"
   })   
 .then(lunboList=>{
        new Vue({
            el:".lunbo_list",
            data:{lunboList}
        })
   //------------------设置推荐滚动--------------------
   var $d1_1=$("#d1_1");  
   var  $d1_2=$("#d1_2");  
var ul1_1=parseInt($d1_1.css("top")); 
var ul1_2=parseInt($d1_2.css("top"));  
function scrollUl(){
   ul1_1<-1580?ul1_1=1580:ul1_1--;   
   ul1_2<-1580?ul1_2=1580:ul1_2--;      
   $d1_1.css("top",ul1_1+"px");  
   $d1_2.css("top",ul1_2+"px");  
}
ultimer=setInterval(scrollUl,20);
   $("#d1").mouseenter(function(){clearInterval(ultimer);ultimer=null})
   .mouseleave(function(){ultimer=setInterval(scrollUl,20);})          

 })



/*首页电梯导航*/

 var $divList=$(".main>div:last-child");
$(window).scroll(function(){
    var $fs=$(".main>div>p").next();
     var $f1=$fs.first();
    var scrollTop=$("html,body").scrollTop();
    var offsetTop=$f1.offset().top;
   if(innerHeight/2+scrollTop>offsetTop){
      $divList.removeClass("d-none")
   }else{
       $divList.addClass("d-none")
   }
     $fs.each((i,f)=>{
         offsetTop=$(f).offset().top;
         if(innerHeight/2+scrollTop>offsetTop){
             $divList.children(`:eq(${i})`)
                    .addClass("btn-danger")
                    .siblings()
                   .removeClass("btn-danger")
         }
     })
});
   $divList.on("click","button",function(){
    var i=$(this).index();
    var offsetTop=$(`.main>div:nth-child(2)>p:eq(${i})`).offset().top;
    $("html").animate({
        scrollTop:offsetTop
    },500);

})



document.querySelector("#content_1>div")
.style.display="flex";

document.querySelector("#content_2>div")
.style.display="flex";

document.querySelector("#content_3>div")
 .style.display="flex";

document.querySelector("#content_4>div")
    .style.display="flex";

document.querySelector("#content_5>div")
    .style.display="flex";

//查找所有的tab
 
var tabs=document.querySelectorAll(
    "#tab>li>[data-toggle=tab]"
)
  for(var tab of tabs){

      tab.onmouseover=function(){
         var tab=this;
      var lis= document.querySelectorAll("#tab>li");
        for(var li of lis){
            li.style.background="#e0e0e0";
        }
          tab.parentNode.style.background="#00A8FF";

   
        var id=tab.getAttribute("href");   
        var div=document.querySelector(id);
     var divs=div.parentNode.children;
       for(var d of divs){
           d.style.display="none";
       }
         div.style.display="flex";
      }

  }









//1F 2F 3F 4F 滚动轮播图
var d2 = document.getElementById("d2");
    var u2 = d2.getElementsByTagName("ul")[0];
    u2.innerHTML += u2.innerHTML;
    function f2(){
        var again = (1 / 2) * d2.scrollHeight;
        if (d2.scrollTop >= d2.scrollHeight / 2) {
            d2.scrollTop = 0;
        }
        d2.scrollTop++;
    }
   var ultimer2=setInterval(f2, 20);

   $("#d2").mouseenter(function(){clearInterval(ultimer2);ultimer2=null})
    .mouseleave(function(){ultimer2=setInterval(f2,20);})

 var d3 = document.getElementById("d3");
    var u3 = d3.getElementsByTagName("ul")[0];
    u3.innerHTML += u3.innerHTML;
    function f3(){
        var again = (1 / 2) * d3.scrollHeight;
        if (d3.scrollTop >= d3.scrollHeight / 2) {
            d3.scrollTop = 0;
        }
        d3.scrollTop++;
    }
   var ultimer3=setInterval(f3, 20);

   $("#d3").mouseenter(function(){clearInterval(ultimer3);ultimer3=null})
    .mouseleave(function(){ultimer3=setInterval(f3,20);})  

var d4 = document.getElementById("d4");
    var u4 = d4.getElementsByTagName("ul")[0];
    u4.innerHTML += u4.innerHTML;
    function f4(){
        var again = (1 / 2) * d4.scrollHeight;
        if (d4.scrollTop >= d4.scrollHeight / 2) {
            d4.scrollTop = 0;
        }
        d4.scrollTop++;
    }
   var ultimer4=setInterval(f4, 20);

   $("#d4").mouseenter(function(){clearInterval(ultimer4);ultimer4=null})
    .mouseleave(function(){ultimer4=setInterval(f4,20);})  


 var d5 = document.getElementById("d5");
    var u5 = d5.getElementsByTagName("ul")[0];
    u5.innerHTML += u5.innerHTML;
    function f5(){
        var again = (1 / 2) * d5.scrollHeight;
        if (d5.scrollTop >= d5.scrollHeight / 2) {
            d5.scrollTop = 0;
        }
        d5.scrollTop++;
    }
   var ultimer5=setInterval(f5, 20);

   $("#d5").mouseenter(function(){clearInterval(ultimer5);ultimer5=null})
    .mouseleave(function(){ultimer5=setInterval(f5,20);})      

 
    




})


