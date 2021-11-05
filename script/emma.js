function openModal(){
  alert("hej");
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-image").style.display = "block";
  document.getElementById("modal").style.backgroundColor = "black";
}

function openInfoModal(){
  document.getElementById("info-modal").style.display = "block";
  document.getElementById("card-info-id").style.display = "none";
}

function closeInfoModal(){
  document.getElementById("info-modal").style.display = "none";
  document.getElementById("card-info-id").style.display = "block";
}

window.onclick = function(event){
  const modal = document.getElementById("info-modal");
  const target = event.target;
  if(target == modal){
      closeInfoModal();
  }
}

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

//Function for opening the Modal
function openModal(){
    document.getElementById("modal-container").style.display = "block";
    document.getElementById("modal-container").style.backgroundColor = "rgba(0,0,0,0.9)";
}

//Function for closing the Modal
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
    /*
    captionText.innerHTML = thumbnails[slideIndex-1].alt;???????*/
  }

//Function for trigger sound when you press heart-button

//function triggerSound(){
//    document.getElementById("heart-button").innerHTML;
//}

