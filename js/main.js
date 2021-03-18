// this function will check whether a tag is visible
isElemVisible = (elem) => {
    return (
        elem.getBoundingClientRect().top >= 0 &&
        elem.getBoundingClientRect().bottom < window.innerHeight
    );
};

// Video section
// Variabel til video objekt

const promo = document.querySelector(".promo_video");
/* 
Funktion tjekker når der scrolles på siden,
om videons øverste grænse er mindre end
250 pixels fra vinduets top. Hvis ja så
spiller videon. Når der scrolles længere ned
stopper videon når vinduets top er mindre end
250 pixels fra videons nederste grænse.
Der er sat en condition ind så videon ikke
auto-player på mobil og tablet, da det er pisse
irriterende.
*/
if (screen.width > 1024) {
    window.onscroll = () => {
        if (promo == null) {
            return;
        } else if (isElemVisible(promo)) {
            promo.play();
        } else {
            promo.pause();
        }
    };
}

window.addEventListener("scroll", () => {
    const parallax = Array.from(document.querySelectorAll(".parallax"));
    parallax.forEach((elem) => {
        if (isElemVisible(elem)) {
            elem.style.filter = "grayscale(0%)";
        } else {
            elem.style.filter = "grayscale(100%)";
        }
    });
});

// Scroll to content section

const nav_items = document.querySelectorAll(".nav_item");

nav_items.forEach((item) => {
    item.addEventListener("click", () => {
        let elem = document.getElementById(item.getAttribute("data-link"));
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Image slider section

// Variabel til img objekt
const image = document.getElementById("slider_image");

// Array med src atributter til slider, string format
let imgArray = [
    "img/vintønden.1.webp",
    "img/vintønden.3.webp",
    "img/vintønden.2.webp",
    "img/vintønden.4.webp",
];

// Variabel for startindex i slider
let curIndex = 0;

slideShow = () => {
    // Img objektet starter i array position 0
    if (image == null) {
        return;
    }
    image.src = imgArray[curIndex];
    // Tæller 1 op, maks er 3
    curIndex++;
    // Hvis tælleren rammer arraylængden (4), sættes den tilbage til 0, starter forfra
    if (curIndex == imgArray.length) {
        curIndex = 0;
    }
    // Funktion kaldes hvert 4. sekund
    setTimeout("slideShow()", 4000);
};
slideShow();
