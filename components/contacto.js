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
  const form = document.querySelector(".contact__form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const to = "isma297396@gmail.com";
    const name = e.target["name"].value;
    const from = e.target["mail"].value;
    const message = e.target["message"].value;
    const request = fetch(`https://apx-api.vercel.app/api/utils/dwf`, {
      method: "POST",
      body: JSON.stringify({ name, from, to, message }),
      headers: { "content-type": "application/json" },
    }).then((response) => console.log(response));
  });
}
main();
