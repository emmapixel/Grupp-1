/*CHRIS MODAL*/
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
      document.body.style.overflow = "auto";
  } else {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
  };
};

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
/*------------------*/