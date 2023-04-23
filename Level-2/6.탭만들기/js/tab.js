
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

let  tabBtn = document.querySelectorAll('.tab-button');
//console.log(tabBtn)

$('.list').click(function(e){
    if(e.target == tabBtn[0]){
     tabKey(0)  
     
    }
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

