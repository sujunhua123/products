

  /*添加删除项目*/
new Vue({
  el:"#select-server",
  data:{
    tasks:[]

  },
  methods:{
    add(e){
      this.tasks.push(e.target.innerText);
    },
     remove(i){
        this.tasks.splice(i,1)
     }
     
  }

})  







var button=document.getElementById("take-up")

  button.onclick=function(){
     var div=document.getElementById("list-player")
    if(button.innerHTML=="收起筛选框"){
        div.style.height="0";
       button.innerHTML="展开筛选框"
    }else{
      div.style.height="426px";
      button.innerHTML="收起筛选框"
    }

  }
  

  
  var d1 = document.getElementById("d1");
  var u1 = d1.getElementsByTagName("ul")[0];
  u1.innerHTML += u1.innerHTML;
  function f1(){
      var again = (1 / 2) * d1.scrollWidth;
      if (d1.scrollLeft >= d1.scrollWidth / 2) {
          d1.scrollLeft = 0;
      }
      d1.scrollLeft++;
  }
 var ultimer=setInterval(f1, 30);

 $("#d1").mouseenter(function(){clearInterval(ultimer);ultimer=null})
  .mouseleave(function(){ultimer=setInterval(f1,20);})  

   

  
