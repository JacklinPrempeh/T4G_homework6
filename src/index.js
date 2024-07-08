// when the user enters the explore button on the homepage 
//it takes their name 
function changeColor(){
let name = prompt("What is your name");
let head=document.getElementById("head");
head.style.overscrollBehavior= "hover";
head.innerHTML=`👋🏾👋🏾Hi ${name} Welcome to African Choice`;
let browse=document.getElementById("browse");
browse.innerHTML=`Welcome ${name} Taste The Raw Goodness Of Africa`
}

let linking=document.getElementById("linking");
linking.addEventListener('mouseenter',changeColor);


// when the user enters an image it prompts a questions
function changeShape(){
    prompt("What vegetable is this");
}

let grains=document.getElementById("grains");
grains.addEventListener("mouseenter",changeShape);


function veggies(){
    prompt("What vegetable is this")
}
function vege(){
    let vegetable=document.getElementById('vegetables');
    vegetable.style.width=("300pt");
}


let vegetables=document.getElementById('vegetables');
vegetables.addEventListener("click",veggies);
vegetables.addEventListener("mouseenter",vege);


function greenies(){
    prompt("What vegetable is this")
}


let greens=document.getElementById('greens');
greens.addEventListener("mouseenter",greenies);


function wheaties(){
    prompt("What vegetable is this")
}


let wheat=document.getElementById('wheat');
wheat.addEventListener("mouseenter",wheaties);


function barleys(){
    prompt("What vegetable is this")
}


let barley=document.getElementById('wheat');
barley.addEventListener("mouseenter",barleys);

function tubers(){
    prompt("What vegetable is this")
}


let tuber=document.getElementById('wheat');
tuber.addEventListener("mouseenter",tubers);

