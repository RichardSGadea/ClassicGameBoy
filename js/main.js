let light = document.querySelector("#lightSwitch");
let start = document.querySelector("#start");
//para comprobar si esta encendido o apagado
let power = false;

let screen = document.querySelector("#screenGame");
let imageIntro = '<img src="./img/Inicio.gif" class="img-fluid h-100"></img>';
let introAudio = new Audio();
introAudio.src="./sounds/marioIntro.mp3";
//Para comprobar el estado de la animación(audio)
let animation=false;

// Las tres imagenes que con las flechas izquierda y derecha alternaremos
let img1= '<img src="./img/inicioMario.png" class="img-fluid h-100 w-100"></img>';
let img2= '<img src="./img/aventuraMario.jpg" class="img-fluid h-100 w-100"></img>';
let img3= '<img src="./img/finMario.gif" class="img-fluid h-100 w-100"></img>';
let arrayImg = [img1,img2,img3];
let positionArrayImg = 0;

let rightArrow = document.querySelector("#rightArrow");
let leftArrow = document.querySelector("#leftArrow");
let topArrow = document.querySelector("#topArrow");
let bottomArrow = document.querySelector("#bottomArrow");
let select = document.querySelector("#select");
let buttonA = document.querySelector("#btnA");
let buttonB = document.querySelector("#btnB");

//Sonidos diferentes de mario
let coin = new Audio();
coin.src="./sounds/marioCoin.mp3";
let duct = new Audio();
duct.src="./sounds/marioTuberia.mp3";
let gameOver = new Audio();
gameOver.src="./sounds/marioGameOver.mp3";
let fireThrow = new Audio();
fireThrow.src="./sounds/marioThrow.mp3";
let jump = new Audio();
jump.src="./sounds/marioJump.mp3";


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
    }else if(power && !animation){
        /*Apagamos game boy*/
        power = false;
        light.classList.toggle("batteryLightOff");
        light.classList.toggle("batteryLightOn");
        /*Eliminamos todo lo que haya en la pantalla de juego*/
        screen.innerHTML="";
        introAudio.pause();
        introAudio.currentTime = 0;
        gameOver.pause();
        gameOver.currentTime = 0;
    }
});

rightArrow.addEventListener("click", ()=>{
    if(power && !animation){
        if(positionArrayImg===2){
            positionArrayImg=0;
            screen.innerHTML = arrayImg[positionArrayImg];
        }else{
            positionArrayImg++;
            screen.innerHTML = arrayImg[positionArrayImg];
        } 
    }
})

leftArrow.addEventListener("click", ()=>{
    if(power && !animation){
        if(positionArrayImg===0){
            positionArrayImg=2;
            screen.innerHTML = arrayImg[positionArrayImg];
        }else{
            positionArrayImg--;
            screen.innerHTML = arrayImg[positionArrayImg];
        }
    }
});

topArrow.addEventListener("click",()=>{
    if(power && !animation){
        coin.play();
    }
});
bottomArrow.addEventListener("click",()=>{
    if(power && !animation){
        duct.play();
    }
});
select.addEventListener("click",()=>{
    if(power && !animation){
        gameOver.play();
        screen.innerHTML = arrayImg[0];
        positionArrayImg=0;
    }
});
buttonB.addEventListener("click",()=>{
    if(power && !animation){
        fireThrow.play();
    }
});
buttonA.addEventListener("click",()=>{
    if(power && !animation){
        jump.play();
    }
});

