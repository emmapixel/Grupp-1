/*CHRIS MODAL*/
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
      document.body.style.overflow = "auto";
  } else {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
  };
};

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
/*------------------*/