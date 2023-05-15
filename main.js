const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookie = document.querySelector(".cookie");
const openCookieBtn = document.querySelector("#open__cookie");

const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
];

let randomPhrase = Math.round(Math.random() * phrases.length - 1);

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
  randomPhrase = Math.round(Math.random() * phrases.length - 1);
};

const handleEnterDocument = (e) => {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleClickOpenCookie();
  } else if (e.key = "Enter" && screen2.classList.contains("hide")) {
    handleClickCookie();
  }
}

cookie.addEventListener("click", handleClickCookie);
openCookieBtn.addEventListener("click", handleClickOpenCookie);
document.addEventListener("keydown", handleEnterDocument);
