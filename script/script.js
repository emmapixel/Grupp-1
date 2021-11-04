/*---MODAL - ABOUT US---*/

const modal = document.getElementById("modal");
const chrisPortfolioModal =
  document.getElementsByClassName("chris-portfolio")[0];
const maryPortfolioModal = document.getElementsByClassName("mary-portfolio")[0];
const miaPortfolioModal = document.getElementsByClassName("mia-portfolio")[0];
const contactBackArrow = document.getElementsByClassName("back-icon")[0];
const contactExitArrow = document.getElementsByClassName("exit-icon")[0];
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
function Modal() { //Opens up the "About us"-modal.
    let visible = false;
    if (visible === false) {
      document.getElementById("about-section").scrollIntoView();
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      visible = true;
    } else {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
      visible = false;
    };
};
/*-------------*/

/*PERSON MODALS*/
  const miaImage = document.getElementsByClassName("mia-modal-image")[0];
  const miaInfo = document.getElementsByClassName("mia-modal-info")[0];
  const chrisImage = document.getElementsByClassName("chris-modal-image-1")[0];
  const chrisInfo = document.getElementsByClassName("chris-modal-info")[0];
  const maryImage = document.getElementsByClassName("mary-modal-image")[0];
  const maryInfo = document.getElementsByClassName("mary-modal-info")[0];

  /*Chris*/  
  function chrisP(){  //Shows Chris Photossons "profile" in the "about us"-modal, and writes out his information.
    for(let i = 0; i < persons.length; i++){
    if(persons[i].fName === "Chris"){
    chrisImage.style.display = "flex";
    chrisInfo.style.display = "block"
    chrisInfo.innerHTML = `<span style="font-size: 40px;"><b>${persons[0].fName} ${persons[0].lName}</b></span>
    <span style="font-size: 25px; margin-left: 30px;"><b>${persons[0].type}</b></span><br><br><br>
    <span style="font-size: 15px;">My age: Im ${persons[0].age} years old. <br><br>
    Something I enjoy: As you maybe can figure out by looking in my portfolio, I really enjoy a good looking ${persons[0].likes}. <br><br>
    Things I rather avoids: Im a latenight person and the majority of my photographs are taken in the night, therefor I avoid ${persons[0].dislikes} as much as I can.</span>`
    maryImage.style.display = "none";
    maryInfo.style.display = "none";
    miaImage.style.display = "none";
    miaInfo.style.display = "none";
    Modal();
    };
  };
  };
  
  /*Mary*/
  function maryP(){  //Shows Mary Photossons "profile" in the "about us"-modal, and writes out her information.
    for(let i = 0; i < persons.length; i++){
    if(persons[i].fName === "Mary"){
    maryImage.style.display = "flex";
    maryInfo.style.display = "block" 
    maryInfo.innerHTML = `<span style="font-size: 40px; text-align: center;"><b>${persons[1].fName} ${persons[1].lName}</b></span>
   <span style="font-size: 25px; margin-left: 30px;"> <b>${persons[1].type}</b></span><br><br><br> 
    <span style="font-size: 15px;">My age:</b> Im ${persons[1].age} years old. <br><br>
    What do I prefer to do on my freetime? I love being out in the nature, so taking ${persons[1].likes} is something I like to make time for. <br><br>
    What can drive me crazy? Im a meticulous person, and use to say Im allergic to ${persons[1].dislikes}.</span>`
    chrisImage.style.display = "none";
    chrisInfo.style.display = "none";
    miaImage.style.display = "none";
    miaInfo.style.display = "none";
    Modal();
    };
  };
  };

  /*Mia*/
  function miaP(){  //Shows Mia Photossons "profile" in the "about us"-modal, and writes out her information.
    for(let i = 0; i < persons.length; i++){
      if(persons[i].fName === "Mia"){
        miaImage.style.display = "flex";
        miaInfo.style.display = "block"
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
function exitModal() {  //Closes the "about us"-modal.
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

function modalBack() { //If into "contact" or "portfolio"-section, this function will take you back one step.
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

function modalRightClick(){  //This function will switch between the different photographers. (chris, mary and mia)
  if(chrisInfo.style.display === "block"){
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

function modalLeftClick(){  //This function will switch between the different photographers. (chris, mary and mia)
  if(chrisInfo.style.display === "block"){
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
function modalPortfolio() {  //This function will show the portfolio of the different photographers depenting on which modal you're into.
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
    maryPortfolioModal.style.display = "grid";
  } else {
    miaPortfolioModal.style.display = "grid";
  }
}
/*------------------*/
/* CHRIS - PORTFOLIO */
const images = [
  {name: "bulbs.jpg"},
  {name: "snowsign.jpg"},
  {name: "sign.jpg"},
  {name: "street.jpg"},
  {name: "basin.jpg"},
  {name: "umbrellas.jpg"},
  {name: "carousel.jpg"},
  {name: "cone.jpg"},
  {name: "door.jpg"}
];

const chrisPortfolio = document.getElementsByClassName("chris-portfolio")[0];
const galleryModal = document.getElementById("gallery-modal");
const mainImage = document.getElementById("main-image");
const thumbnails = document.getElementsByClassName("thumbnail");
const thumbnailsWrapper = document.getElementById("thumbnails-wrapper");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function setMainImage(src){  //When you click on a picture in the portfolio, this function will make that picture as the "main image".
  galleryModal.style.display = "flex"
  chrisPortfolio.style.filter = "blur(5px)"
  mainImage.setAttribute("src", src);
  setActiveThumbnail();
};

function setActiveThumbnail(){  //This function will make a red border and scale up the thumbnail of the picture that shows as "main image".
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

function exitGalleryModal(){  //Will exit the portfolio modal.
  galleryModal.style.display = "none"
  chrisPortfolio.style.filter = "none"
}

function prevImage(){ //Will change "main image" to the previous in the thumbnail list.
  for(let i = 0; i < thumbnails.length; i++){
      if(thumbnails[i].src === mainImage.src && i !== 0){
          mainImage.setAttribute("src", thumbnails[i -= 1].src)
          thumbnailsWrapper.scrollLeft -= 50; //GÖR SÅ ATT SLIDERN HITTAR VILKEN BILD SOM VISAS, SÅ ATT DEN RÖDA BORDER INTE ÄR "UTANFÖR" BILD.
          setActiveThumbnail();
      };
  };
};

function nextImage(){ //Will change "main image" to the next in the thumbnail list.
  for(let i = 0; i < thumbnails.length; i++){
      if(thumbnails[i].src === mainImage.src && i !== 14){
          mainImage.setAttribute("src", thumbnails[i += 1].src)
          thumbnailsWrapper.scrollLeft += 50; //GÖR SÅ ATT SLIDERN HITTAR VILKEN BILD SOM VISAS, SÅ ATT DEN RÖDA BORDER INTE ÄR "UTANFÖR" BILD.
          setActiveThumbnail();
      };
  };
};

window.addEventListener("load", function(){  //Loads the images before it shows on your screen.
  mainImage.setAttribute("src", `/media/images/chris/${images[0].name}`);
  thumbnailsWrapper.innerHTML = images.map((img) => 
  `<img src="/media/images/chris/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`)
  .join("");
  setActiveThumbnail()

  prevButton.addEventListener("click", prevImage);
  nextButton.addEventListener("click", nextImage);  
});
/*-------------------*/
/* MODAL - CONTACT */
function modalContact() {  //Will open the "contact" section in the modal.
  const contactH1 = document.getElementsByClassName("modal-contact-header-h1")[0];
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

function onSubmit(){  //When submiting your form, a message will show up for three seconds and you will go back to the "main modal".
  const popUpModal = document.getElementsByClassName("contact-modal-submit")[0];
  const emailInput = document.getElementById("email-input");

  if (emailInput.value.length >= 1) {
    popUpModal.style.display = "block";
    setTimeout(() => {
      //When pressing the "Submit" button the "Thank you" modal will be shown for 3seconds.
      popUpModal.style.display = "none";
    }, 3000);
    //AFTER 3SEC GO BACK TO "START"-MODAL
  
}else{
  popUpModal.style.display = "none";
}
/*---------------------*/
/*-----MODAL ENDS---- */

/* Marys portfolio */
const openLightboxMary = () => {
  const marysPictures = document.getElementsByClassName("mary-pic");
  for (let i = 0; i < marysPictures.length; i++) {
    marysPictures[i].addEventListener("klick", () => {
      document.getElementById("marys-lightbox-wrapper").style.display = "flex";
    });
  }
};
window.addEventListener("load", openLightboxMary()); }
