function color(){  // changes background color when mouseenters
    let changeBack=document.getElementById("box");
    changeBack.style.backgroundColor="lawngreen";
    changeBack.style.color="white";
}



let box =document.getElementById("box");
box.addEventListener("mouseenter",color);

function colorChange(){ // changes background color to original when mouse leaves
    let changeBackcolor=document.getElementById("box");
    changeBackcolor.style.backgroundColor="lightgreen";
    changeBackcolor.style.color="black";
}



let boxchange=document.getElementById("box");
boxchange.addEventListener("mouseleave",colorChange);

function size(){ //increases font size when mouseenters
    let rotation=document.getElementById("rotate");
    rotation.style.color="white";
    rotation.style.textShadow="none";
    rotation.style.fontSize="5em";
}

let rotate=document.getElementById("rotate");
rotate.addEventListener("mouseenter",size);

function changesize(){ // returns rotation size to original when mouse leaves
    let rotationback=document.getElementById("rotate");
    rotationback.style.color="black";
    rotationback.style.textShadow="4pt 4pt 4pt white";
    rotationback.style.fontSize="3em";
}

let rotateback=document.getElementById("rotate");
rotateback.addEventListener("mouseleave",changesize);


function width(){ // increases size of logo when mouse enters
    let changewidth=document.getElementById("pic");
    changewidth.style.width="200pt";
    changewidth.style.height="80pt";
}



let pictureincrease =document.getElementById("pic");
pictureincrease.addEventListener("mouseenter",width);

function returnwidth(){ // returns logo size to original when mouseenters
    let picturedecrease=document.getElementById("pic");
    picturedecrease.style.width="150pt";
    picturedecrease.style.height="57pt";
}



let picreturn=document.getElementById("pic");
picreturn.addEventListener("mouseleave",returnwidth);


// //video content
 function reduce(){ //mouse enter changes shape of image
   let Haiper=document.getElementById("vid"); //declaring a variable
   Haiper.style.borderRadius="50%"; //styling the variable
}
 let haiper=document.getElementById("vid"); //declaring a variable
haiper.addEventListener("mouseover",reduce); // adding event listener to variable

 function vidleave(){ //mouseleave changes image back to original shape
  let Haiperleave=document.getElementById("vid");
  Haiperleave.style.borderRadius="5pt"; //styling the variable
 }
 let haiperleave=document.getElementById("vid"); //declaring a variable
 haiperleave.addEventListener("mouseleave",vidleave); // adding event listener to variable