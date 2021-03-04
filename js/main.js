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

/*--------------------------------------------------*/

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
        promo.getBoundingClientRect().bottom < 250 ||
        promo.getBoundingClientRect().top > 250
            ? promo.pause()
            : promo.play();
    };
}
