/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const sticks = ["♦", "♥", "♠", "♣"];
  const colors = ["red", "black"];

  function randomRange(end, start = 0) {
    let x = Math.floor(start + Math.random() * (end - start));
    return x;
  }

  let btn = document.getElementById("change");
  btn.addEventListener("click", changeCard);

  function changeCard() {
    let stick = randomRange(sticks.length);
    let color = randomRange(colors.length);
    let cardNumber = document.getElementById("cardNumber");
    cardNumber.textContent = number[randomRange(number.length)];

    let suittop = document.getElementById("suit-top");
    suittop.textContent = sticks[stick];
    suittop.style.color = colors[color];
    suittop.style.fontSize = "60px";

    let suitbottom = document.getElementById("suit-bottom");
    suitbottom.textContent = sticks[stick];
    suitbottom.style.transform = "scaleY(-1)";
    suitbottom.style.color = colors[color];
    suitbottom.style.fontSize = "60px";

    // Leer el valor del ancho y establecer el tamaño de la carta
    let width = document.getElementById("width").value;
    document.getElementById("card").style.width = width + "px";

    // Leer el valor del alto y establecer el tamaño de la carta
    let height = document.getElementById("height").value;
    document.getElementById("card").style.height = height + "px";
  }

  changeCard();
};

setInterval(function() {
  location.reload();
}, 10000);

console.log("Hello Rigo from the console!");
