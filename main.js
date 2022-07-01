window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activeteMenuAtCurrentSection(home)
  activeteMenuAtCurrentSection(services)
  activeteMenuAtCurrentSection(about)
  activeteMenuAtCurrentSection(contact)
}

function activeteMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verifica se a section passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  // topo da section chegou/utrapassou a linha
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // onde a section termina
  const sectionEndsAt = sectionTop + sectionHeight
  // verifica se a base passou da linha
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  //limite da section
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 800) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img,
#home .stats,
#services,
#services header,
#services .card
#about
#about header,
#about .content
 `)
