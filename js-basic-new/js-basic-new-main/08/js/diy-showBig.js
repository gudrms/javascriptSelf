// 작은 그림을 클릭했을때 큰그림에 작은그림을 넣을것이다

// 선언, 큰그림, 작은그림, 새그림

var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for(i=0; i<smallPics.length; i++){
    smallPics[i].onclick = change;
}

function change(){
    var newP = this.src;
    bigPic.setAttribute("src", newP)
}