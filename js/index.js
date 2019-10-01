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

const navLink = document.getElementsByTagName('a');
navLink[0].textContent='Services';
navLink[1].textContent='Product';
navLink[2].textContent='Vision';
navLink[3].textContent='Features';
navLink[4].textContent='About';
navLink[5].textContent='Contact';

const mainImg = document.querySelector('#cta-img');
mainImg.src='./img/header-img.png';
mainImg.alt='CTA Image'

const title = document.querySelector('h1');
title.textContent='Dom is Awesome';

const ctaButton = document.querySelector('button');
ctaButton.textContent='Get Started'

const subTitle = document.getElementsByTagName('h4');
subTitle[0].textContent='Features'
subTitle[1].textContent='About'
subTitle[2].textContent='Services'
subTitle[3].textContent='Product'
subTitle[4].textContent='Vision'
subTitle[5].textContent='Contact'

const pInfo = document.querySelectorAll('p');
console.log(pInfo);
pInfo[0].textContent='Features: Outer space exists because its afraid to be on the same planet with Chuck Norris. Chuck Norris designed his own DNA Crop circles are Chuck Norris way of telling the world that sometimes corn needs to lie down If you spell Chuck Norris in Scrabble, you win. Forever, There is no theory of evolution. Just a list of animals Chuck Norris allows to live, If you spell Chuck Norris in Scrabble, you win. Forever.'
pInfo[1].textContent="About: Chuck Norris doesn't read books. He stares them down until he gets the information he wants, What was going through the minds of all of Chuck Norris' victims before they died? His shoe, When Chuck Norris was 8, he said 1+1 was five and he was right The Great Wall of China was originally created to keep Chuck Norris out."
pInfo[2].textContent="Services: Chuck Norris can lead a horse to water AND make it drink. Chuck Norris is my Homeboy, The chief export of Chuck Norris is Pain. Most people have 23 pairs of chromosomes. Chuck Norris has 72... and they're all poisonous, Remember the Soviet Union?"
pInfo[3].textContent="Product: They decided to quit after watching a DeltaForce marathon on Satellite TV Chuck Norris spelled backwards is pain, Chuck Norris' hand is the only hand that can beat a Royal Flush, Only Chuck Norris is stronger than an Altoid, Chuck Norris can make rock covers of Enya."
pInfo[4].textContent="Vision: Chuck Norris is so fast, he can run around the world and punch himself in the back of the head. Chuck Norris' freezepop of choice is Shards O' Glass. An eclipse is just the suns attempt to hide from Chuck Norris Contrary to popular belief"
pInfo[5].textContent='123 Way 456 Street'
pInfo[6].textContent='Somewhere, USA'
pInfo[7].textContent='1(888)888/8888'
pInfo[8].textContent='Copyright Great Idea! 2018'

const middleImg = document.querySelector('#middle-img');
middleImg.src='./img/mid-page-accent.jpg';
middleImg.alt='middle code image'

Array.from(navLink).forEach(navLink => {
  navLink.style.color='teal';
})

const newNav = document.createElement('a');
newNav.textContent='Testing';
newNav.style.color='teal';
newNav.style.fontWeight='bold';

const newNav1 = document.createElement('a');
newNav1.textContent='Testing1';
newNav1.style.color='teal';
newNav1.style.fontWeight='bold';

const newNavLink = document.querySelector('nav');
newNavLink.prepend(newNav);
newNavLink.appendChild(newNav1);