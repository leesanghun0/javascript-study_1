

// let pants = [28, 30, 32, 34, 50];
// let shirts = [95, 100, 105]; //해보기l



// 1.셀렉트박스에 옵션 여러개를 넣는다
// 2.내가 옵션을 선택한다.
// 3.선택한 옵션이 몇번째인지 출력한다.

// let selectBox = document.querySelector('.form-select');


// selectBox.addEventListener('input',function(){
//     let selectValue = selectBox.value;

//     for(let i = 0; i<selectBox.length; i++){
//         let num= selectValue.selectedindex;
//         console.log(num)
//     }
// })





// $('.form-select').eq(0).on('input',function(){
//    let selectValue = $('.form-select').eq(0).val();

//    if(selectValue == '셔츠'){
    
//     $('.form-select').eq(1).removeClass('off');
//     $('.form-select').eq(1).html('');
//     shirts.forEach(function(a){
//         $('.form-select').eq(1).append(`<option>${a}</option>`)
//     })
    
//    }

//     //forEach 안에 파라미터 2개 생성가능
//     //첫째는 array 안의 데이터
//     //둘째는 0부터 1씩 증가하는 정수 
// })


// 1.셀렉트박스에 옵션 여러개를 넣는다
// 2.내가 옵션을 선택한다.
// 3.선택한 옵션이 몇번째인지 출력한다.


let formSelect = document.getElementById('form-sel');



formSelect.addEventListener('input',selectIn);



function selectIn(){
    let select1 = document.getElementById('form-sel').selectedIndex;
    let option1 = document.getElementById('form-sel').options;

    alert(option1[select1].index)
}
















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

// let tabBtn = document.querySelectorAll('.tab-button');
// //console.log(tabBtn)

// $('.list').click(function(e){
   
//     tabKey(e.target.dataset.id);
// });


// function tabKey(a){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(a).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(a).addClass('show');
// }




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

