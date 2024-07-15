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


// function aim= when the user enters an image it reduces
 //its size and when it leaves it increases its size

              //first image
function changeShape(){     // reduces size for 1st image
    let grain=document.getElementById('grains');
    grain.style.width=("250pt");
}
let grains=document.getElementById("grains");
grains.addEventListener("mouseenter",changeShape);


function size(){     // increases size for 1st image
    let increase=document.getElementById('grains');
increase.style.width=("300pt");
}
let increase=document.getElementById("grains");
increase.addEventListener("mouseleave",size);

         
           //second image
function changeSize(){     // reduces size for 2nd image
    let legume=document.getElementById('legume');
    legume.style.width=("250pt");
}
let legume=document.getElementById("legume");
legume.addEventListener("mouseenter",changeSize);


function sizesecond(){     // increases size for 2nd image
    let increasedsecond=document.getElementById('legume');
    increasedsecond.style.width=("300pt");
}
let decreasesecond=document.getElementById("legume");
decreasesecond.addEventListener("mouseleave",sizesecond);
  


   //third image
function veggies(){  // reduces size for 3rd image
    let vegetable=document.getElementById('vegetables');
    vegetable.style.width=("250pt");
}
let vegetables=document.getElementById('vegetables');
vegetables.addEventListener("mouseenter",veggies);


function sizethird(){  // increases  size for 3rd image
    let  increasedthird=document.getElementById('vegetables');
    increasedthird.style.width=("300pt");
}
let increasedthird=document.getElementById('vegetables');
increasedthird.addEventListener("mouseleave",sizethird);


//fourth image
function greenies(){  // reduces size for 4th image
    let green=document.getElementById('greens');
    green.style.width=("250pt");
}
let greens=document.getElementById('greens');
greens.addEventListener("mouseenter",greenies);


function sizefourth(){  // increases size for 4th image
    let increasedfourth=document.getElementById('greens');
    increasedfourth.style.width=("300pt");
}
let increasedfourth=document.getElementById('greens');
increasedfourth.addEventListener("mouseleave",sizefourth);


 //fifth image
function wheaties(){  // reduces size for 5th image
    let wheats=document.getElementById('wheat');
    wheats.style.width=("250pt")
}
let wheat=document.getElementById('wheat');
wheat.addEventListener("mouseenter",wheaties);


function sizefifth(){  // increases size for 5th image
    let increasedfifth=document.getElementById('wheat');
    increasedfifth.style.width=("300pt")
}
let  increasedfifth=document.getElementById('wheat');
increasedfifth.addEventListener("mouseleave",sizefifth);


//sixth image
function barleys(){  // reduces  size for 6th image
    let barLey=document.getElementById('barley');
    barLey.style.width=("250pt");
}
let barley=document.getElementById('barley');
barley.addEventListener("mouseenter",barleys);


function sizesixth(){  // increases size for 6th image
    let increasedsixth=document.getElementById('barley');
    increasedsixth.style.width=("300pt");
}
let increasedsixth=document.getElementById('barley');
increasedsixth.addEventListener("mouseleave",sizesixth);


// function tubers(){  //increase size for 7th image
//     let yam=document.getElementById("tuber");
//     yam.style.heigth="300pt";
// }
// let tuber=document.getElementById('tuber');
// tuber.addEventListener("mouseenter",tubers);






//buttons to show more and show less images
//showmore
function loadMore(){
 let reveal= document.getElementById("photo");
    reveal.style.display=("block");
    reveal.style.display=("flex");
    reveal.style.flexWrap="wrap";
    reveal.style.flexWrap="space-between";
    let missing =document.getElementById("extra");
    missing.style.display="none";
}

let extra=document.getElementById("extra");
extra.addEventListener("click",loadMore);


//showless
function hide(){
    let lessImage=document.getElementById("pictures");
lessImage.style.display="center";
let disappear=document.getElementById("showless");
disappear.style.display="none";
}


let off =document.getElementById("showless");
off.addEventListener=("click",hide);







//product page read more effects

function showtext(){
    let message=document.getElementById('benin');
message.style.display=("block");
}

let message=document.getElementById('read');
  message.addEventListener=("click",showtext);



function changeBack(){
    let change=document.getElementById('firstpara');
    change.style.backgroundColor="black";
}


  let content=document.getElementById('firstpara');
  content.addEventListener=("mouseenter",changeBack);