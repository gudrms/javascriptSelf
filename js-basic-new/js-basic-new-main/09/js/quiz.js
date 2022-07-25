var price = 24000;
var side = document.querySelectorAll(".checkbx");
var sum = document.querySelector(".price");
sum.value = price+"원";

for (let i = 0; i < side.length; i++) {
    side[i].onclick = function(){
        if(this.checked == true) {
            price += parseInt(this.value);
        } else {
            price -= parseInt(this.value);
        }
        sum.value = price+"원";
    }
    
}