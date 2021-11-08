//Our openInfoModal() targets info-modal id and change the style attribute to block instead of none like it's value in our CSS code.
function openInfoModal(){
  document.getElementById("info-modal").style.display = "block";
}

//Our closeInfoModal() function targets the info-modal and sets the style display to none. So the modal disappears.
function closeInfoModal(){
  document.getElementById("info-modal").style.display = "none";
}

//When we click somewhere in the browser window, we want a function to be triggered
//This function will close the modal.
window.onclick = function(event){
  const modal = document.getElementById("info-modal");
  const target = event.target;
  if(target == modal){
      closeInfoModal();
  }
}

//Here we declare a constant array that holds our picture paths.
const naturalDisasterPictures = [
  "../media/images/fire.jpg", 
  "../media/images/floods.jpg", 
  "../media/images/tornado.jpg", 
  "../media/images/tsunami.jpg", 
  "../media/images/wave.jpg",
  "../media/images/vulcano.jpg"];
let index = 0;
const numOfPictures = naturalDisasterPictures.length;

//This function will navigate to the next picture in the array.
//If we are at the end of the array, we jump back to the first image.
function nextPicture(){
  if(index === numOfPictures - 1){
      index = 0;
  }else{
      index++;
  }
  let naturalDisasterPicture = naturalDisasterPictures[index];
  document.getElementById("natural-disaster-picture").src = naturalDisasterPicture;
}

//This function will navigate to the previous picture in the array.
//If we are at the start of the array, we jump to the last image.
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

//Index variable to keep track of which image we are at
let slideIndex;

//This function is called when we open the modal by clicking on one of our images
//If we open the modal by clicking on the 4th image, the slideIndex should be 4.
function currentSlide(slide){
    slideIndex = slide;
    showSlides();
}

//This function navigates to the next slide image
function plusSlide(){
    slideIndex++;
    showSlides();
}

//This function navigates to the previous slide image
function minusSlide(){
    slideIndex--;
    showSlides();
}

function showSlides() {
    let i;
    //Target all big images
    let slides = document.getElementsByClassName("modal-image");
    //Target all thumbnails
    let thumbnails = document.getElementsByClassName("thumbnail-image");
    //If we are at the last slide and have pressed the next slide button,
    //we jump back to the first image.
    if (slideIndex === slides.length) {
      slideIndex = 0;
    }
    //If we are at the first image and have pressed the previous slide button,
    //we jump to the last image.
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    //We loop through each image and hide it by setting its display value to none.
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //We loop through each thumbnail and remove active from its classname
    for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    //Set the image's display value to flex
    slides[slideIndex].style.display = "flex";

    //Add active to the thumbnail's classname
    thumbnails[slideIndex].className += " active";
  }

  let liked = false;

  //This is a function that change the heart icon to colored heart.
  function changeHeartPicture(){
    liked = !liked;
    if(liked){
      document.getElementById("heart-button-white").style.display ="block";
      document.getElementById("heart-button").style.display = "none";
    }else{
      alert("Stop disliking my pictures!!!")
      document.getElementById("heart-button-white").style.display = "none";
      document.getElementById("heart-button").style.display ="block";
    }
  };
