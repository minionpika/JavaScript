// variables
const date = document.getElementById('date')
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.nav-links')
const linksContainer = document.querySelector('.navlinks-container')
const navBar = document.getElementById('nav')
const scrollLinks = document.querySelectorAll('.scroll-link')


date.innerHTML = new Date().getFullYear();

navToggle.addEventListener('click', function() {
  const linksHeight = links.getBoundingClientRect().height
  const linksContainerHeight = linksContainer.getBoundingClientRect().height
  if (linksContainerHeight == 0) {
      console.log('==0')
      linksContainer.style.height = '{linksHeight}px'
  }
  else {
      console.log('!=0')
      linksContainer.style.height = 0
  }
})

window.addEventListener('scroll', function() {
  const scrollHeight = this.window.pageYOffset
  const navHeight = navBar.getBoundingClientRect().height
  if (scrollHeight > navHeight)
      navBar.classList.add('fixed-nav')
  else
      navBar.classList.remove('fixed-nav')
})

scrollLinks.forEach((l) => {
  l.addEventListener('click', (e) => {
    e.preventDefault()

    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    const navHeight = navBar.getBoundingClientRect().height
    const linksContainerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navBar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight

    if (!fixedNav) {
      position = position - navHeight
    }
    if (navHeight > 82) {
      position = position + linksContainerHeight
    }

    window.scrollTo({
      left: 0,
      top: position,
    })
    // close
    linksContainer.style.height = 0;
  })
})