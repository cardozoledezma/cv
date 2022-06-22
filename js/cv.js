//carrousel
const conTainer = document.querySelectorAll(".container2");
const nombContainer = conTainer.length;
const apres = document.querySelector(".right");
const avant = document.querySelector(".left");
let count = 0;


function carrouselApres(){
    conTainer[count].classList.remove("active");
    if(count < nombContainer -1){
        count++;
    }
    else{
        
        count = 0;
    }
    conTainer[count].classList.add("active");

}

apres.addEventListener('click', carrouselApres);

function carrouselAvant(){
    conTainer[count].classList.remove("active");
    if(count > 0 ){
        count--;
    }
    else{
        
        count = nombContainer - 1;
    }
    conTainer[count].classList.add("active");

}

avant.addEventListener('click', carrouselAvant);

// date


const now = new Date().getTime();
const countDate = new Date("october 10, 2022").getTime();
const distanceBase = countDate - now
const text = document.querySelector(".time")

const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
const hours = Math.floor(distanceBase / (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
const minutes = Math.floor(distanceBase / (1000 * 60 * 60 ) / (1000 * 60));
const seconds = Math.floor(distanceBase / (1000 * 60) / (1000));

text.innerText = days+ "J", hours + "H", minutes + "M", seconds +"S" 