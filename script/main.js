let nav = document.querySelector("nav");
let opacityObjImg = document.querySelectorAll(".opacity-img");
let opacityObjText = document.querySelectorAll(".opacity-text");

document.addEventListener("scroll", event => {
  let position = document.querySelector("body").getBoundingClientRect();

  if (position.y < 0) {
    nav.className = "active";
  } else {
    nav.className = "";
  }

  opacityObjImg.forEach(element => {
    let elementPos = element.getBoundingClientRect();

    if (elementPos.y >= position.height / 2) {
      element.style.opacity = "1";
    }
  });

  opacityObjText.forEach(element => {
    let elementPos = element.getBoundingClientRect();

    if (elementPos.y >= position.height / 2) {
      element.className = "opacity-none";
    }
  });
});
