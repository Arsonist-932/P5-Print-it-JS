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

// Constantes //
const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");

// Variables //
let position = 0;
let currentSlide = 0;
let numberOfSlides = 4;

// EVent Listener //
left.addEventListener("click", () => {
  console.log("Click on the arrow left");
  position = +1;
  slider(position);
});

right.addEventListener("click", () => {
  console.log("Click on the arrow right");
  position = +1;
  slider(position);
});

// Création des bullets pour le slide
function createDot() {
  for (let i = 0; i < slides.length; i++) {
    // On récupère l'élément du DOM
    const dots = document.querySelector(".dots");
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
  }
}
createDot();

// Liaisons des bullets au slide
function bulletsActived() {
  const bullets = document.querySelectorAll(".dot");

  for (let i = 0; i < bullets.length; i++) {
    const bulletsActive = bullets[i];
    console.log(bulletsActive);

    if (i === currentSlide) {
      bulletsActive.classList.add("dot_selected");
    } else {
      bulletsActive.classList.remove("dot_selected");
    }
  }
}

function slider(position) {
  // Variable qui permet d'incrémenter position à currentSilde au clic
  currentSlide = currentSlide + position;

  // Boucle permettant de rendre la Slide permanent
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }

  // Modifications de l'image du slide
  document.querySelector(".banner-img").src =
    "assets/images/slideshow/" + slides[currentSlide].image;

  // Modification de la Tagline de l'image
  const p = (document.querySelector("#banner p").innerHTML =
    slides[currentSlide].tagLine);

  // Lancement de la fonction bullets pour changement de classe
  //a chaque slides sur les .dot
  bulletsActived(position);
}

// Console du Slides
console.log(currentSlide);
console.log(slides[currentSlide].image);
console.log(p);
