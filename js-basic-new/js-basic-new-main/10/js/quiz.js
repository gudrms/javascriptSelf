// function popup(){
//     var newWin = window.open("\current.html", " ","width=400, height=400");
//     if(newWin == null) {
//         alert('팝업차단중');
//     }
// }

// window.onload = popup;


window.onload = popup;

function popup(){
    var newOpen = window.open("\current.html", " ", "width=500, height=600");
    if(newOpen == null){
alert('팝업차단중');
    }
}