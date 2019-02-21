const menuButton = document.getElementById("menu-container");
const droneBtn = document.getElementById("droneBtn");
const cameraBtn = document.getElementById("cameraBtn");

const navMenu = document.getElementById("nav-list");
const menuStripe1 = document.getElementById("stripe1");
const menuStripe2 = document.getElementById("stripe2");
const menuStripe3 = document.getElementById("stripe3");

const droneContent = document.getElementById("grid-drone");
const cameraContent = document.getElementById("grid-camera");

// listeners
droneBtn.addEventListener("click", droneContentDisplay);
cameraBtn.addEventListener("click", cameraContentDisplay);
menuButton.addEventListener("click", ToggleMenu);
// //

let isDrone = true;
let isCamera = false;
let isAbout = false;

function droneContentDisplay() {
  if (!isDrone) {
    droneContent.classList.toggle("toggleGallery");
    cameraContent.classList.toggle("toggleGallery");
    droneBtn.classList.toggle("current-page");
    cameraBtn.classList.toggle("current-page");
    isCamera = false;
    isDrone = true;
    isAbout = false;
  }
}
function cameraContentDisplay() {
  if (!isCamera) {
    droneContent.classList.toggle("toggleGallery");
    cameraContent.classList.toggle("toggleGallery");
    droneBtn.classList.toggle("current-page");
    cameraBtn.classList.toggle("current-page");
    isCamera = true;
    isDrone = false;
    isAbout = false;
  }
}

function ToggleMenu() {
  navMenu.classList.toggle("toggleNav");
  menuStripe1.classList.toggle("toggleMenu");
  menuStripe2.classList.toggle("toggleMenu");
  menuStripe3.classList.toggle("toggleMenu");
}
