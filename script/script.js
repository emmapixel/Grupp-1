/*CHRIS MODAL*/
<<<<<<< HEAD
const modal = document.getElementById("chris-modal");
const chrisPortfolioModal = document.getElementsByClassName("chris-portfolio")[0];
const contactBackArrow = document.getElementsByClassName("back-icon")[0];
const contactModal = document.getElementsByClassName("chris-contact")[0];


function chrisModal() {
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

function exitModal() { 
  if (modal.style.display === "block") {
      modal.style.display = "none";
      contactModal.style.display = "none";
      contactBackArrow.style.display = "none";
      chrisPortfolioModal.style.display = "none";
=======
function chrisModal() {
    const modal = document.getElementById("chris-modal");
    if (modal.style.display === "none") {
      document.getElementById("about-section").scrollIntoView();
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    } else {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    };
};

function exitModal() {
  const modal = document.getElementById("chris-modal");
  if (modal.style.display === "block") {
      modal.style.display = "none";
>>>>>>> 3eeefd38d234dc1f46420f2abefe24c3509c641b
      document.body.style.overflow = "auto";
  } else {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
  };
};

<<<<<<< HEAD
function chrisPortfolio() {
  let visible = false;
  if (visible === false) {
    contactBackArrow.style.display = "block";
    chrisPortfolioModal.style.display = "grid";
    document.body.style.overflow = "hidden";
    visible = true;
  } else {
    contactBackArrow.style.display === "none"
    chrisPortfolioModal.style.display = "none";
    document.body.style.overflow = "auto";
    visible = false;
  }
}

function chrisContact() {
  let visible = false;
  if (visible === false) {
    contactBackArrow.style.display = "block";
    contactModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    visible = true;
  } else {
    contactBackArrow.style.display === "none"
    contactModal.style.display = "none";
    document.body.style.overflow = "auto";
    visible = false;
  };
};

function chrisBack() {
  visible = false;
  if (visible === false) {
    contactModal.style.display = "none";
    chrisPortfolioModal.style.display = "none";
    contactBackArrow.style.display = "none";
    document.body.style.overflow = "hidden";
    visible = true;
  } else {
    contactModal.style.display = "flex";
    contactBackArrow.style.display = "block";
    chrisPortfolioModal.style.display = "grid";
    document.body.style.overflow = "auto";
    visible = false;
  };
}
=======
function chrisPortfolio() { /*FUNKAR INTE*/
  const chrisPortfolioModal = document.getElementsByClassName("chris-portfolio");
  if (chrisPortfolioModal.style.display === "none") {
    chrisPortfolioModal.style.display = "grid";
    document.body.style.overflow = "hidden";
  } else {
    chrisPortfolioModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function chrisContact() { /*FUNKAR INTE*/
  const contactModal = document.getElementsByClassName("chris-contact");
  if (contactModal.style.display === "none") {
    contactModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  } else {
    contactModal.style.display = "none";
    document.body.style.overflow = "auto";
  };
};
>>>>>>> 3eeefd38d234dc1f46420f2abefe24c3509c641b
/*------------------*/