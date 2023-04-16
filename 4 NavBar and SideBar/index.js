// variables
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.nav-links')

const sideBarToggle = document.querySelector('.sidebar-toggle')
const sideBar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')

navToggle.addEventListener('click', function() {
    console.log(links.classList.toggle('show-links'))
})
sideBarToggle.addEventListener('click', function() {
    console.log(sideBar.classList.toggle('show-sidebar'))
})
closeBtn.addEventListener('click', function() {
    console.log(sideBar.classList.remove('show-sidebar'))
})