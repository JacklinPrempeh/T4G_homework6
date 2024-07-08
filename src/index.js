// function changeColor(){
//     let m=document.getElementById("photo");
//     m.style.display=('block');
    

// }

// let extraone=document.getElementById("extra");
// extraone.addEventListener("dblclick",changeColor); 


function changeColor(){
let name = prompt("What is your name");
let head=document.getElementById("head");
head.style.overscrollBehavior="hover";
head.innerHTML=`👋🏾👋🏾Hi ${name} Welcome to African Choice`;
}

let linking=document.getElementById("linking");
linking.addEventListener('mouseenter',changeColor);