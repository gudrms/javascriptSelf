var userId = document.querySelector("#user-id");
var email = document.querySelector("#email");
var userPw1 = document.querySelector("#user-pw1");
var userPw2 = document.querySelector("#user-pw2");

userId.onchange = function(){
    if(userId.value.length < 4 || userId.value.length >15){
        alert('아이디는 4자보다 ㅋ,고  15자보다 작아야한다.');
        userId.selected();
    }
}

userPw1.onchange = function(){
    if(userPw1.value.length < 8){
        alert('비밀번호는 8자 이상이어야함');
        userPw1.selected();   
        userPw1.value = "";
    }
}

userPw2.onchange = function(){
    if(userPw2.value != userPw1.value){
        alert('확인은 비밀번호와 같아야함');
        userPw1.selected();   
        userPw1.value = "";
    }
}