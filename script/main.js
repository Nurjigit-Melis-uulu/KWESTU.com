let nav = document.querySelector("nav");

document.addEventListener("scroll", event => {
  let position = document.querySelector("body").getBoundingClientRect();
  if (position.y < 0) {
    nav.className = "active";
  } else {
    nav.className = "";
  }
});
