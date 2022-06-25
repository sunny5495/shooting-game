"use strict";
let playerWin = document.querySelector(".player--win");
let score1el = document.querySelector(".score--1");
let score2el = document.querySelector(".score--2");
let healthPl1 = document.querySelector(".healthPl--1");
let healthPl2 = document.querySelector(".healthPl--2");
const btnFir = document.querySelector(".btn--Fir");
let power1 = document.querySelector(".pwr1");
let power2 = document.querySelector(".pwr2");
let win1 = document.querySelector(".win1");
let win2 = document.querySelector(".win2");
let win = 0;
const winner = [win, win];
console.log(winner);
console.log(score1el);

let curScore = 0;
let activePlayer = 1;
const healthRecover1 = 10;
const healthRecover2 = 10;

const recover = function () {
  healthPl1 = healthRecover1;
  healthPl2 = healthRecover2;
  score2el.textContent = healthPl2;
  score1el.textContent = healthPl1;
  power1.textContent = 0;
  power2.textContent = 0;
};

recover();

//shooting function
btnFir.addEventListener("click", shoot);
function shoot() {
  let hit = Math.trunc(Math.random() * 6);
  curScore = hit;
  console.log(curScore);

  //switch player
  if (activePlayer === 1) {
    power1.textContent = curScore;
    healthPl2 = healthPl2 - curScore;
    console.log(healthPl2);
    score2el.textContent = healthPl2;
    if (healthPl2 <= 0) {
      recover();
      winner[0] += 1;
      win1.textContent = winner[0];
      win2.textContent = winner[1];
      console.log("player 1 win");
      console.log(winner);
    }
    activePlayer = 2;
  } else {
    power2.textContent = curScore;
    healthPl1 = healthPl1 - curScore;
    console.log(healthPl1);
    score1el.textContent = healthPl1;
    if (healthPl1 <= 0) {
      recover();
      winner[1] += 1;
      win2.textContent = winner[1];
      win1.textContent = winner[0];
      console.log("player 2 win");
      console.log(winner);
    }
    activePlayer = 1;
  }

  if (winner[0] === 3) {
    openPopup("player 1");
  } else if (winner[1] === 3) {
    openPopup("player 2");
  } else closePopup.addEventListener("click", closePopupAdd);
}
//popup function start
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close-popup");

const openPopup = function (val) {
  popup.classList.remove("hidden");
  playerWin.textContent = val;
};

//popup function end

const closePopupAdd = function () {
  popup.classList.add("hidden");
  (function () {
    recover();
    win2.textContent = 0;
    win1.textContent = 0;
    power1.textContent = 0;
    power2.textContent = 0;
  })();
};
