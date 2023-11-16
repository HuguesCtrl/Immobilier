//Selectionne toutes les images
const itemSlide = document.querySelectorAll(".container-slides img");
const nbSlide = itemSlide.length;
const next = document.querySelector(".right");
const previous = document.querySelector(".left");
let count = 0;

//Passer à l'image suivante
next.addEventListener("click", slideNext);
function slideNext() {
  itemSlide[count].classList.remove("active");
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }
  itemSlide[count].classList.add("active");
}

//Revenir à l'image précèdente
previous.addEventListener("click", slidePrev);
function slidePrev() {
  itemSlide[count].classList.remove("active");
  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }
  itemSlide[count].classList.add("active");
}
