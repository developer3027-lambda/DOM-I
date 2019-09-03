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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//get all the anchor tags on the document
document.getElementsByTagName('a');

//get all the anchor tags on the document
document.querySelectorAll('a');

//set the nav anchor tags to a variable
const aNav = document.querySelectorAll('nav a');

//Use new nav variable to set text in nav anchor
aNav[0].textContent = 'Services';
aNav[1].textContent = 'Product';
aNav[2].textContent = 'Vision';
aNav[3].textContent = 'Features';
aNav[4].textContent = 'About';
aNav[5].textContent = 'Contact';

//Header section *************************************
//get cta img and assign to variable
const ctaImg = document.querySelector('#cta-img');
//replace the cta img
ctaImg.setAttribute('src','img/header-img.png');
//get the header h1 text
const ctaInfoH1 = document.querySelector('.cta-text h1');
//set the header h1 text
ctaInfoH1.textContent = 'DOM Is Awesome';
//get the header button
const ctaButtonTxt = document.querySelector('.cta-text button');
//set the button text
ctaButtonTxt.textContent = 'Get Started';

//Top Section *********************************************
//get the h4 of the section in an node list
const topH4 = document.querySelectorAll('.top-content h4');
//set the features h4 in index 0
topH4[0].textContent = 'Features';
//set the about h4 in index 1
topH4[1].textContent = 'About';

//get the p tag of the top section in node list
const topInfo = document.querySelectorAll('.top-content p');
//set the features p text
topInfo[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
//set the about p text
topInfo[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Accent img *************************************************
//get the img in main section
const mainImg1 = document.querySelector('#middle-img');
//set the accent img in main section
mainImg1.setAttribute('src','img/mid-page-accent.jpg');

//Bottom section ************************************************
//get the h4 of the section in an node list
const bottomH4 = document.querySelectorAll('.bottom-content h4');
//get the p tag of the section in an node list
const bottomInfo = document.querySelectorAll('.bottom-content p');
//set the text of H tags in section
bottomH4[0].textContent = 'Services';
bottomH4[1].textContent = 'Product';
bottomH4[2].textContent = 'Vision';
//set the p tags of each 
bottomInfo[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomInfo[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomInfo[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Contact Section *******************************************
//get the contact h tag
const contactH4 = document.querySelector('.contact h4');
//get contact p tag in node list
const contactInfo = document.querySelectorAll('.contact p');

//set the h4 text
contactH4.textContent = 'Contact';
//set the 1st p tag
contactInfo[0].textContent = '123 Way 456 Street Somewhere, USA';
//set the 2nd p tag
contactInfo[1].textContent = '1 (888) 888-8888';
//set the 3rd p tag
contactInfo[2].textContent = 'sales@greatidea.io';

//footer *****************************************************
