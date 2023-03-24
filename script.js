$('.nav a[href^="#sobre"]').on('click', (event) => {
  event.preventDefault()
  var id = $(event.target).attr('href'),
  targetOffset = $(id).offset().top;

$('html, body').animate({ 
  scrollTop: targetOffset - 100
	}, 500);
})