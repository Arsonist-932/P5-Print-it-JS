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

// EVent Listener //
left.addEventListener("click", () => {
  console.log("Click on the arrow left");
  position -= 1;

  if (position < 0) {
    position = slides.length - 1;
  }

  slider(position);
  bulletsActived(position);
});

right.addEventListener("click", () => {
  console.log("Click on the arrow right");
  position += 1;

  if (position > slides.length - 1) {
    position = 0;
  }

  slider(position);
  bulletsActived(position);
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

  bulletsActivedDefault(position);
}
createDot();

// Création du bullet selected par défaut
function bulletsActivedDefault(position) {
  const bullets = document.querySelectorAll(".dot");

  return bullets[position].classList.add("dot_selected");
}

// Liaisons des bullets au slide
function bulletsActived() {
  const bullets = document.querySelectorAll(".dot");

  for (let i = 0; i < bullets.length; i++) {
    const bulletsActive = bullets[i];
    console.log(bulletsActive);

    if (i === position) {
      bulletsActive.classList.add("dot_selected");
    } else {
      bulletsActive.classList.remove("dot_selected");
    }
  }
}

function slider(position) {
  // Modifications de l'image du slide
  document.querySelector(".banner-img").src =
    "assets/images/slideshow/" + slides[position].image;

  // Modification de la Tagline de l'image
  document.querySelector("#banner p").innerHTML = slides[position].tagLine;
}
