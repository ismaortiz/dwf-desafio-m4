let anima = document.querySelectorAll(".header__nav__hambut--lines");
let menu = document.querySelector(".header__nav__menu");
let body = document.querySelector("body");
const boton = document.querySelector(".header__nav__hambut");

function main() {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    anima.forEach((item) => item.classList.toggle("change"));
    menu.classList.toggle("header__nav__menu--show");
    body.classList.toggle("stuck");
  });
}
main();

// let titles = document.querySelectorAll(".pro-item-title");
// let descriptions = document.querySelectorAll(".pro-item-description");
// let imgs = document.querySelectorAll(".pro-item-img");

// function loadPro(data) {
//   const textData = data["items"];
//   const mediaData = data["includes"]["Asset"];
//   for (let i = 0; i < titles.length; i++) {
//     titles[i].textContent = textData[i]["fields"]["projectTitle"];
//     descriptions[i].textContent = textData[i]["fields"]["projectDescription"];
//     imgs[i].src = mediaData[i]["fields"]["file"]["url"];
//   }
// }
// async function main() {
//   await fetch(
//     "https://cdn.contentful.com/spaces/ckd7g74pb4a1/environments/master/entries?access_token=1pG9l9Oou2_WGwenhIUUNn3mF2su2ElYYTXuwu-2dnY"
//   )
//     .then((data) => data.json())
//     .then((data) => loadPro(data));
// }
// main();
