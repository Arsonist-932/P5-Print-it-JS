const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables
const right = document.querySelector(".arrow_right");
const left = document.querySelector(".arrow_left");

// EventListener
left.addEventListener("click", function () {
  console.log("Click on the left");
});

right.addEventListener("click", function () {
  console.log("Click on the right");
});

// Création des bullets
function createDots() {
  for (let i = 0; i < slides.length; i++) {
    //Récupération d'un élément du DOM
    const dots = document.querySelector(".dots");
    // Création de la balise div & ajout de la class .dots
    const dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dots.appendChild(dot);
  }
}
createDots();
let position = 0;

function bulletActived() {
  const bullets = document.querySelectorAll(".dot");
  console.log(bullets);
  for (let i = 0; i < bullets.length; i++) {
    let bullet = bullets[i];
    console.log(bullet);

    if (i === position) {
      bullet.classList.add("dot_selected");
    }
  }
}
bulletActived();
