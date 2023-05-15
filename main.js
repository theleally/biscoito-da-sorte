const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookie = document.querySelector(".cookie");
const openCookieBtn = document.querySelector("#open__cookie");
const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
];
let randomPhrase = Math.round(Math.random() * 1);

const toggle = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

const handleClickCookie = () => {
  toggle();
  screen2.querySelector("p").innerText = phrases[randomPhrase];
};

const handleClickOpenCookie = () => {
  toggle();
  randomPhrase = Math.round(Math.random() * 1);
};

cookie.addEventListener("click", handleClickCookie);
openCookieBtn.addEventListener("click", handleClickOpenCookie);
