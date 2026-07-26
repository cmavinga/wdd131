const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;

const temples = [
     {
    templeName: "Kinshasa DR Congo",
    location: "Kinshasa DR Congo",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Nairobi Kenya",
    location: "Nairobi Kenya",
    dedicated: "2025, May, 18",
    area: 19870,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
  },
 
  {
    templeName: "Paris France",
    location: "Paris France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
];

function createTempleCard(filteredTemples) {
    document.querySelector(".card-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    
    let name = document.createElement("h2");
    name.textContent = temple.templeName;
    card.appendChild(name);

    let location = document.createElement("p");
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
    card.appendChild(location); 

    let dedication = document.createElement("p");
    dedication.innerHTML = `<span class="label">Dedication: </span>${temple.dedicated}`;
    card.appendChild(dedication); 

    let area = document.createElement("p");
    area.innerHTML = `<span class="label">Area: </span>${temple.area} sq ft`;
    card.appendChild(area); 

    let image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", 300);
    image.setAttribute("height", 200);
    card.appendChild(image);

    document.querySelector(".card-grid").appendChild(card);
}); 
}

createTempleCard(temples);

const oldLink = document.querySelector("#oldtemple")
oldLink.addEventListener("click", () => {
    let oldtemple = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });

    document.querySelector(".card-grid").innerHTML = ""; 
    createTempleCard(oldtemple);
});

const newLink = document.querySelector("#newtemple")
newLink.addEventListener("click", () => {
    let newtemple = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });

    document.querySelector(".card-grid").innerHTML = ""; 
    createTempleCard(newtemple);
});

const largeLink = document.querySelector("#largetemple")
largeLink.addEventListener("click", () => {
  let largetemple = temples.filter(temple => temple.area > 90000);
  document.querySelector(".card-grid").innerHTML = ""; 
  createTempleCard(largetemple);
})

const smallLink = document.querySelector("#smalltemple");
smallLink.addEventListener("click", () => {
  let smalltemple = temples.filter(temple => temple.area < 10000);
  document.querySelector(".card-grid").innerHTML = ""; 
  createTempleCard(smalltemple);
})

const homeLink = document.querySelector("#home")
homeLink.addEventListener("click", () => {
  document.querySelector(".card-grid").innerHTML = ""; 
  createTempleCard(temples);
});


















// const new = document.querySelector("#new");
// new.addEventListener("click" , () => {
//     const newTemple = temples.filter(temple => {
//     const year = parseInt(temple.dedicated.split(",")[0]);
//     return year > 2000;
// })


