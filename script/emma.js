//Our openInfoModal() targets info-modal id and change the style attribute to block instead of none.
function openInfoModal(){
  document.getElementById("info-modal").style.display = "block";
}

//Our closeInfoModal() function targets the info-modal and sets the style display to none. So the modal disappears.
function closeInfoModal(){
  document.getElementById("info-modal").style.display = "none";
}

//
window.onclick = function(event){
  const modal = document.getElementById("info-modal");
  const target = event.target;
  if(target == modal){
      closeInfoModal();
  }
}

//Here we declare a constant array that holds our pictures and the search address.
//
const naturalDisasterPictures = [
  "../media/images/fire.jpg", 
  "../media/images/floods.jpg", 
  "../media/images/tornado.jpg", 
  "../media/images/tsunami.jpg", 
  "../media/images/wave.jpg",
  "../media/images/vulcano.jpg"];
let index = 0;
const numOfPictures = naturalDisasterPictures.length;

function nextPicture(){
  if(index === numOfPictures - 1){
      index = 0;
  }else{
      index++;
  }
  let naturalDisasterPicture = naturalDisasterPictures[index];
  document.getElementById("natural-disaster-picture").src = naturalDisasterPicture;
}

function previousPicture(){
  if(index === 0){
      index = numOfPictures - 1;
  }else{
      index--;
  }
  let naturalDisasterPicture = naturalDisasterPictures[index];
  document.getElementById("natural-disaster-picture").src = naturalDisasterPicture;
}

//function to open the modal. At first the moda-containerl has display none as default. 
//Our openModal() targets our modal-container id and change the syle attribute to display block.
function openModal(){
    document.getElementById("modal-container").style.display = "block";
}

//Function for closing the modal-container and change style display to none.
function closeModal(){
    document.getElementById("modal-container").style.display = "none";
}

let slideIndex;
function currentSlide(slide){
    slideIndex = slide;
    showSlides(slideIndex);
}

function plusSlide(){
    slideIndex++;
    showSlides(slideIndex)
}

function minusSlide(){
    slideIndex--;
    showSlides(slideIndex)
}

//
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("modal-image");
    let thumbnails = document.getElementsByClassName("thumbnail-image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    thumbnails[slideIndex-1].className += " active";
  }

