// Esperamos a que cargue toda la estructura HTML antes de ejecutar jQuery
$(document).ready(function() {

    // FUNCIÓN 1: Desplegar y ocultar los submenús al pasar el ratón (.hover)
    $(".tiene-submenu").hover(
        function() {
            $(this).find(".submenu").stop(true, true).slideDown(200);
        },
        function() {
            $(this).find(".submenu").stop(true, true).slideUp(200);
        }
    );

    // FUNCIÓN 2: Aparición suave de los textos de la portada al cargar (.fadeIn)
    $(".banner-contenido").hide().fadeIn(900);

    // FUNCIÓN 3: Mostrar u ocultar información adicional al hacer clic (.toggle)
    $("#btn-info-extra").click(function() {
        $("#info-extra").toggle(300);
    });

    // FUNCIÓN 4: Resaltar una tarjeta de resultados al hacer clic (.toggleClass)
    $(".resultado").click(function() {
        $(this).toggleClass("destacado");
    });

});