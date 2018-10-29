$(function(){
  $.ajax({
   url:"http://127.0.0.1:3000/products/products",
    type:"get",
    dataType:"json"
  })
   .then(products=>{
      new Vue({
         el:"#lol_products",
         data:{ products} 
      }) 
      new Vue({
        el:"#king_products",
        data:{ products} 
     })     
   })

  
   
 




})