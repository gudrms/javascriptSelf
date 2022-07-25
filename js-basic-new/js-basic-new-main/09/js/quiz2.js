var radius = document.querySelector("#radius");
var round = document.querySelector("#round");
var area = document.querySelector("#area");
var start = document.querySelector("#start");

start.onclick = function(){
    round.value = radius.value *2*3.14;
    area.value = radius.value * radius.value *3.14;
}