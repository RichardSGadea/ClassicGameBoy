let light = document.querySelector("#lightSwitch");
let start = document.querySelector("#start");
//para comprobar si esta encendido o apagado
let power = false;

let screen = document.querySelector("#screenGame");
let imageIntro = '<img src="./img/Inicio.gif" class="img-fluid h-100"></img>';
let introAudio = new Audio();
introAudio.src="./sounds/marioIntro.mp3";
//Para comprobar el estado de la animación(gif)
let animation=false;

// Las tres imagenes que con las flechas izquierda y derecha alternaremos
let img1= '<img src="./img/inicioMario.png" class="img-fluid h-100"></img>';
let img2= '<img src="./img/aventuraMario.jpg" class="img-fluid h-100"></img>';
let img3= '<img src="./img/finMario.jpg" class="img-fluid h-100"></img>';
let arrayImg = [img1,img2,img3];

start.addEventListener("click", () =>{
    /*Si la game boy esta apagada*/ 
    if(!power){
        /*Encemos game boy*/ 
        power = true;
        light.classList.toggle("batteryLightOff");
        light.classList.toggle("batteryLightOn");
        /*Añadimos en la pantalla de juego un gif*/
        screen.innerHTML=imageIntro;
        introAudio.play();
        animation=true;
        setTimeout(() => {
            screen.innerHTML = arrayImg[0];
            introAudio.pause();
            animation=false;
        }, 7000);

    /*Si la game boy esta encendida*/
    }else{
        /*Apagamos game boy*/
        power = false;
        light.classList.toggle("batteryLightOff");
        light.classList.toggle("batteryLightOn");
        /*Eliminamos todo lo que haya en la pantalla de juego*/
        screen.innerHTML="";
        introAudio.pause();
        introAudio.currentTime = 0;
    }
})