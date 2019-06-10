//Service Worker
if('serviceWorker' in navigator){
    console.log('Puedes usar los service worker en tu navegador');
     navigator.serviceWorker.register('./sw.js')
     .then(res => console.log('serviceWorker cargado correctamente',res))
     .catch(err => console.log('serviceWorker no se ha podido registra',err));
}else{
    console.log('NO PUEDES');
}

//Suavizador de Scroll
$(document).ready(function(){

   $("#menu a").click(function(e){
       e.preventDefault();
     
       console.log($('#services').offset().top)
    
       $("html, body").animate({
             scrollTop:$($(this).attr('href')).offset().top
         });
    return false;
    });
});