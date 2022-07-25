    var pic = document.querySelector('#pic');
    pic.addEventListener("mouseover", changePic, false);
    pic.addEventListener("mouseout", originPic, false);

    var hi = document.querySelector('html');

    hi.addEventListener("click", hii, false);
    function hii(){
      alert("안녕하세요?")
    }

		function changePic() {			
			pic.src = "images/boy.png";
    }
    function originPic() {
      pic.src = "images/girl.png";
    }