//product page read more effects
// first read more button
function showtext(){
    let benin=document.getElementById('benin');
benin.style.display="inline";
let hideone=document.getElementById("read");
    hideone.style.display="none";
}
let para=document.getElementById('read');
  para.addEventListener("click",showtext);


  // 2nd read more button
  function showOne(){
    let old =document.getElementById("old");
    old.style.display="inline";
    let hidetwo=document.getElementById("readtwo");
    hidetwo.style.display="none";
  }
let paraOne =document.getElementById("readtwo");
paraOne.addEventListener("click",showOne);


 // 3rd readmore button
function showTwo(){
  let africa =document.getElementById("african");
  africa.style.display="inline";
  let hidethree=document.getElementById("readthree");
  hidethree.style.display="none";
}
let paraTwo =document.getElementById("readthree");
paraTwo.addEventListener("click",showTwo);


// 4th readmore button
function showThree(){
  let fresh =document.getElementById("fresh");
  fresh.style.display="inline";
  let hidefour=document.getElementById("readfour");
  hidefour.style.display="none";
}
let paraThree=document.getElementById("readfour");
paraThree.addEventListener("click",showThree);


// 5th readmore button
function showFive(){
  let green =document.getElementById("green");
  green.style.display="inline";
  let hidefive=document.getElementById("readfive");
  hidefive.style.display="none";
}
let paraFour =document.getElementById("readfive");
paraFour.addEventListener("click",showFive);


// 6th readmore button
function showSix(){
  let brukina =document.getElementById("brukina");
  brukina.style.display="inline";
  let hidesix=document.getElementById("readsix");
  hidesix.style.display="none";
}
let paraFive =document.getElementById("readsix");
paraFive.addEventListener("click",showSix);


// 7th readmore button
function showSeven(){
  let wood=document.getElementById("wood");
  wood.style.display="inline";
  let hideseven=document.getElementById("readseven");
  hideseven.style.display="none";
}
let paraSix =document.getElementById("readseven");
paraSix.addEventListener("click",showSeven);


// 8th readmore button
function showEight(){
  let seed=document.getElementById("seed");
  seed.style.display="inline";
  let hideeight=document.getElementById("readeight");
  hideeight.style.display="none";
}
let paraSeven=document.getElementById("readeight");
paraSeven.addEventListener("click",showEight);




// when you enter the content it changes background color and when you leave it changes background color to green
function changeBack(){                        // mouse enter changes background color of first content
    let change=document.getElementById('firstpara'); //declaring a variable
    change.style.backgroundColor="lightgreen"; // styling the variable
    change.style.color="white";
}
  let content=document.getElementById('firstpara'); //declaring a variable
  content.addEventListener("mouseenter",changeBack); // adding event listener to variable


  function leave(){      // mouse leave changes background color of first content to green
    let rechange=document.getElementById('firstpara'); //declaring a variable
    rechange.style.backgroundColor="burlywood"; // styling the variable
    rechange.style.color="black";
}
  let recontent=document.getElementById('firstpara');  //declaring a variable
  recontent.addEventListener("mouseleave",leave); // adding event listener to variable


  //second content
  function changeOne(){   // mouse enter changes background color of second content
    let changeone=document.getElementById('secondpara'); //declaring a variable
    changeone.style.backgroundColor="darksalmon"; // styling the variable
    changeone.style.color="white";
}
  let contentOne=document.getElementById('secondpara'); //declaring a variable
  contentOne.addEventListener("mouseenter",changeOne); // adding event listener to variable


  function leavetwo(){  // mouse leave changes background color of second content to green
    let rechangetwo=document.getElementById('secondpara'); //declaring a variable
    rechangetwo.style.backgroundColor="burlywood"; // styling the variable
    rechangetwo.style.color="black";
}
  let recontentwo=document.getElementById('secondpara'); //declaring a variable
  recontentwo.addEventListener("mouseleave",leavetwo); // adding event listener to variable


 //third content
 function changeSecond(){   // mouse enter changes background color of third content
  let changetwo=document.getElementById('thirdpara'); //declaring a variable
  changetwo.style.backgroundColor="darkkhaki"; // styling the variable
  changetwo.style.color="white";
}
let contentwo=document.getElementById('thirdpara'); //declaring a variable
contentwo.addEventListener("mouseenter",changeSecond); // adding event listener to variable


function leavethree(){  // mouse leave changes background color of third content to green
  let rechangethree=document.getElementById('thirdpara'); //declaring a variable
  rechangethree.style.backgroundColor="burlywood"; // styling the variable
  rechangethree.style.color="black";
}
let recontenthree=document.getElementById('thirdpara'); //declaring a variable
recontenthree.addEventListener("mouseleave",leavethree); // adding event listener to variable


   //fourth content
 function changeThree(){   // mouse enter changes background color of fourth content
  let changethree=document.getElementById('fourthpara'); //declaring a variable
  changethree.style.backgroundColor="saddlebrown"; // styling the variable
  changethree.style.color="white";
}
let contenthree=document.getElementById('fourthpara'); //declaring a variable
contenthree.addEventListener("mouseenter",changeThree); // adding event listener to variable


function leavefour(){  // mouse leave changes background color of fourth content to green
  let rechangefour=document.getElementById('fourthpara'); //declaring a variable
  rechangefour.style.backgroundColor="burlywood"; // styling the variable
  rechangefour.style.color="black";
}
let recontentfour=document.getElementById('fourthpara'); //declaring a variable
recontentfour.addEventListener("mouseleave",leavefour); // adding event listener to variable


 //fifth content
 function changeFour(){   // mouse enter changes background color of fifth content
  let changefour=document.getElementById('fifthpara'); //declaring a variable
  changefour.style.backgroundColor="sienna"; // styling the variable
  changefour.style.color="white";
}
let contentfour=document.getElementById('fifthpara'); //declaring a variable
contentfour.addEventListener("mouseenter",changeFour); // adding event listener to variable


function leavefive(){  // mouse leave changes background color of fifth content to green
  let rechangefive=document.getElementById('fifthpara'); //declaring a variable
  rechangefive.style.backgroundColor="burlywood"; // styling the variable
  rechangefive.style.color="black";
}
let recontentfive=document.getElementById('fifthpara'); //declaring a variable
recontentfive.addEventListener("mouseleave",leavefive); // adding event listener to variable


 //sixthcontent
 function changeSix(){   // mouse enter changes background color of sixth content
  let changesix=document.getElementById('sixthpara'); //declaring a variable
  changesix.style.backgroundColor="peru"; // styling the variable
  changesix.style.color="white";
}
let contentsix=document.getElementById('sixthpara'); //declaring a variable
contentsix.addEventListener("mouseenter",changeSix); // adding event listener to variable


function leavesix(){  // mouse leave changes background color of sixth content to green
  let rechangesix=document.getElementById('sixthpara'); //declaring a variable
  rechangesix.style.backgroundColor="burlywood"; // styling the variable
  rechangesix.style.color="black";
}
let recontentsix=document.getElementById('sixthpara'); //declaring a variable
recontentsix.addEventListener("mouseleave",leavesix); // adding event listener to variable


 //seventh content
 function changeTwo(){   // mouse enter changes background color of seventh content
  let changeseven=document.getElementById('seventhpara'); //declaring a variable
  changeseven.style.backgroundColor="darkcyan"; // styling the variable
  changeseven.style.color="white";
}
let contentseven=document.getElementById('seventhpara'); //declaring a variable
contentseven.addEventListener("mouseenter",changeTwo); // adding event listener to variable


function leaveseven(){  // mouse leave changes background color of seventh content to green
  let rechangeseven=document.getElementById('seventhpara'); //declaring a variable
  rechangeseven.style.backgroundColor="burlywood"; // styling the variable
  rechangeseven.style.color="black";
}
let recontentseven=document.getElementById('seventhpara'); //declaring a variable
recontentseven.addEventListener("mouseleave",leaveseven); // adding event listener to variable


 //eight content
 function changeEight(){   // mouse enter changes background color of eight content
  let changeeight=document.getElementById('eightpara'); //declaring a variable
  changeeight.style.backgroundColor="darkolivegreen"; // styling the variable
  changeeight.style.color="white";
}
let contenteight=document.getElementById('eightpara'); //declaring a variable
contenteight.addEventListener("mouseenter",changeEight); // adding event listener to variable


function leaveeight(){  // mouse leave changes background color of eight content to green
  let rechangeeight=document.getElementById('eightpara'); //declaring a variable
  rechangeeight.style.backgroundColor="burlywood"; // styling the variable
  rechangeeight.style.color="black";
}
let recontenteight=document.getElementById('eightpara'); //declaring a variable
recontenteight.addEventListener("mouseleave",leaveeight); // adding event listener to variable


// //video content
// function vid(){ //mouse enter changes shape of image
//   let Haiper=document.getElementById("haiper"); //declaring a variable
//   Haiper.style.width="400pt"; //styling the variable
//   Haiper.style.borderRadius="50%"; //styling the variable
// }
// let haiper=document.getElementById("haiper"); //declaring a variable
// haiper.addEventListener("mouseover",vid); // adding event listener to variable

// function vidleave(){ //mouseleave changes image back to original shape
//   let Haiperleave=document.getElementById("haiper");
//   Haiperleave.style.width="400pt"; //styling the variable
//   Haiperleave.style.borderRadius="50pt"; //styling the variable
// }
// let haiperleave=document.getElementById("haiper"); //declaring a variable
// haiperleave.addEventListener("mouseleave",vidleave); // adding event listener to variable