window.onload = iniciarReproduccion;
window.onresize = tamanioReproductor;

let maximo = 500;
let medio = document.getElementById('medio');
let reproducir = document.getElementById('reproducir');
let barra = document.getElementById('barra')
let progreso = document.getElementById('progreso');

function tamanioReproductor(){

    if(window.innerWidth >= 1120){
        medio.width = 608;
        barra.style.width = "500px";
        maximo = barra.offsetWidth;
    }
    else if(window.innerWidth >= 640 && window.innerWidth < 1120){
        medio.width = 506;
        barra.style.width = "400px";
        maximo = barra.offsetWidth;
    }
    else{
        medio.width = 404;
        barra.style.width = "300px"
        maximo = barra.offsetWidth;
    }

}

function iniciarReproduccion(){
    
    barra.addEventListener('click',mover,false);
    reproducir.addEventListener('click',reproduccion,false);
    
    function reproduccion(){
        if(!medio.paused && !medio.ended){
            medio.pause();
            reproducir.textContent = 'Reproducir';
            window.clearInterval(bucle);
        }
        else{
            medio.play();
            reproducir.textContent ='Pausa';
            bucle = setInterval(estado, 1000);
        }
    }
    
    function estado(){
        if(!medio.ended){
            let total = parseInt(medio.currentTime * maximo / medio.duration);
            progreso.style.width = total + 'px';
        }else{
            progreso.style.width = '0px';
            reproducir.innerHTML = 'Reproducir';
            window.clearInterval(bucle);
        }
    }

    function mover(e){
        if(!medio.paused && !medio.ended){
            let ratonX = e.pageX - barra.offsetLeft;
            let nuevoTiempo = ratonX * medio.duration / maximo;
            medio.currentTime = nuevoTiempo;
            progreso.style.width = ratonX + 'px';
        }
    }

}
