function color(){
    let changeBack=document.getElementById("box");
    changeBack.style.backgroundColor="lawngreen";
    changeBack.style.color="white";
}



let box =document.getElementById("box");
box.addEventListener("mouseenter",color);

function colorChange(){
    let changeBackcolor=document.getElementById("box");
    changeBackcolor.style.backgroundColor="lightgreen";
    changeBackcolor.style.color="black";
}



let boxchange=document.getElementById("box");
boxchange.addEventListener("mouseleave",colorChange);

function size(){
    let rotation=document.getElementById("rotate");
    rotation.style.color="white";
    rotation.style.textShadow="none";
    rotation.style.fontSize="5em";
}

let rotate=document.getElementById("rotate");
rotate.addEventListener("mouseenter",size);

function changesize(){
    let rotationback=document.getElementById("rotate");
    rotationback.style.color="black";
    rotationback.style.textShadow="4pt 4pt 4pt white";
    rotationback.style.fontSize="3em";
}

let rotateback=document.getElementById("rotate");
rotateback.addEventListener("mouseleave",changesize);
