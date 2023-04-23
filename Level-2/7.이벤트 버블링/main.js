
      // 1.전송버튼 누르면
      // 저기 input에 입력한 값이 공백이면 알림창 띄워주세요
      let btnPrimary = document.querySelector('.btn-primary');
      let inputID = document.getElementById('input-id');
      let inputPwd = document.getElementById('input-password');
      //console.log(userID);
      //console.log(userPwd);
      //console.log(btnPrimary);

      btnPrimary.addEventListener('click',send);

     function send(){
      let userIdValue = inputID.value;
      let uertPwdValue = inputPwd.value;
      
      if(userIdValue == '' || userIdValue==null || uertPwdValue==''|| uertPwdValue==null){
        alert("정보를 입력하세요");
        event.preventDefault();
      }else if(uertPwdValue.length < 6){
        alert("비밀번호가 6글자 미만입니다.");
        event.preventDefault();
      }
    }
//----------------------------------------------------------------------------------------
    document.getElementById('login').addEventListener('click', function(){
        document.querySelector('.black-bg').classList.add('show-modal');
    });

    document.getElementById('close').addEventListener('click',function(){
        document.querySelector('.black-bg').classList.remove('show-modal');
    });

    document.getElementsByClassName('navbar-toggler')
    [0].addEventListener('click',function(){
        document.getElementsByClassName('list-group')[0].classList.toggle('show');
    })

    //document.querySelector('.hello').innerHTML = '바보';
    // $('.hello').html('바보');
    $('#test-btn').on('click',function(){
      $('.hello').slideToggle()
    })
    //-----------------------------------------------------------------------------'
    let blackBg = document.querySelector('.black-bg');

    blackBg.addEventListener('click',function(e){
        //e.target; //유저가 실제로누른거
        //e.currentTarget; //이벤트리스너 달린곳
        this;
        //e.preventDefault(); //이벤트기본 동작을 막아줌. 
        //e.stopProgagation(); //내 상위요소로 이벤트 버블링을 막아줌.


        if(e.target == blackBg){
            blackBg.classList.remove('show-modal');
        }
        console.log(e.target)
        console.log(blackBg)
  



        //blackBg.classList.remove('show-modal');
    })


   