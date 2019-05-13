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

//Images
let middleImg = document.getElementById("middle-img");
middleImg.src = "/img/mid-page-accent.jpg";

let headerImg = document.getElementById("cta-img");
headerImg.src = "/img/header-img.png";

let logoImg = document.getElementById("logo-img");
logoImg.src = "/img/logo.png";

//Nav
let navLinks = document.getElementsByTagName("a");
navLinks[0].innerHTML = "Services";
navLinks[1].innerHTML = "Product";
navLinks[2].innerHTML = "Vision";
navLinks[3].innerHTML = "Features";
navLinks[4].innerHTML = "About";
navLinks[5].innerHTML = "Contact";

//cta

let cta = document.getElementsByTagName("h1")[0];
cta.innerHTML = "dom is awesome";
let getStarted = document.getElementsByTagName("button")[0];
getStarted.innerHTML = "Get Started";

//text content
let mainContentHeadFeature = document.getElementsByClassName("text-content")[0].getElementsByTagName("h4")[0];
mainContentHeadFeature.innerHTML = "Features";
let mainContentParaFeature = document.getElementsByClassName("text-content")[0].getElementsByTagName("p")[0];
mainContentParaFeature.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let mainContentHeadAbout = document.getElementsByClassName("text-content")[1].getElementsByTagName("h4")[0];
mainContentHeadAbout.innerHTML = "About";
let mainContentParaAbout = document.getElementsByClassName("text-content")[1].getElementsByTagName("p")[0];
mainContentParaAbout.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let mainContentHeadServices = document.getElementsByClassName("text-content")[2].getElementsByTagName("h4")[0];
mainContentHeadServices.innerHTML = "Services";
let mainContentParaServices = document.getElementsByClassName("text-content")[2].getElementsByTagName("p")[0];
mainContentParaServices.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let mainContentHeadProduct = document.getElementsByClassName("text-content")[3].getElementsByTagName("h4")[0];
mainContentHeadProduct.innerHTML = "Product";
let mainContentParaProduct = document.getElementsByClassName("text-content")[3].getElementsByTagName("p")[0];
mainContentParaProduct.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let mainContentHeadVision = document.getElementsByClassName("text-content")[4].getElementsByTagName("h4")[0];
mainContentHeadVision.innerHTML = "Vision";
let mainContentParaVision = document.getElementsByClassName("text-content")[4].getElementsByTagName("p")[0];
mainContentParaVision.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

//contact
let contactHead = document.getElementsByClassName("contact")[0].getElementsByTagName("h4")[0];
contactHead.innerHTML = "Contact";
let contactPara0 = document.getElementsByClassName("contact")[0].getElementsByTagName("p")[0];
contactPara0.innerHTML = "123 Way 456 Street<br>Someware USA";

let contactPara1 = document.getElementsByClassName("contact")[0].getElementsByTagName("p")[1];
contactPara1.innerHTML = "1-888-888-8888";

let contactPara2 = document.getElementsByClassName("contact")[0].getElementsByTagName("p")[2];
contactPara2.innerHTML = "myemail@myemail.com";