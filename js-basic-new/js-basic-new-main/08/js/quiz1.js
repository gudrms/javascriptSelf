var myText = document.querySelector("#myText");
myText.addEventListener("click", change)

function change(){
    myText.style.fontSize = "20px";
    myText.style.color = "blue";
    myText.style.backgroundColor = "#ccc";

}