const menuButton = document.getElementById("menu-container");
const droneBtn = document.getElementById("droneBtn");
const cameraBtn = document.getElementById("cameraBtn");
const aboutBtn = document.getElementById("aboutBtn");

const navMenu = document.getElementById("nav-list");
const menuStripe1 = document.getElementById("stripe1");
const menuStripe2 = document.getElementById("stripe2");
const menuStripe3 = document.getElementById("stripe3");

const droneContent = document.getElementById("grid-drone");
const cameraContent = document.getElementById("grid-camera");
const aboutContent = document.getElementById("about-container");

// listeners
droneBtn.addEventListener("click", droneContentDisplay);
cameraBtn.addEventListener("click", cameraContentDisplay);
aboutBtn.addEventListener("click", aboutContentDisplay);
menuButton.addEventListener("click", ToggleMenu);
// //

let isDrone = true;
let isCamera = false;
let isAbout = false;

function droneContentDisplay() {
  if (!isDrone) {
    droneContent.classList.remove("toggleGallery");
    cameraContent.classList.add("toggleGallery");
    aboutContent.classList.add("toggleGallery");
    droneBtn.classList.add("current-page");
    cameraBtn.classList.remove("current-page");
    aboutBtn.classList.remove("current-page");
    isCamera = false;
    isDrone = true;
    isAbout = false;
  }
}
function cameraContentDisplay() {
  if (!isCamera) {
    droneContent.classList.add("toggleGallery");
    cameraContent.classList.remove("toggleGallery");
    aboutContent.classList.add("toggleGallery");
    droneBtn.classList.remove("current-page");
    cameraBtn.classList.add("current-page");
    aboutBtn.classList.remove("current-page");
    isCamera = true;
    isDrone = false;
    isAbout = false;
  }
}
function aboutContentDisplay() {
  if (!isAbout) {
    droneContent.classList.add("toggleGallery");
    cameraContent.classList.add("toggleGallery");
    // about got reversed due to visivility instead of display
    aboutContent.classList.remove("toggleGallery");
    droneBtn.classList.remove("current-page");
    cameraBtn.classList.remove("current-page");
    aboutBtn.classList.add("current-page");
    isCamera = false;
    isDrone = false;
    isAbout = true;
  }
}

function ToggleMenu() {
  navMenu.classList.toggle("toggleNav");
  menuStripe1.classList.toggle("toggleMenu");
  menuStripe2.classList.toggle("toggleMenu");
  menuStripe3.classList.toggle("toggleMenu");
}
