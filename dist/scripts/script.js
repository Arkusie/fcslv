const menuButton = document.getElementById("menu-container");

const droneBtn = document.getElementById("droneBtn");
const cameraBtn = document.getElementById("cameraBtn");
// const aboutBtn = document.getElementById("aboutBtn");
const navMenu = document.getElementById("nav-list");
const menuStripe1 = document.getElementById("stripe1");
const menuStripe2 = document.getElementById("stripe2");
const menuStripe3 = document.getElementById("stripe3");

const droneContent = document.getElementById("grid-drone");
const cameraContent = document.getElementById("grid-camera");

cameraContent.style.display = "none";
// listeners
droneBtn.addEventListener("click", droneContentDisplay);
cameraBtn.addEventListener("click", cameraContentDisplay);
menuButton.addEventListener("click", ToggleMenu);
//

function droneContentDisplay() {
  droneBtn.classList.add("current-page");
  cameraBtn.classList.remove("current-page");
  cameraContent.style.display = "none";
  droneContent.style.display = "";
}
function cameraContentDisplay() {
  droneBtn.classList.remove("current-page");
  cameraBtn.classList.add("current-page");
  droneContent.style.display = "none";
  cameraContent.style.display = "";
  console.log("kek");
}

function ToggleMenu() {
  navMenu.classList.toggle("toggleNav");
  menuStripe1.classList.toggle("toggleMenu");
  menuStripe2.classList.toggle("toggleMenu");
  menuStripe3.classList.toggle("toggleMenu");
}
