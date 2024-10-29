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

const input = document.getElementById("input");
input.addEventListener("click", function () {
  input.style.border = "none";
});
