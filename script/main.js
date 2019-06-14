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
let buttonMore = document.querySelectorAll(".more");
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
    for (let i = 0; i < carouselContents.length; i++) {
      carouselContents[i].className = "cont";
      carouselContents[index].className = "cont active";
    }
    for (let i = 0; i < carouselStatus.length; i++) {
      carouselStatus[i].className = "";
      carouselStatus[index].className = "active";
    }
    carouselIndex = parseInt(index);

    if (carouselIndex === 0) {
      carouselLeftButton.disabled = true;
    } else if (carouselIndex === 2) {
      carouselRightButton.disabled = true;
    } else {
      carouselRightButton.disabled = false;
      carouselLeftButton.disabled = false;
    }
  });
});

buttonMore.forEach(element => {
  element.addEventListener("click", function() {
    let mains = document.querySelectorAll("main");
    let content = document.getElementById(element.getAttribute("data-page"));
    mains.forEach(element => {
      element.className = "";
    });
    content.className = "active";
    window.scrollTo(0, 0);
  });
});
const input = document.querySelectorAll("form input");
const label = document.querySelectorAll("form label");

let textarea = document.querySelector("form textarea");
let linkMailto = document.querySelector("form a");

//----------------------------User-information----------------------------
let username = "";
let userSurname = "";
let userAddress = "";
let userEmail = "";
let userText = "";
//------------------------------------------------------------------------

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", function(event) {
    let labelAddress = "label-" + event.path[0].id; // for find label

    if (this.value.length > 0) {
      document.getElementById(labelAddress).style.visibility = "visible";
    } else if (this.value.length == 0) {
      document.getElementById(labelAddress).style.visibility = "hidden";
    }

    if (event.path[0].id == "name") {
      username = this.value;
      console.log(username);
    } else if (event.path[0].id == "surname") {
      userSurname = this.value;
      console.log(userSurname);
    } else if (event.path[0].id == "address") {
      userAddress = this.value;
      console.log(userAddress);
    } else if (event.path[0].id == "email") {
      userEmail = this.value;
      console.log(userEmail);
    }
  });
}

textarea.addEventListener("input", function() {
  userText = this.value;
  console.log(userText);
});

linkMailto.addEventListener("click", function() {
  linkMailto.href = "mailto:nurjigit.melis.uulu@gmail.com?subject=" + userText;

  console.log(linkMailto.href);
});
console.log(linkMailto.href);
