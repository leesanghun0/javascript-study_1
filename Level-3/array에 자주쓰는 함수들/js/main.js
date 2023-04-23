var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];


// var 어레이 =['가','다','나'];

// 어레이.sort(function(a,b){
//   if(a < b){
//     return 1;
//   }else{
//     return -1;
//   }
// });


// 필터.addEventListener('click',function(){
//   let newProduct = products.filter(function(a){
//     return a.price <= 60000 
//   })
// });







let  rowClass = document.querySelector('.row');
let  priceBtn = document.getElementById('price');
//console.log(rowClass)

//forEach((a, i))  a가의미하는것은 하나하나의 데이터
//                  i는 1씩 증가하는 정수
function 상품목록(){
products.forEach((a, i)=>{
  let cardBox = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${a.title}</h5>
  <p>가격 : ${a.price}</p></div>`;
  rowClass.insertAdjacentHTML('beforeEnd',cardBox);
})
}

상품목록();

priceBtn.addEventListener('click',function(){
  products.sort(function(a,b){
    return a.price - b.price
  })

  rowClass.innerHTML = '';
  상품목록(); 
})


let moreBtn = document.getElementById('more')
let num = 0;


moreBtn.addEventListener('click',function(){
  //console.log('클릭됨')
  num++;

  if(num == 1){
  $.get('https://codingapple1.github.io/js/more1.json')
  .done(function(date){
    
    상품목록();
  })
}else if(num == 2){
  $.get('https://codingapple1.github.io/js/more2.json')
  .done(function(date){
    
    상품목록();
  })

  moreBtn.style.display = 'none';

}
})







// let cardBox0 = `<div class="col-sm-4">
//   <img src="https://via.placeholder.com/600" class="w-100">
//   <h5>Card title</h5>
//   <p>가격 : 70000</p></div>`;
//   let cardBox1 = `<div class="col-sm-4">
//   <img src="https://via.placeholder.com/600" class="w-100">
//   <h5>Card title</h5>
//   <p>가격 : 70000</p></div>`;
//   let cardBox2 = `<div class="col-sm-4">
//   <img src="https://via.placeholder.com/600" class="w-100">
//   <h5>Card title</h5>
//   <p>가격 : 70000</p></div>`;
  
//rowClass.insertAdjacentHTML('beforeEnd',cardBox);
// rowClass.insertAdjacentHTML('beforeEnd',cardBox1);
// rowClass.insertAdjacentHTML('beforeEnd',cardBox2);


//document.querySelectorAll('.col-sm-4 h5')[0].innerHTML =  products[0].title 
//document.querySelectorAll('.col-sm-4 p')[0].innerHTML = '가격 :' + ' '+products[0].price


// for(let i = 0; i< document.querySelectorAll('.col-sm-4 h5').length; i++){
//   document.querySelectorAll('.col-sm-4 h5')[i].innerHTML = products[i].title;
// }
// for(let i = 0; i< document.querySelectorAll('.col-sm-4 p').length; i++){
//   document.querySelectorAll('.col-sm-4 p')[i].innerHTML = '가격 :' + ' '+products[i].price
// }
