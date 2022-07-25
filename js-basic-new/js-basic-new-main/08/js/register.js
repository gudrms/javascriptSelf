function newRegister(){
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(nenwP, nameList.childNodes[0]);
    userName.value = "";

    var removeBttns = document.querySelectorAll(".del");
    
    for (var i=0; i<removeBttns.length; i++) {  // removeBttns에 있는 요소 전체를 반복
        removeBttns[i].addEventListener("click", function() {  // i번째 버튼을 클릭했을 때 실행할 함수 선언
          if (this.parentNode.parentNode)  // 현재 노드(this)의 부모 노드의 부모 노드가 있을 경우 실행
            this.parentNode.parentNode.removeChild(this.parentNode);  // ‘현재 노드(this)의 부모 노드의 부모 노드’를 찾아 ‘현재 노드(this)의 부모 노드(p 노드)’ 삭제
        });
    }
    }