function color(){  // changes background color when mouseenters
    let changeBack=document.getElementById("form");
    changeBack.style.backgroundColor="transparent";
    // changeBack.style.color="black";
}

let box =document.getElementById("form");
box.addEventListener("mouseenter",color);



function colorChange(){ // changes background color to original when mouse leaves
    let changeBackcolor=document.getElementById("form");
    changeBackcolor.style.backgroundColor=("seagreen");
}

let boxchange=document.getElementById("form");
boxchange.addEventListener("mouseleave",colorChange);
