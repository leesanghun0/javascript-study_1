var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];


/* 브라우저 안에 데이터 저장가능 개발자도구-application에서 확인가능함
Local Storage는 이름:값 형태로 저장가능
Session storage도 Local Storage와 같음

indexdeDb는 구조화된 대용량데이터 저장시
Cookies 로그인 인증정보
Cache Storage는 html css js 파일 저장하는곳 */

//localStorage.setItem('이름','이상훈')
//localStorage.getItem('이름')
// var arr = [1,2,3];
// var newArr = JSON.stringify(arr);

// localStorage.setItem('num',newArr);

// var 꺼낸거 = localStorage.getItem('num');
// console.log(JSON.parse(꺼낸거)[0]);


//-------------------------------------------------------
//숙제1 구매버튼을 누르면 누른 상품명 로컬스토리지 에 저장하기
//팁1 내 형제요소 찾는법 알아보기 sibiling 요소 어떻게 가져오나요?
//localStorage가 비어있을때 / 뭐가 있을 때 저장방식이 먼가 다를듯 

//숙제2 cart.html방문시 localStorage에 저장된 상품명들 다보여주기



let  rowClass = document.querySelector('.row');
let  priceBtn = document.getElementById('price');
//console.log(rowClass)

//forEach((a, i))  a가의미하는것은 하나하나의 데이터
//                  i는 1씩 증가하는 정수
function 상품목록(){
products.forEach((a, i)=>{
  let cardBox = `<div class="col-sm-4">
  <img src="" class="w-100">
  <h5>${a.title}</h5>
  <p>가격 : ${a.price}</p>
  <button class="buy">구매</button>
  </div>`
  rowClass.insertAdjacentHTML('beforeEnd',cardBox);
})
}

상품목록();

//1.구매버튼 누르면
//2.지금누른 버튼 윗튓 글자를 가져와서
//3.localStorage에 [글자] 저장


let buyBtn = document.querySelectorAll('.buy')[0];


buyBtn.addEventListener('click',function(){
  let 제목 = buyBtn.previousElementSibling.previousElementSibling.innerHTML
  
  if(localStorage.getItem('cart') != null){
    let 꺼낸거 = JSON.parse(localStorage.cart);
    꺼낸거.push(제목);
    localStorage.setItem('cart', JSON.stringify([제목]))
  }else{
    localStorage.setItem('cart', JSON.stringify([제목]))
  }
})







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
  .done(function(data){
    data.forEach((a, i)=>{
      let cardBox = `<div class="col-sm-4">
        <img src="" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
        <button class="buy">구매</button>
      </div>`
    rowClass.insertAdjacentHTML('beforeEnd',cardBox);
    });
  })
}else if(num == 2){
  $.get('https://codingapple1.github.io/js/more2.json')
  .done(function(data){
    data.forEach((a, i)=>{
      let cardBox = `<div class="col-sm-4">
        <img src="" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
        <button class="buy">구매</button>
      </div>`
    rowClass.insertAdjacentHTML('beforeEnd',cardBox);
    });

  });

  moreBtn.disabled = true;

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
