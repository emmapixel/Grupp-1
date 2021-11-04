
/*GALLERY MODAL - CHRIS*/

const images = [
    {name: "alleyway.jpg"},
    {name: "bike-city.jpg"},
    {name: "cab-city.jpg"},
    {name: "cone.jpg"},
    {name: "door.jpg"},
    {name: "girl-glasses.jpg"},
    {name: "hongkong.jpg"},
    {name: "neon-sign-2.jpg"},
    {name: "neon-sign-3.jpg"},
    {name: "neon-sign.jpg"},
    {name: "neon-street.jpg"},
    {name: "portrait.jpg"},
    {name: "shop-city.jpg"},
    {name: "skyscraper.jpg"},
    {name: "umbrella.jpg"},
];

const gallerySection = document.getElementById("gallery-section");
const galleryModal = document.getElementById("gallery-modal");
const mainImage = document.getElementById("main-image");
const thumbnails = document.getElementsByClassName("thumbnail");
const thumbnailsWrapper = document.getElementById("thumbnails-wrapper");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function setMainImage(src){
    galleryModal.style.display = "flex"
    gallerySection.style.filter = "blur(5px)"
    mainImage.setAttribute("src", src);
    setActiveThumbnail();
};

function setActiveThumbnail(){
    for(let i = 0; i < thumbnails.length; i++){
        if(thumbnails[i].src === mainImage.src){
            thumbnails[i].style.border = "2px solid red"
            thumbnails[i].style.transform = "scale(1.25)"
            thumbnails[i].style.boxShadow = "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
        }else{
            thumbnails[i].style.border = "none"
            thumbnails[i].style.transform = "none"
        };
    };
};

function exitGalleryModal(){
    galleryModal.style.display = "none"
    gallerySection.style.filter = "none"
}

function prevImage(){
    for(let i = 0; i < thumbnails.length; i++){
        if(thumbnails[i].src === mainImage.src && i !== 0){
            mainImage.setAttribute("src", thumbnails[i -= 1].src)
            thumbnailsWrapper.scrollLeft -= 50; //GÖR SÅ ATT SLIDERN HITTAR VILKEN BILD SOM VISAS, SÅ ATT DEN RÖDA BORDER INTE ÄR "UTANFÖR" BILD.
            setActiveThumbnail();
        };
    };
};

function nextImage(){
    for(let i = 0; i < thumbnails.length; i++){
        if(thumbnails[i].src === mainImage.src && i !== 14){
            mainImage.setAttribute("src", thumbnails[i += 1].src)
            thumbnailsWrapper.scrollLeft += 50; //GÖR SÅ ATT SLIDERN HITTAR VILKEN BILD SOM VISAS, SÅ ATT DEN RÖDA BORDER INTE ÄR "UTANFÖR" BILD.
            setActiveThumbnail();
        };
    };
};

window.addEventListener("load", function(){
    mainImage.setAttribute("src", `img/${images[0].name}`);
    thumbnailsWrapper.innerHTML = images.map((img) => 
    `<img src="img/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`)
    .join("");
    setActiveThumbnail()

    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);  
});