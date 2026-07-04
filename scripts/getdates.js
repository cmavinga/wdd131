// const currentYear = document.querySelector("#currentyear");
// const currentYear = document.getElementById("currentyear");
const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;