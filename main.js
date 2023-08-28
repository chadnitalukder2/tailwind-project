/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll(".nav__link")

navLink.forEach(link =>
    link.addEventListener('click', () =>{
        navMenu.classList.add('hidden')
    })
    )

closeIcon.addEventListener('click', () =>{
    navMenu.classList.add('hidden')
})

hamburger.addEventListener('click', () =>{
navMenu.classList.remove('hidden')
}) 

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs__wrap ul li");

tabs.forEach(tab => {
    tab.addEventListener("click",() => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add('active')
    })
})

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

