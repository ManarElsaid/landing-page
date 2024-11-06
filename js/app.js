/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBar = document.createDocumentFragment();
for (const section of sections) {
    const secName = document.createElement("li");
    // const link = document.createElement("a");
    // link.setAttribute("href", `#${section.id}`);
    // link.textContent =  section.dataset.nav;
    // link.classList.add("menu__link");
    secName.innerHTML = `<a href=#${section.id} class="menu__link">${section.dataset.nav}</a>`;
    // secName.appendChild(link);
    navBar.appendChild(secName);
}

// Add class 'active' to section when near top of viewport
function makeActive(){
    for (let i = 0; i < sections.length; i++) {
        const navItems = document.querySelectorAll(".menu__link");
        const box = sections[i].getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {

        sections[i].classList.add("active");
        // adding class to hightlight the active section name in the nav bar
        navItems[i].classList.add("nav_item_active");

        } else {
        sections[i].classList.remove("active");
        navItems[i].classList.remove("nav_item_active");
        }
     }
}

// Scroll to anchor ID using scrollTO event

function scrollToAnchor(sec) {
    sec.scrollIntoView({
        block: "start",
        behavior: "smooth"
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener("DOMContentLoaded", () => {navList.appendChild(navBar);});
// Scroll to section on link click
navList.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.nodeName == "A") {
        targetId = event.target.getAttribute("href");
        clickedSec = document.querySelector(targetId);
        scrollToAnchor(clickedSec);
    }
})
// Set sections as active
document.addEventListener("scroll", () => { makeActive();});