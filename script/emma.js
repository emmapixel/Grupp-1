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
    let thumbnails = document.getElementsByClassName("modal-thumbnails");
    let captionText = document.getElementById("caption");
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

