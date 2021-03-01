const image = document.getElementById("slider_image");
let imgArray = ["img/small1.jpg", "img/small2.jpg", "img/small3.jpg"];
let curIndex = 0;
let imgDuration = 2000;

function slideShow() {
    image.src = imgArray[curIndex];
    curIndex++;
    if (curIndex == imgArray.length) {
        curIndex = 0;
    }
    setTimeout("slideShow()", imgDuration);
}
slideShow();
