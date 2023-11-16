//Slider portfolio
const sliderPortfolio = document.querySelector(".slider-portfolio");
const srcEnCoursSlider = document.querySelector(".img-visible-slider");
const allPicsPortfolio = Array.from(
  document.querySelectorAll(".grid-item img")
);
const rightPortfolio = document.querySelector(".btn-right");
const leftPortfolio = document.querySelector(".btn-left");
const fermerSlider = document.querySelector(".btn-fermer-slider");

let photoEnCours;
let indexEncours;

allPicsPortfolio.forEach((item) => {
  item.addEventListener("click", (e) => {
    sliderPortfolio.style.display = "block";
    srcEnCoursSlider.src = e.target.src;
    photoEnCours = e.target;
    indexEncours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEncours);
  });
});

//Bouton suivant
rightPortfolio.addEventListener("click", () => {
  if (indexEncours === 11) {
    indexEncours = 0;
    srcEnCoursSlider.src = allPicsPortfolio[indexEncours].src;
    photoEnCours = allPicsPortfolio[indexEncours];
    console.log(indexEncours);
    return;
  }
  srcEnCoursSlider.src = allPicsPortfolio[indexEncours + 1].src;
  photoEnCours = allPicsPortfolio[indexEncours + 1];
  indexEncours = allPicsPortfolio.indexOf(photoEnCours);
});

//Bouton precedent
leftPortfolio.addEventListener("click", () => {
  if (indexEncours === 0) {
    indexEncours = 11;
    srcEnCoursSlider.src = allPicsPortfolio[indexEncours].src;
    photoEnCours = allPicsPortfolio[indexEncours];
    console.log(indexEncours);
    return;
  }
  srcEnCoursSlider.src = allPicsPortfolio[indexEncours - 1].src;
  photoEnCours = allPicsPortfolio[indexEncours - 1];
  indexEncours = allPicsPortfolio.indexOf(photoEnCours);
});

//Fermeture du portfolio
fermerSlider.addEventListener("click", () => {
  sliderPortfolio.style.display = "none";
});
