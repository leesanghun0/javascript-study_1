


let car2 = {
    
    name : '소나타',
    price : [50000,30000,10000]
}


let carName = document.querySelector('.car-name');
let carPrice = document.querySelector('.car-price');

carName.innerHTML = car2.name;
carPrice.innerHTML = car2.price[2]



// let formSelect = document.querySelectorAll('.form-select');
// //console.log(downSelect)
// //console.log(selectValue);


// formSelect[0].addEventListener('input',function(e){
//     let value = e.target.value;

//     if(e.target.value == '셔츠'){
//         formSelect[1].classList.remove('off');
//     }else if(e.target.value == '바지'){
//         formSelect[1].classList.remove('off');
        
//     }else{
//         formSelect[1].classList.add('off');
//     }
//     });

// var a = document.createElement('p');

// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a)

let pants = [28, 30, 32, 34, 50];
let shirts = [95, 100, 105]; //해보기
$('.form-select').eq(0).on('input',function(){
   let selectValue = $('.form-select').eq(0).val();

   if(selectValue == '셔츠'){
    
    $('.form-select').eq(1).removeClass('off');
    $('.form-select').eq(1).html('');
    shirts.forEach(function(a){
        $('.form-select').eq(1).append(`<option>${a}</option>`)
    })
    
   }else if(selectValue == '바지'){
    $('.form-select').eq(1).removeClass('off');
    $('.form-select').eq(1).html('');
    pants.forEach(function(a){
        //console.log(a)
        $('.form-select').eq(1).append(`<option>${a}</option>`)
    });

    

    //forEach 안에 파라미터 2개 생성가능
    //첫째는 array 안의 데이터
    //둘째는 0부터 1씩 증가하는 정수 

   }
})


// 1.셀렉트박스에 옵션 여러개를 넣는다
// 2.내가 옵션을 선택한다.
// 3.선택한 옵션이 몇번째인지 출력한다.






















 //   --------------------------------------------------------

//0버튼 누르면 
//0버튼에 orange 클래스명 부착  
//박스0에 show 클래스명부착

//버튼0 누르면
//버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 
//코드 3줄 짜기
//버튼0에 orange 클래스명 부착
//박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 
//코드 3줄 짜기 박스0에 show 클래스명 부착



//console.log(tabBtn)

// tabBtn.eq(0).on('click',function(){
//     tabBtn.removeClass('orange');
//     tabBtn.eq(0).addClass('orange');
       
//     })
//     tabBtn.eq(1).on('click',function(){
//         tabBtn.removeClass('orange');
//         tabBtn.eq(1).addClass('orange');
       
//     })
//     tabBtn.eq(2).on('click',function(){
//         tabBtn.removeClass('orange');
//         tabBtn.eq(2).addClass('orange');
       
//     })
// let tabCon = $('.tab-content');
// let tabBtn = $('.tab-button');

// for(let i = 0; i<= tabBtn.length; i++){
//     tabBtn.eq(i).on('click',function(){
//         tabKey(i);
//     })
// }

let tabBtn = document.querySelectorAll('.tab-button');
//console.log(tabBtn)

$('.list').click(function(e){
   
    tabKey(e.target.dataset.id);
});


function tabKey(a){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(a).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(a).addClass('show');
}




// let tabBtn = document.querySelectorAll('.tab-button');
// //console.log(tabBtn)
// let tabContent = document.querySelectorAll('.tab-content');
// //console.log(tabContent)

// tabBtn[0].addEventListener('click',function(){

//     for(let i = 0; i<tabBtn.length; i++){
//         tabBtn[0].classList.add('orange');
//         tabContent[0].classList.add('show');

//         tabBtn[i].classList.remove('orange');
//         tabContent[i].classList.remove('show');
//     }

// });

// tabBtn[1].addEventListener('click',function(){

//     for(let i = 0; i<tabBtn.length; i++){
//         tabBtn[1].classList.add('orange');
//         tabContent[1].classList.add('show');

//         tabBtn[i].classList.remove('orange');
//         tabContent[i].classList.remove('show');
//     }

// });

// tabBtn[2].addEventListener('click',function(){

//     for(let i = 0; i<=tabBtn.length; i++){
//         tabBtn[2].classList.add('orange');
//         tabContent[2].classList.add('show');

//         tabBtn[i].classList.remove('orange');
//         tabContent[i].classList.remove('show');
//     }
// });

