

$( ".todas-amenazas" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-1.jpg' + '")');
    $(".aluviones, .terremotos, .tsunamis, .volcanes ").css('opacity','1');
});

$( ".volcanes" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-2.jpg' + '")');
    $(".aluviones, .terremotos, .tsunamis, .volcanes ").css('opacity','0.5');
    $(this).css('opacity','1');
});

$( ".aluviones" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-3.jpg' + '")');
    $(".terremotos, .tsunamis, .volcanes ").css('opacity','0.5');
    $(this).css('opacity','1');
});

$( ".terremotos" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-4.jpg' + '")');
    $(".aluviones, .tsunamis, .volcanes ").css('opacity','0.5');
    $(this).css('opacity','1');
});

$( ".tsunamis" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-5.jpg' + '")');
    $(".aluviones, .terremotos, .volcanes ").css('opacity','0.5');
    $(this).css('opacity','1');
});

$( ".click-valparaiso" ).click(function() {    
    $( "#talcahuano, #cartagena, #iquique").hide();
    $( "#valparaiso" ).show();
});

$( ".click-cartagena" ).click(function() {
    $( "#talcahuano, #valparaiso, #iquique").hide();
    $( "#cartagena" ).show();
});


$( ".click-talcahuano" ).click(function() {
    $( "#valparaiso, #cartagena, #iquique").hide();
    $( "#talcahuano" ).show();
});

$( ".click-iquique" ).click(function() {
    $( "#talcahuano, #cartagena, #valparaiso").hide();
    $( "#iquique" ).show();
});

$( "#canvas" ).click(function() {
    $(".container-icono-3d").hide(1500);

});



