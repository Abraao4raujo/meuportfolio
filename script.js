$('.nav a[href^="#sobre"]').on('click', (event) => {
  event.preventDefault()
  var id = $(event.target).attr('href'),
  targetOffset = $(id).offset().top;

$('html, body').animate({ 
  scrollTop: targetOffset - 100
	}, 500);
})

/* Abrir Menu Mobile */
const btnMobile = document.getElementById('btnMobile')
function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expended', active)
  if(active){
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)