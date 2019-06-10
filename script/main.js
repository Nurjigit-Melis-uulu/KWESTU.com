let nav = document.querySelector("nav");
let opacityObjImg = document.querySelectorAll(".opacity-img");
let opacityObjText = document.querySelectorAll(".opacity-text");
let carouselContents = document.querySelectorAll(".carousel .content");
let carouselStatus = document.querySelectorAll(".carousel-status-bar div");
let carouselLeftButton = document.querySelector(".left-button");
let carouselRightButton = document.querySelector(".right-button");
let carouselIndex = 0;

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

carouselRightButton.addEventListener("click", () => changeSlide(1));
carouselLeftButton.addEventListener("click", () => changeSlide(-1));

function changeSlide(number) {
  carouselIndex = carouselIndex + number;

  if (carouselIndex === 0) {
    carouselLeftButton.disabled = true;
  } else if (carouselIndex === 2) {
    carouselRightButton.disabled = true;
  } else {
    carouselRightButton.disabled = false;
    carouselLeftButton.disabled = false;
  }

  for (let i = 0; i < carouselContents.length; i++) {
    carouselContents[i].className = "content";
    carouselContents[carouselIndex].className = "content active";
  }
  for (let i = 0; i < carouselStatus.length; i++) {
    carouselStatus[i].className = "";
    carouselStatus[carouselIndex].className = "active";
  }
  console.log(carouselIndex);
}
