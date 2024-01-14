let light = document.querySelector("#lightSwitch");
let start = document.querySelector("#start");
let power = false;

start.addEventListener("click", () =>{
    /*Si la game boy esta apagada*/ 
    if(!power){
        power = true;
        light.classList.toggle("batteryLightOff");
        light.classList.toggle("batteryLightOn");
    }else{
        power = false;
        light.classList.toggle("batteryLightOff");
        light.classList.toggle("batteryLightOn");
    }
})