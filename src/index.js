// when the user enters the explore button on the homepage 
//it takes their name 
function changeColor(){
let name = prompt("What is your name");
let head=document.getElementById("head");
head.style.overscrollBehavior= "hover";
head.innerHTML=`Hello ${name} Welcome to African Choice`;
head.style.fontSize="4em";
head.style.color="white";

let browse=document.getElementById("browse");
browse.innerHTML=`Welcome ${name} Taste The Raw Goodness Of Africa`;
browse.style.fontSize="4em";
browse.style.color="white";

}

let linking=document.getElementById("linking");
linking.addEventListener('mouseenter',changeColor);




// function aim= when the user enters an image it reduces
 //its size and when it leaves it increases its size

              //first image
function changeShape(){     // reduces size for 1st image
    let grain=document.getElementById('grains');
    grain.style.width=("80%");
}
let grains=document.getElementById("grains");
grains.addEventListener("mouseenter",changeShape);


function size(){     // increases size for 1st image
    let increase=document.getElementById('grains');
increase.style.width=("100%");
increase.style.transitionDuration="800ms";
}
let increase=document.getElementById("grains");
increase.addEventListener("mouseleave",size);

         
           //second image
function changeSize(){     // reduces size for 2nd image
    let legume=document.getElementById('legume');
    legume.style.width=("80%");
}
let legume=document.getElementById("legume");
legume.addEventListener("mouseenter",changeSize);


function sizesecond(){     // increases size for 2nd image
    let increasedsecond=document.getElementById('legume');
    increasedsecond.style.width=("100%");
    increasedsecond.style.transitionDuration="800ms"
}
let decreasesecond=document.getElementById("legume");
decreasesecond.addEventListener("mouseleave",sizesecond);
  


   //third image
function veggies(){  // reduces size for 3rd image
    let vegetable=document.getElementById('vegetables');
    vegetable.style.width=("80%");
}
let vegetables=document.getElementById('vegetables');
vegetables.addEventListener("mouseenter",veggies);


function sizethird(){  // increases  size for 3rd image
    let  increasedthird=document.getElementById('vegetables');
    increasedthird.style.width=("100%");
    increasedthird.style.transitionDuration="800ms"
}
let increasedthird=document.getElementById('vegetables');
increasedthird.addEventListener("mouseleave",sizethird);


//fourth image
function greenies(){  // reduces size for 4th image
    let green=document.getElementById('greens');
    green.style.width=("80%");
}
let greens=document.getElementById('greens');
greens.addEventListener("mouseenter",greenies);


function sizefourth(){  // increases size for 4th image
    let increasedfourth=document.getElementById('greens');
    increasedfourth.style.width=("100%");
    increasedfourth.style.transitionDuration="800ms"
}
let increasedfourth=document.getElementById('greens');
increasedfourth.addEventListener("mouseleave",sizefourth);


 //fifth image
function wheaties(){  // reduces size for 5th image
    let wheats=document.getElementById('wheat');
    wheats.style.width=("80%")
}
let wheat=document.getElementById('wheat');
wheat.addEventListener("mouseenter",wheaties);


function sizefifth(){  // increases size for 5th image
    let increasedfifth=document.getElementById('wheat');
    increasedfifth.style.width=("100%");
    increasedfifth.style.transitionDuration="800ms" // transition effect
}
let  increasedfifth=document.getElementById('wheat');
increasedfifth.addEventListener("mouseleave",sizefifth);


//sixth image
function barleys(){  // reduces  size for 6th image
    let barLey=document.getElementById('barley');
    barLey.style.width=("80%");
}
let barley=document.getElementById('barley');
barley.addEventListener("mouseenter",barleys);


function sizesixth(){  // increases size for 6th image
    let increasedsixth=document.getElementById('barley');
    increasedsixth.style.width=("100%");
    increasedsixth.style.transitionDuration="800ms" // transition effect
}
let increasedsixth=document.getElementById('barley');
increasedsixth.addEventListener("mouseleave",sizesixth);


// seventh image
function tubers(){  // reduce size for 7th image
    let yam=document.getElementById("tuber");
    yam.style.width="80%";
}
let tuber=document.getElementById('tuber');
tuber.addEventListener("mouseenter",tubers);


function sizeseventh(){  // increases size for 7th image
    let increasedseventh=document.getElementById('tuber');
    increasedseventh.style.width=("100%");
    increasedseventh.style.transitionDuration="800ms" // transition effect
}
let increasedseventh=document.getElementById('tuber');
increasedseventh.addEventListener("mouseleave",sizeseventh);


// eight image
function moreMaize(){  // reduce size for 8th image
    let afrimaize=document.getElementById("maize");
    afrimaize.style.width="80%";
}
let maize=document.getElementById('maize');
maize.addEventListener("mouseenter",moreMaize);


function sizeeight(){  // increases size for 8th image
    let increasedeight=document.getElementById('maize');
    increasedeight.style.width=("100%");
    increasedeight.style.transitionDuration="800ms" // transition effect
}
let increasedeight=document.getElementById('maize');
increasedeight.addEventListener("mouseleave",sizeeight);


// nineth image
function moreSpice(){  // reduce size for 9th image
    let afrimaize=document.getElementById("spices");
    afrimaize.style.width="80%";
}
let spices=document.getElementById('spices');
spices.addEventListener("mouseenter",moreSpice);


function sizenine(){  // increases size for 9th image
    let increasednine=document.getElementById('spices');
    increasednine.style.width=("100%");
    increasednine.style.transitionDuration="800ms" // transition effect
}
let increasednine=document.getElementById('spices');
increasednine.addEventListener("mouseleave",sizenine);




//buttons to show more and show less images
// showmore
function loadMore(){ // when you click on show more images,it disappears and the last set of images appears together with the showless button
 let reveal= document.getElementById("photo"); // this reveals  hidden images
    reveal.style.display=("block"); // styling
    reveal.style.display=("flex"); //styling
    reveal.style.flexWrap="wrap";  //styling
    reveal.style.justifyContent="center";
    reveal.style.justifyContent="space-around";  // styling
    let missing =document.getElementById("extra"); //this hides the click
    missing.style.display="none";                  // to show more images button
    let rereveal =document.getElementById("showless"); // this reveals the showless button
    rereveal.style.display="flex"; // styling
}
let extra=document.getElementById("extra"); //declaring a variable
extra.addEventListener("click",loadMore); // adding event listener to the variable


//showless
function hide(){  // when you click on the showless button,it disappears together with the last set of images and the click to show more images button reappears
    let photoVanish=document.getElementById("photo"); // it hides the last set of photos
   photoVanish.style.display="none";
   let rereveal =document.getElementById("extra"); //reveals show more images button
   rereveal.style.display="flex";
   let buttonVanish=document.getElementById("showless");  //hides the showless button
   buttonVanish.style.display="none";
}
let off =document.getElementById("showless"); //declaring a variable
off.addEventListener("click",hide);  // adding event listener to the variable


