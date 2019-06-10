let nav = document.querySelector("nav");
let opacityObjImg = document.querySelectorAll(".opacity-img");
let opacityObjText = document.querySelectorAll(".opacity-text");
let carouselContents = document.querySelectorAll(".carousel .cont");
let carouselStatus = document.querySelectorAll(".carousel-status-bar div");
let carouselLeftButton = document.querySelector(".left-button");
let carouselRightButton = document.querySelector(".right-button");
let backDrop = document.querySelector(".back-drop");
let drawer = document.querySelector("nav .drawer");
let menuButton = document.querySelector("#menu-button");
let boll = false;
let carouselIndex = 0;

backDrop.addEventListener("click", function() {
  drawer.style.transform = "translate(-100%)";
  backDrop.style.display = "none";
});

menuButton.addEventListener("click", function() {
  boll = !boll;

  if (boll) {
    drawer.style.transform = "translateX(0)";
    backDrop.style.display = "block";
  } else {
    drawer.style.transform = "translate(-100%)";
  }
});

document.addEventListener("scroll", () => {
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

carouselRightButton.addEventListener("click", () => changeSlide(1, false));
carouselLeftButton.addEventListener("click", () => changeSlide(-1, false));

function changeSlide(number, index) {
  index ? (carouselIndex = index) : (carouselIndex = carouselIndex + number);

  if (carouselIndex === 0 || carouselIndex === "0") {
    carouselLeftButton.disabled = true;
  } else if (carouselIndex === 2 || carouselIndex === "2") {
    carouselRightButton.disabled = true;
  } else {
    carouselRightButton.disabled = false;
    carouselLeftButton.disabled = false;
  }

  for (let i = 0; i < carouselContents.length; i++) {
    carouselContents[i].className = "cont";
    carouselContents[carouselIndex].className = "cont active";
  }
  for (let i = 0; i < carouselStatus.length; i++) {
    carouselStatus[i].className = "";
    carouselStatus[carouselIndex].className = "active";
  }
  console.log(carouselIndex);
}

carouselStatus.forEach(element => {
  element.addEventListener("mousedown", () => {
    let index = element.getAttribute("data-value");
    changeSlide(null, index);
  });
});
