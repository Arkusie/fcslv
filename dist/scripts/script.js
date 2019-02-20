const menuButton = document.getElementById("menu-container");
menuButton.addEventListener("click", ToggleMenu);

// const droneBtn = document.getElementById("droneBtn");
// const cameraBtn = document.getElementById("cameraBtn");
// const aboutBtn = document.getElementById("aboutBtn");
const navMenu = document.getElementById("nav");
const menuStripe1 = document.getElementById("stripe1");
const menuStripe2 = document.getElementById("stripe2");
const menuStripe3 = document.getElementById("stripe3");

droneBtn.addEventListener("click", activeDroneContent);

function activeDroneContent() {
  console.log("kek");
}

function ToggleMenu() {
  navMenu.classList.toggle("toggleNav");
  menuStripe1.classList.toggle("toggleMenu");
  menuStripe2.classList.toggle("toggleMenu");
  menuStripe3.classList.toggle("toggleMenu");
}
