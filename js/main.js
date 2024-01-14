let light = document.querySelector("#lightSwitch");
let start = document.querySelector("#start");
let power = false;

let screen = document.querySelector("#screenGame");
let imageIntro = '<img src="./img/Inicio.gif" class="img-fluid h-100"></img>';
let introAudio = new Audio();
introAudio.src="./sounds/marioIntro.mp3";
let animation=false;


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
            animation=false;
            introAudio.pause();
        }, 7000);

    /*Si la game boy esta encendida*/
    }else{
        /*Apagamos game boy*/
        power = false;
        light.classList.toggle("batteryLightOff");
        light.classList.toggle("batteryLightOn");
        /*Eliminamos todo lo que haya en la pantalla de juego*/
        screen.innerHTML="";
        introAudio.currentTime = 0;
    }
})