let nav = document.querySelector("nav");
let opacityObjImg = document.querySelectorAll(".opacity-img");
let opacityObjText = document.querySelectorAll(".opacity-text");

document.addEventListener("scroll", event => {
  let position = document.querySelector("body").getBoundingClientRect();
  let screenHeight = document.documentElement.clientHeight;

  if (position.y < 0) {
    nav.className = "active";
  } else {
    nav.className = "";
  }

  opacityObjImg.forEach(element => {
    let elementPos = element.getBoundingClientRect();

    if (elementPos.y <= screenHeight / 2 || elementPos.bottom <= screenHeight) {
      element.style.opacity = "1";
    }
  });

  opacityObjText.forEach(element => {
    let elementPos = element.getBoundingClientRect();

    if (elementPos.y <= screenHeight / 2 || elementPos.bottom <= screenHeight) {
      element.className = "opacity-none";
    }
  });
  console.log(document.documentElement.clientHeight);
});
