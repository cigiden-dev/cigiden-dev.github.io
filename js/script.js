

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
    pauseVideosAudios("video-valparaiso");    
});

$( ".click-cartagena" ).click(function() {
    $( "#talcahuano, #valparaiso, #iquique").hide();
    $( "#cartagena" ).show();    
    pauseVideosAudios("video-cartagena");   
});


$( ".click-talcahuano" ).click(function() {
    $( "#valparaiso, #cartagena, #iquique").hide();
    $( "#talcahuano" ).show();
    pauseVideosAudios("video-talcahuano");   
});

$( ".click-iquique" ).click(function() {
    $( "#talcahuano, #cartagena, #valparaiso").hide();
    $( "#iquique" ).show();
    pauseVideosAudios("video-iquique");   
});

$( "#canvas" ).click(function() {
    $(".container-icono-3d").hide(1500);
});

$("#canvas").on("tap",function(){
    $(".container-icono-3d").hide(1500);
});

function pauseVideosAudios(multimedia) {
    var video = document.getElementById(multimedia);
    video.play();
}

$(document).ready(function(){
    setTimeout(function(){ 
        document.addEventListener('play', function(e){      
            var audios = document.getElementsByTagName('audio');
            var videos = document.getElementsByClassName('video-hablando');
            for(var i = 0, len = audios.length; i < len;i++){
                if(audios[i] != e.target){
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
            for(var i = 0, len = videos.length; i < len;i++){
                if(videos[i] != e.target){
                    videos[i].pause();
                    videos[i].currentTime = 0;
                }
            }
            
        }, true);
     }, 200);
    
});




