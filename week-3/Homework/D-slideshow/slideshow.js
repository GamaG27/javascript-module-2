// Write your code here

const autoforwardbtn = document.getElementById("autofoward");
const fowardbtn = document.getElementById("Forward");
const image = document.getElementById("image");
const imagenumber = document.getElementById("imagenumber");
const imagesrc = [
  "./images/61Tt2nyiUoL._AC_SX425_.jpg",
  "./images/download.jpeg",
  "./images/fender-player-strat-hsh-pf-tobacco-sunburst-guite.jpeg",
];

window.addEventListener("load", (event) => {
  console.log("The page has fully loaded");
  image.src = imagesrc[0];
});

let index = 1;

function fowardbtnclick() {
  if (index <= imagesrc.length - 1) {
    imagenumber.innerText = index + 1;
    image.src = imagesrc[index];
    index++;
  } else {
    index = 0;
    image.src = imagesrc[index];
    imagenumber.innerText = index + 1;
  }
}

fowardbtn.addEventListener("click", fowardbtnclick);

function backwords() {
  if (index <= imagesrc.length - 1) {
    imagenumber.innerText = index - 1;
    image.src = imagesrc[index];
    index - 1;
  } else {
    index = 0;
    image.src = imagesrc[index];
    imagenumber.innerText = index - 1;
  }
}
