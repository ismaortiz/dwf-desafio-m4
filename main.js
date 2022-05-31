let anima = document.querySelectorAll(".header__nav__hambut--lines");
let menu = document.querySelector(".header__nav__menu");
let body = document.querySelector("body");
const boton = document.querySelector(".header__nav__hambut");

let subtitles = document.querySelectorAll(".myservices__subtitles");
// let descriptions = document.querySelectorAll(".myservices__par");
let imgs = document.querySelectorAll(".myservices__icons");

function loadPro(data) {
  const textData = data["items"];
  const mediaData = data["includes"]["Asset"];
  for (let i = 0; i < subtitles.length; i++) {
    subtitles[i].textContent = textData[i]["fields"]["projectTitle"];
    // descriptions[i].textContent = textData[i]["fields"]["projectDescription"];
    imgs[i].src = mediaData[i]["fields"]["file"]["url"];
  }
}

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
  fetch(
    "https://cdn.contentful.com/spaces/ckd7g74pb4a1/environments/master/entries?access_token=1pG9l9Oou2_WGwenhIUUNn3mF2su2ElYYTXuwu-2dnY&content_type=services"
  )
    .then((data) => data.json())
    .then((data) => loadPro(data));
}
main();
