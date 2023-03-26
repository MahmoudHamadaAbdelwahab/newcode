// start code-home 
let start = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountains3");
let mountain4 = document.getElementById("mountains4");
let river = document.getElementById("river5");
let boat6= document.getElementById("boat6");
let codehome = document.querySelector(".code-home");

window.onscroll = function(){
    let value = scrollY;
    start.style.left = value + 'px';
    moon.style.top = value *3 + 'px';
    mountain3.style.top = value *2 + 'px';
    mountain4.style.top = value *1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value *1.2 + 'px';
    boat6.style.left = value *3 + 'px';
    codehome.style.fontSize = value + 'px';
    if(scrollY >= 67){
    codehome.style.fontSize = 67 + 'px';
    codehome.style.position = 'fixed';
        if(scrollY >= 430){
         codehome.style.display = 'none';
        }else{
         codehome.style.display = 'block';
        }
        if(scrollY >= 127){
           document.querySelector(".main").style.background = `linear-gradient(#376281,#10001f)` 
        }else{
           document.querySelector(".main").style.background = `linear-gradient(#200016,#10001f)` 

        }
    }
}
// end code-home 
