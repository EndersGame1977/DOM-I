const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav items
const navItem = document.querySelectorAll("nav a");
navItem[0].textContent = siteContent["nav"]["nav-item-1"]; //Services
navItem[1].textContent = siteContent["nav"]["nav-item-2"]; //Product
navItem[2].textContent = siteContent["nav"]["nav-item-3"]; //Vision
navItem[3].textContent = siteContent["nav"]["nav-item-4"]; //Features
navItem[4].textContent = siteContent["nav"]["nav-item-5"]; //About
navItem[5].textContent = siteContent["nav"]["nav-item-6"]; //Contact

//nav img
const logoImg = document.querySelector("header img");
logoImg.setAttribute("src", siteContent["nav"]["img-src"]); //logo.png

//nav items green
navItem.forEach(item => item.style.color = "green");

//nav prepend and appendChild
const appendKid = document.createElement("a");
appendKid.textContent = "appendChild";
document.querySelector("nav").appendChild(appendKid);
const prepend = document.createElement("a");
prepend.textContent = "prepend";
document.querySelector("nav").prepend(prepend);

//cta
const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent["cta"]["h1"]; //DOM Is Awesome

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector(".cta img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]); //header-img.png

//main-content
const mainH4 = document.querySelectorAll(".text-content h4");
mainH4[0].textContent = siteContent["main-content"]["features-h4"]; //Features
mainH4[1].textContent = siteContent["main-content"]["about-h4"]; //About
mainH4[2].textContent = siteContent["main-content"]["services-h4"]; //Services
mainH4[3].textContent = siteContent["main-content"]["product-h4"]; //Poduct
mainH4[4].textContent = siteContent["main-content"]["vision-h4"]; //Vision

const mainP = document.querySelectorAll(".text-content p");
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.querySelector(".main-content img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//contact
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"]; //Contact

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"]; //123 Way 456 Street Somewhere, USA
contactP[1].textContent = siteContent["contact"]["phone"]; //1 (888) 888-8888
contactP[2].textContent = siteContent["contact"]["email"]; //sales@greatidea.io

//footer
const footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"] //Copyright Great Idea! 2018
