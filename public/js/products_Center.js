$(function(){
 $.ajax({
   url:"http://127.0.0.1:3000/carts/cartsList",
   type:"get",
   datatype:"json",
   success:function(data){
     if(data.ok==0){
      $("#Carts_no").next().hide().next().hide()
     }else{
        $("#Carts_no").hide().next().show().next().show()
     }

   }
 })
 .then(res=>{
    new Vue({
     el:"#Carts-details",
     data:{
         res,
         index:"",
         check:[]
     },
     methods:{
         less(index,e){
            e.preventDefault();
            this.index=index
           var pid=this.res[index].pid            
         if(this.res[index].num<=0){
            this.res[index].num=0; 
         }else{
            this.res[index].num--;
         }
         var sum=res[index].sum 
         var num=this.res[index].num
       var price=this.res[index].price
         res[index].sum=num*price
         $.ajax({
            url:"http://127.0.0.1:3000/carts/lesscartsList?pid="+pid,
            type:"get",
            success:function(){
           
           }
        
           })   
         },
           
         add(index,e){
            e.preventDefault(); 
            this.index=index
    
            var pid=this.res[index].pid
               this.res[index].num++;
               var sum=res[index].sum 
               var price=this.res[index].price
               var num=this.res[index].num  
               res[index].sum=price*num   
            $.ajax({
                url:"http://127.0.0.1:3000/carts/addcartsList?pid="+pid,
                type:"get",
                success:function(res){
                  console.log(res)
               }
               }) 
        
               
         },
          //删除一个商品
         deletes(index,e){
            e.preventDefault(); 
            this.index=index
            var pid=this.res[index].pid
            if(confirm("确定要删除该商品？")){
            $.ajax({
                url:"http://127.0.0.1:3000/carts/deleteCart?pid="+pid,
                type:"get",
                success:function(){
                        
                        window.location.href = window.location.href;           
                   }
       

               })    
            }
         },
       //清空购物车
         deletesAll(){
          if(confirm("确定要清空购物车？")){
            $.ajax({
                url:"http://127.0.0.1:3000/carts/deleteAll",
                type:"get",
                success:function(){
                        
                        window.location.href = window.location.href;           
                   }
       

               })    
            }
         }    
      
     },
     computed:{
      total(){
        var total=0;
          for(var i=0;i<res.length;i++){
         var check=this.check;
         for(var j=0;j<check.length;j++)   
          if(res[i].pid==check[j]){  
             total+=res[i].sum;
            }
           
          } 
         return total.toFixed(2)  
     }

     }
    })
 
    
      //全选 和单选 


    $("#selectAll").click(function(){
       if($(this).is(':checked')){
      $(".carts-checkbox").prop("checked",true)
       }else{
        $(".carts-checkbox").prop("checked",false)
       
       }
    })

    $(".carts-checkbox").click(function(){
      var allCheckNum = $("input[name='check']").length;
      var checkedNum = $("input[name='check']:checked").length;
    if (allCheckNum==checkedNum) {
      $("#selectAll").prop("checked",true)
    } else{
      $("#selectAll").prop("checked",false)
    }

  })



   




 })









})