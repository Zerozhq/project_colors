const diff = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {

let diffcolors = "#";
for (let i = 0; i < 6; i++) {
  diffcolors += diff[randomNumberColors()]
}

  document.body.style.backgroundColor = diffcolors;
  color.textContent = diffcolors

});

function randomNumberColors() {
  return Math.floor(Math.random() * diff.length) 
}