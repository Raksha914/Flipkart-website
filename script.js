const loginButton = document.getElementById("login-button");
const angleDown = document.getElementById("angle-down");
const angleUp = document.getElementById("angle-up");
const dropdown = document.getElementById("dropdown");
const dots = document.getElementById("dots");
const dropdownoflists = document.getElementById("dropdown-of-lists");

loginButton.addEventListener("mouseenter", () => {
  angleDown.style.display = "none";
  angleUp.style.display = "inline";
  dropdown.style.display = "block";
});

loginButton.addEventListener("mouseleave", () => {
  angleDown.style.display = "inline";
  angleUp.style.display = "none";
  dropdown.style.display = "none";
});

dropdown.addEventListener("mouseenter", () => {
  dropdown.style.display = "block";
  angleDown.style.display = "none";
  angleUp.style.display = "inline";
});

dropdown.addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
  angleDown.style.display = "inline";
  angleUp.style.display = "none";
});

dots.addEventListener("mouseover", () => {
  dropdownoflists.style.display = "block";
  dots.style.width = "35px";
  dots.style.height = "35px";
});

dots.addEventListener("mouseleave", () => {
  dropdownoflists.style.display = "none";
});

document.getElementById("login-btn").addEventListener("click", function () {
  window.location.href = "login/login.html"; // Replace with the actual file path
});

const image1 = document.getElementById("image1");
image1.addEventListener("click", () => {
  window.open("https://tinyurl.com/2c5pvsc3", "_self");
});

const image2 = document.getElementById("image2");
image2.addEventListener("click", () => {
  window.open("https://tinyurl.com/2aoqal2n", "_self");
});

const image3 = document.getElementById("image3");
image3.addEventListener("click", () => {
  window.open("https://tinyurl.com/26egdbvp", "_self");
});

const image4 = document.getElementById("image4");
image4.addEventListener("click", () => {
  window.open("https://tinyurl.com/2b9sye9c", "_self");
});

const image5 = document.getElementById("image5");
image5.addEventListener("click", () => {
  window.open("https://tinyurl.com/28knrpzr", "_self");
});

const image6 = document.getElementById("image6");
image6.addEventListener("click", () => {
  window.open("https://tinyurl.com/2dfsh272", "_self");
});

const image7 = document.getElementById("image7");
image7.addEventListener("click", () => {
  window.open("https://tinyurl.com/29wm5qly", "_self");
});

const image8 = document.getElementById("image8");
image8.addEventListener("click", () => {
  window.open("https://tinyurl.com/26dvyu6t", "_self");
});

const image9 = document.getElementById("image9");
image9.addEventListener("click", () => {
  window.open("https://tinyurl.com/2dfsh272", "_self");
});

const image10 = document.getElementById("image10");
image10.addEventListener("click", () => {
  window.open("https://tinyurl.com/28knrpzr", "_self");
});

const image11 = document.getElementById("image11");
image11.addEventListener("click", () => {
  window.open("https://tinyurl.com/26oksx6w", "_self");
});

const image12 = document.getElementById("image12");
image12.addEventListener("click", () => {
  window.open("https://tinyurl.com/28knrpzr", "_self");
});

const productitem1 = document.getElementById("product-item1");
productitem1.addEventListener("click", () => {
  window.open("https://tinyurl.com/2akvpgug"), "_self";
});

const productitem2 = document.getElementById("product-item2");
productitem2.addEventListener("click", () => {
  window.open("https://tinyurl.com/293veeve"), "_self";
});

const productitem3 = document.getElementById("product-item3");
productitem3.addEventListener("click", () => {
  window.open("https://tinyurl.com/2ao5eayk"), "_self";
});

const productitem4 = document.getElementById("product-item4");
productitem4.addEventListener("click", () => {
  window.open("https://tinyurl.com/268euy7z"), "_self";
});

const productitem5 = document.getElementById("product-item5");
productitem5.addEventListener("click", () => {
  window.open("https://tinyurl.com/296dzz5f"), "_blank";
});

const section2image = document.getElementById("section2-image");
section2image.addEventListener("click", () => {
  window.open("https://tinyurl.com/2cqzcdmd");
});
