function Book(title, author,volume, price) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

var html = new Book('웹표준의 정석', 'ko', '608', '28,000');

var youtube = new Book('유튜부 영상 만들기', 'kim', '608', '28,000');

var python = new Book('점프 투 파이선', 'park', '332', '33,000');

var bookList = [html, youtube, python];

document.write("<h1>책 제목으로 살펴보기 </h>");
for(var i=0; i<bookList.length; i++) {
    document.write("<p>" + bookList[i].title + "</p>");
 
for(var j=0; j<bookList.length; j++){
    document.write("<p>"+bookList[j].price+"</p>")
}    
}