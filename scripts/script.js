$(document).ready(function() {
  // Captura el clic en los enlaces de navegación con scroll suave
  $('a.nav-link').on('click', function(event) {
    event.preventDefault();

    // Obtiene el atributo href del enlace
    var target = $(this).attr('href');

    // Realiza el desplazamiento suave hacia el objetivo
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800); // Puedes ajustar la velocidad de la animación aquí
  });
});

