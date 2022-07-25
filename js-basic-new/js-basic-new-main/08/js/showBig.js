var smallPics = document.querySelectorAll(".small");
var bigPic = document.querySelector("#cup");

for(var i = 0; i<smallPics.length; i++){
    smallPics[i].onclick = showBig;
}

function showBig() {
    var newPic = this.src;
    bigPic.setAttribute("src", newPic)

}