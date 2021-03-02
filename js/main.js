const image = document.getElementById("slider_image");
let imgArray = [
    "img/vintønden.1.jpg",
    "img/vintønden.3.jpg",
    "img/vintønden.2.jpg",
    "img/vintønden.4.jpg",
];
let imgDuration = 4000;
let curIndex = 0;

function slideShow() {
    image.src = imgArray[curIndex];
    curIndex++;

    if (curIndex == imgArray.length) {
        curIndex = 0;
    }
    setTimeout("slideShow()", imgDuration);
}
slideShow();
