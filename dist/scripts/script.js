const menuButton = document.getElementById("menu-container");
const droneBtn = document.getElementById("droneBtn");
const cameraBtn = document.getElementById("cameraBtn");
const aboutBtn = document.getElementById("aboutBtn");

let isDrone = true;
let isCamera = false;
let isAbout = false;

const navMenu = document.getElementById("nav-list");
const menuStripe1 = document.getElementById("stripe1");
const menuStripe2 = document.getElementById("stripe2");
const menuStripe3 = document.getElementById("stripe3");
const curtainCamera = document.getElementById("curtain-camera");
const curtainDrone = document.getElementById("curtain-drone");

const droneContent = document.getElementById("grid-drone");
const cameraContent = document.getElementById("grid-camera");
const aboutContent = document.getElementById("about-container");
// modal
const modal = document.getElementById("modal-container");
const modalBtn = document.getElementById("modal-off");
const gridPic = document.querySelectorAll(".picture");
const imgModal = document.getElementById("img-fluid");
let picClickedSrc;
// listeners
droneBtn.addEventListener("click", droneContentDisplay);
cameraBtn.addEventListener("click", cameraContentDisplay);
aboutBtn.addEventListener("click", aboutContentDisplay);
menuButton.addEventListener("click", ToggleMenu);
// modal listeners
modalBtn.addEventListener("click", modalOff);

gridPic.forEach(pic => {
  pic.addEventListener("click", modalOn);
});
//

//modal
function modalOn() {
  modal.style.visibility = "visible";
  modal.classList.toggle("modalAnimationOn");

  picClickedSrc = this.src;
  console.log(picClickedSrc);
  imgModal.src = picClickedSrc;
}

function modalOff() {
  modal.style.visibility = "hidden";
  modal.classList.toggle("modalAnimationOn");
}

function droneContentDisplay() {
  if (!isDrone) {
    curtainCamera.classList.remove("curtainOff");
    curtainDrone.classList.add("curtainOff");

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
    curtainCamera.classList.add("curtainOff");
    curtainDrone.classList.remove("curtainOff");

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
    curtainCamera.classList.add("curtainOff");
    curtainDrone.classList.add("curtainOff");

    droneContent.classList.add("toggleGallery");
    cameraContent.classList.add("toggleGallery");
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
