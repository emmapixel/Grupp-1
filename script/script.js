/*---MODAL - ABOUT US---*/

const modal = document.getElementById("modal");
const chrisPortfolioModal =
  document.getElementsByClassName("chris-portfolio")[0];
const maryPortfolioModal = document.getElementsByClassName("mary-portfolio")[0];
const miaPortfolioModal = document.getElementsByClassName("mia-portfolio")[0];
const contactBackArrow = document.getElementsByClassName("back-icon")[0];
const contactExit = document.getElementsByClassName("exit-icon")[0];
const contactRightArrow = document.getElementsByClassName("right-icon")[0];
const contactLeftArrow = document.getElementsByClassName("left-icon")[0];
const contactModal = document.getElementsByClassName("modal-contact")[0];

/*MODAL OBJECTS */
const persons = [
  {
    fName: "Chris",
    lName: "Photosson",
    type: "Street Photographer",
    age: 26,
    likes: "neon signs",
    dislikes: "early mornings",
  },
  {
    fName: "Mary",
    lName: "Photosson",
    type: "Portrait Photographer",
    age: 31,
    likes: "long walks",
    dislikes: "lazy people",
  },
  {
    fName: "Mia",
    lName: "Photosson",
    type: "Nature Photographer",
    age: 28,
    likes: "swiming",
    dislikes: "winter",
  },
];
/*---------------*/

/*MAIN MODAL*/
function Modal() {
  //Opens up the "About us"-modal.
  let visible = false;
  if (visible === false) {
    document.getElementById("about-section").scrollIntoView();
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    contactExit.style.display = "block";
    contactRightArrow.style.display = "block";
    contactLeftArrow.style.display = "block";
    visible = true;
  } else {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    visible = false;
  }
}
/*-------------*/

/*PERSON MODALS*/
const miaImage = document.getElementsByClassName("mia-modal-image")[0];
const miaInfo = document.getElementsByClassName("mia-modal-info")[0];
const chrisImage = document.getElementsByClassName("chris-modal-image-1")[0];
const chrisInfo = document.getElementsByClassName("chris-modal-info")[0];
const maryImage = document.getElementsByClassName("mary-modal-image")[0];
const maryInfo = document.getElementsByClassName("mary-modal-info")[0];

/*Chris*/
function chrisP() {
  //Shows Chris Photossons "profile" in the "about us"-modal, and writes out his information.
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].fName === "Chris") {
      chrisImage.style.display = "flex";
      chrisInfo.style.display = "block";
      chrisInfo.innerHTML = `<span style="font-size: 40px;"><b>${persons[0].fName} ${persons[0].lName}</b></span>
    <span style="font-size: 25px; margin-left: 30px;"><b>${persons[0].type}</b></span><br><br><br>
    <span style="font-size: 15px;">My age: Im ${persons[0].age} years old. <br><br>
    Something I enjoy: As you maybe can figure out by looking in my portfolio, I really enjoy a good looking ${persons[0].likes}. <br><br>
    Things I rather avoids: Im a latenight person and the majority of my photographs are taken in the night, therefor I avoid ${persons[0].dislikes} as much as I can.</span>`;
      maryImage.style.display = "none";
      maryInfo.style.display = "none";
      miaImage.style.display = "none";
      miaInfo.style.display = "none";
      Modal();
    }
  }
}

/*Mary*/
function maryP() {
  //Shows Mary Photossons "profile" in the "about us"-modal, and writes out her information.
  for (let i = 0; i < persons.length; i++) {
    document;
    if (persons[i].fName === "Mary") {
      maryImage.style.display = "flex";
      maryInfo.style.display = "block";
      maryInfo.innerHTML = `<span style="font-size: 40px; text-align: center;"><b>${persons[1].fName} ${persons[1].lName}</b></span>
   <span style="font-size: 25px; margin-left: 30px;"> <b>${persons[1].type}</b></span><br><br><br> 
    <span style="font-size: 15px;">My age:</b> Im ${persons[1].age} years old. <br><br>
    What do I prefer to do on my freetime? I love being out in the nature, so taking ${persons[1].likes} is something I like to make time for. <br><br>
    What can drive me crazy? Im a meticulous person, and use to say Im allergic to ${persons[1].dislikes}.</span>`;
      chrisImage.style.display = "none";
      chrisInfo.style.display = "none";
      miaImage.style.display = "none";
      miaInfo.style.display = "none";
      Modal();
    }
  }
}

/*Mia*/
function miaP() {
  //Shows Mia Photossons "profile" in the "about us"-modal, and writes out her information.
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].fName === "Mia") {
      miaImage.style.display = "flex";
      miaInfo.style.display = "block";
      miaInfo.innerHTML = `<span style="font-size: 40px;"><b>${persons[2].fName} ${persons[2].lName}</b></span>
        <span style="font-size: 25px; margin-left: 30px;"><b>${persons[2].type}</b></span><br><br><br> 
        <span style="font-size: 15px;">My age: Im ${persons[2].age} years old. <br><br>
        Do I have any hobbies? I love ${persons[2].likes} in the local lakes around here. <br><br>
        What would I like to live without? I love to swim in cold water, but I can't stand the cold ${persons[2].dislikes}.</span>`;
      chrisImage.style.display = "none";
      chrisInfo.style.display = "none";
      maryImage.style.display = "none";
      maryInfo.style.display = "none";
      Modal();
    }
  }
}
/*--------------------*/

/*MODAL BUTTONS*/
function exitModal() {
  //Closes the "about us"-modal.
  if (modal.style.display === "block") {
    modal.style.display = "none";
    contactModal.style.display = "none";
    contactBackArrow.style.display = "none";
    chrisPortfolioModal.style.display = "none";
    maryPortfolioModal.style.display = "none";
    miaPortfolioModal.style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function modalBack() {
  //If into "contact" or "portfolio"-section, this function will take you back one step.
  visible = false;
  if (visible === false) {
    contactModal.style.display = "none";
    chrisPortfolioModal.style.display = "none";
    maryPortfolioModal.style.display = "none";
    miaPortfolioModal.style.display = "none";
    contactBackArrow.style.display = "none";
    document.body.style.overflow = "hidden";
    visible = true;
  } else {
    contactModal.style.display = "flex";
    contactBackArrow.style.display = "block";
    chrisPortfolioModal.style.display = "grid";
    document.body.style.overflow = "auto";
    visible = false;
  }
}

function modalRightClick() {
  //This function will switch between the different photographers. (chris, mary and mia)
  if (chrisInfo.style.display === "block") {
    contactModal.style.display = "none";
    contactBackArrow.style.display = "none";
    chrisPortfolioModal.style.display = "none";
    maryPortfolioModal.style.display = "none";
    miaPortfolioModal.style.display = "none";
    maryP();
  } else if (maryInfo.style.display === "block") {
    contactModal.style.display = "none";
    contactBackArrow.style.display = "none";
    chrisPortfolioModal.style.display = "none";
    maryPortfolioModal.style.display = "none";
    miaPortfolioModal.style.display = "none";
    miaP();
  } else {
    contactModal.style.display = "none";
    contactBackArrow.style.display = "none";
    chrisPortfolioModal.style.display = "none";
    maryPortfolioModal.style.display = "none";
    miaPortfolioModal.style.display = "none";
    chrisP();
  }
}

function modalLeftClick() {
  //This function will switch between the different photographers. (chris, mary and mia)
  if (chrisInfo.style.display === "block") {
    contactModal.style.display = "none";
    chrisPortfolioModal.style.display = "none";
    maryPortfolioModal.style.display = "none";
    miaPortfolioModal.style.display = "none";
    miaP();
  } else if (maryInfo.style.display === "block") {
    contactModal.style.display = "none";
    chrisPortfolioModal.style.display = "none";
    maryPortfolioModal.style.display = "none";
    miaPortfolioModal.style.display = "none";
    chrisP();
  } else {
    contactModal.style.display = "none";
    chrisPortfolioModal.style.display = "none";
    maryPortfolioModal.style.display = "none";
    miaPortfolioModal.style.display = "none";
    maryP();
  }
}
/*-----------------------*/

/*MODAL -  PORTFOLIO AND CONTACT*/

/* MODAL - PORTFOLIO */
function modalPortfolio() {
  //This function will show the portfolio of the different photographers depenting on which modal you're into.
  let visible = false;
  if (visible === false) {
    contactBackArrow.style.display = "block";
    document.body.style.overflow = "hidden";
    visible = true;
  } else {
    contactBackArrow.style.display === "none";
    document.body.style.overflow = "auto";
    visible = false;
  }
  if (chrisImage.style.display === "flex") {
    chrisPortfolioModal.style.display = "grid";
  } else if (maryImage.style.display === "flex") {
    maryPortfolioModal.style.display = "flex";
  } else {
    document.location = "../pages/emma.html";
  }
}
/*------------------*/
/* CHRIS - PORTFOLIO */
const images = [
  { name: "bulbs.jpg" },
  { name: "snowsign.jpg" },
  { name: "sign.jpg" },
  { name: "street.jpg" },
  { name: "basin.jpg" },
  { name: "umbrellas.jpg" },
  { name: "carousel.jpg" },
  { name: "cone.jpg" },
  { name: "door.jpg" },
];

const chrisPortfolio = document.getElementsByClassName("chris-portfolio")[0];
const galleryModal = document.getElementById("gallery-modal");
const mainImage = document.getElementById("main-image");
const thumbnails = document.getElementsByClassName("thumbnail");
const thumbnailsWrapper = document.getElementById("thumbnails-wrapper");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function setMainImage(src) {
  //When you click on a picture in the portfolio, this function will make that picture as the "main image".
  galleryModal.style.display = "flex";
  chrisPortfolio.style.filter = "blur(5px)";
  contactBackArrow.style.display = "none";
  contactRightArrow.style.display = "none";
  contactLeftArrow.style.display = "none";
  contactExit.style.display = "none";
  mainImage.setAttribute("src", src);
  setActiveThumbnail();
}

function setActiveThumbnail() {
  //This function will make a red border and scale up the thumbnail of the picture that shows as "main image".
  for (let i = 0; i < thumbnails.length; i++) {
    if (thumbnails[i].src === mainImage.src) {
      thumbnails[i].style.border = "2px solid red";
      thumbnails[i].style.transform = "scale(1.25)";
      thumbnails[i].style.boxShadow =
        "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)";
    } else {
      thumbnails[i].style.border = "none";
      thumbnails[i].style.transform = "none";
    }
  }
}

function exitGalleryModal() {
  //Will exit the portfolio modal.
  galleryModal.style.display = "none";
  chrisPortfolio.style.filter = "none";
  contactBackArrow.style.display = "block";
  contactRightArrow.style.display = "block";
  contactLeftArrow.style.display = "block";
  contactExit.style.display = "block";
}

function prevImage() {
  //Will change "main image" to the previous in the thumbnail list.
  for (let i = 0; i < thumbnails.length; i++) {
    if (thumbnails[i].src === mainImage.src && i !== 0) {
      mainImage.setAttribute("src", thumbnails[(i -= 1)].src);
      thumbnailsWrapper.scrollLeft -= 50; //GÖR SÅ ATT SLIDERN HITTAR VILKEN BILD SOM VISAS, SÅ ATT DEN RÖDA BORDER INTE ÄR "UTANFÖR" BILD.
      setActiveThumbnail();
    }
  }
}

function nextImage() {
  //Will change "main image" to the next in the thumbnail list.
  for (let i = 0; i < thumbnails.length; i++) {
    if (thumbnails[i].src === mainImage.src && i !== 9) {
      mainImage.setAttribute("src", thumbnails[(i += 1)].src);
      thumbnailsWrapper.scrollLeft += 50; //GÖR SÅ ATT SLIDERN HITTAR VILKEN BILD SOM VISAS, SÅ ATT DEN RÖDA BORDER INTE ÄR "UTANFÖR" BILD.
      setActiveThumbnail();
    }
  }
}

window.addEventListener("load", function () {
  //Loads the images before it shows on your screen.
  mainImage.setAttribute("src", `/media/images/chris/${images[0].name}`);
  thumbnailsWrapper.innerHTML = images
    .map(
      (img) =>
        `<img src="/media/images/chris/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`
    )
    .join("");
  setActiveThumbnail();

  prevButton.addEventListener("click", prevImage);
  nextButton.addEventListener("click", nextImage);
});
/*-------------------*/
/* MODAL - CONTACT */
function modalContact() {
  //Will open the "contact" section in the modal.
  const contactH1 = document.getElementsByClassName(
    "modal-contact-header-h1"
  )[0];
  let visible = false;
  if (visible === false) {
    contactBackArrow.style.display = "block";
    contactModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    visible = true;
  } else {
    contactBackArrow.style.display === "none";
    contactModal.style.display = "none";
    document.body.style.overflow = "auto";
    visible = false;
  }
  if (chrisImage.style.display === "flex") {
    contactH1.innerHTML = `Contact <br> ${persons[0].fName}`;
  } else if (maryImage.style.display === "flex") {
    contactH1.innerHTML = `Contact <br> ${persons[1].fName}`;
  } else {
    contactH1.innerHTML = `Contact <br> ${persons[2].fName}`;
  }
}

function onSubmit() {
  //When submiting your form, a message will show up for three seconds and you will go back to the "main modal".
  const popUpModal = document.getElementsByClassName("contact-modal-submit")[0];
  const emailInput = document.getElementById("email-input");

  if (emailInput.value.length >= 1) {
    popUpModal.style.display = "block";
    setTimeout(() => {
      //When pressing the "Submit" button the "Thank you" modal will be shown for 3seconds.
      popUpModal.style.display = "none";
    }, 3000);
  } else {
    popUpModal.style.display = "none";
  }
}
/*---------------------*/
/*-----MODAL ENDS---- */

// Ghazals js
/* This is an array with the pictures that will be displayed in the thumbnail wrapper and the main-image*/
const marysImages = [
  { name: "nature1.jpg" },
  { name: "nature2.jpg" },
  { name: "nature3.jpg" },
  { name: "nature4.jpg" },
  { name: "nature5.jpg" },
  { name: "nature6.jpg" },
];

/*The function closeMarysLightbox is used for closing the lightbox when clicked on a span in HTML
 */
const closeMarysLightbox = () => {
  document.getElementById("marys-lightbox-wrapper").style.display = "none";
};

/* The eventlistner is added so that when the page loads the pictures will be 
displayed as thumbnails in the thumbnail wrapper.
*/
window.addEventListener("load", () => {
  document.getElementById("thumbnail-wrapper").innerHTML = marysImages
    .map(
      (img) =>
        `<img src="./maryspics/${img.name}" class="thumbnail-mary" onclick="setMainImageMary(this.src)">`
    ) // the .map() creates an empty array for the pictures.
    .join(""); //to "join" the pics without the ","
  setActiveThumbnailMary();
  document
    .getElementById("prev-btn-mary")
    .addEventListener("click", prevImageMary); // added a function to the previous button
  document
    .getElementById("next-btn-mary")
    .addEventListener("click", nextImageMary); // added a function to the next button
});
/* This function loops through all the thumbnails and if the source of the thumbnail and the main image is the same
when clicked it removes 1 fron the index which results in the main picture being chenged to the picture with the 1 lower index.*/
const prevImageMary = () => {
  const marysThumbs = document.getElementsByClassName("thumbnail-mary");
  for (let i = 0; i < marysThumbs.length; i++) {
    if (
      marysThumbs[i].src ===
        document.getElementById("main-image-mary-lightbox").src &&
      i !== 0
    ) {
      document
        .getElementById("main-image-mary-lightbox")
        .setAttribute("src", marysThumbs[(i -= 1)].src);
    } else if (marysThumbs[i].src === document
      .getElementById("main-image-mary-lightbox").src && i === 0){
        document
        .getElementById("main-image-mary-lightbox")
        .setAttribute("src", marysThumbs[(i += marysThumbs.length - 1)].src); 
      } // else if is to jump to the last pic if clicked while being on the first pic
    setActiveThumbnailMary();
  }
};
/* This function does the same thing as the function before but this time it adds 1 to the index and it reesults 
in the next picture in the array being displayed as the main image
 */
const nextImageMary = () => {
  const marysThumbs = document.getElementsByClassName("thumbnail-mary");
  for (let i = 0; i < marysThumbs.length; i++) {
    if (
      marysThumbs[i].src ===
        document.getElementById("main-image-mary-lightbox").src &&
      i !== marysThumbs.length - 1
    ) {
      document
        .getElementById("main-image-mary-lightbox")
        .setAttribute("src", marysThumbs[(i += 1)].src);
    } else if (marysThumbs[i].src === document
      .getElementById("main-image-mary-lightbox").src && i === marysThumbs.length - 1) {
      document
        .getElementById("main-image-mary-lightbox")
        .setAttribute("src", marysThumbs[0].src);
    } // else if is for the loop to go back to pic 1 index[0] and start over again
    setActiveThumbnailMary();
  }
};
/* If the thumbnail and the main image have the same source, the thumbnail will have a border*/
const setActiveThumbnailMary = () => {
  const marysThumbs = document.getElementsByClassName("thumbnail-mary");
  for (let s = 0; s < marysThumbs.length; s++) {
    if (
      marysThumbs[s].src ===
      document.getElementById("main-image-mary-lightbox").src
    ) {
      marysThumbs[s].style.border = "2px solid white";
    } else {
      marysThumbs[s].style.border = "0px";
    }
  }
};
/* openLightboxMary is a function used for opening the modal when a pic i cklicked on. 
First i started with looping through all pictures that had the same class "mary pic", and added a eventListener
so that when any pic is cklickd on the lightbox will show up displayed as a flex */

const allPictures = document.querySelectorAll(".mary-pic");
allPictures.forEach((pic) =>
  pic.addEventListener("click", () => {
    document.getElementById("marys-lightbox-wrapper").style.display = "flex";
    document
      .getElementById("main-image-mary-lightbox")
      .setAttribute("src", pic.src);
    setActiveThumbnailMary();
  })
);

/* When clicked this function will set the same src for the main image and the thumbnail thats is being clicked
on. When you click a thumbnail that picture will be displayed as the main image
  */
const setMainImageMary = (src) => {
  document.getElementById("main-image-mary-lightbox").setAttribute("src", src); // the src follows from the onclick="setMainImageMary(this.src)
  setActiveThumbnailMary();
};

function sendMessage(event) {
  //We start by grabbing the target of the event, in our case the contact form
  const form = event.target;
  //Among the form elements, we grab the input element with id fname
  const firstnameInput = form.elements["fname"];
  //We save the firstname to a constant
  const firstname = firstnameInput.value;

  //We do the same for lastname and message
  const lastnameInput = form.elements["lname"];
  const lastname = lastnameInput.value;
  const messageTextarea = form.elements["messageTextareaId"];
  const message = messageTextarea.value;

  //Show the mail window with prefilled information about the
  //receiver, subject and mail body
  document.location.href =
    "mailto:exempel@mail.com?subject=" +
    encodeURIComponent("Meddelande från " + firstname + " " + lastname) +
    "&body=" +
    encodeURIComponent(message);

  //Clear all the fields in the form
  firstnameInput.value = "";
  lastnameInput.value = "";
  messageTextarea.value = "";

  //Prevent the browser from doing anything with the event
  event.preventDefault();
  return false;
}

//email-form
function showEmailForm() {
  const emailFormContainerFlip = document.getElementById(
    "email-form-container"
  );
  if (emailFormContainerFlip.style.display === "block") {
    emailFormContainerFlip.style.display = "none";
  } else {
    emailFormContainerFlip.style.display = "block";
  }
}
