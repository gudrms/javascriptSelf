var userId = document.querySelector("#user-id");
var email = document.querySelector("#email");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = checkPw2;

function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15 자리의 영문과 숫자를 사용하세요")
        userId.select();
    }
}

function checkPw(){
    if(pw1.value.length < 8){
        alert("pw는 8자리 이상이어야 합니다.")
        pw1.value = "";
        pw1.select();
    }
}

function checkPw2(){
    if(pw2.value != pw1.value){
        alert("비밀번호와 확인이 다릅니다")
        pw2.value = ""
        pw2.select();
    }
}