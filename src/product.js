//product page read more effects
// first read more button
// when you click on readmore button it reveal hidden text together with readless button[] and hides the read more button
function showtext(){
    let benin=document.getElementById('benin');
benin.style.display="inline";
let hideone=document.getElementById("read");
    hideone.style.display="none";
    let readless=document.getElementById("less");
    readless.style.display=("block");
}
let para=document.getElementById('read');
  para.addEventListener("click",showtext);

  //showless
  function hideText(){  // when you click on the readless button,it disappears together with the text and the readmore button reappears
    let textVanish=document.getElementById("benin"); // it hides the revealed text
   textVanish.style.display="none";
   let rereveal =document.getElementById("read"); //reveals show more button
   rereveal.style.display="flex";
   let buttonVanish=document.getElementById("less");  //hides the showless button
   buttonVanish.style.display="none";
  }
  let vanish =document.getElementById("less"); //declaring a variable
  vanish.addEventListener("click",hideText);  // adding event listener to the variable
  

  // 2nd read more button
  function showOne(){
    let old =document.getElementById("old");
    old.style.display="inline";
    let hidetwo=document.getElementById("readtwo");
    hidetwo.style.display="none";
   let readlessone=document.getElementById("lessone");
    readlessone.style.display=("block");
  }
let paraOne =document.getElementById("readtwo");
paraOne.addEventListener("click",showOne);

//showless
  function hideTextOne(){  // when you click on the readless button,it disappears together with the text and the readmore button reappears
    let textVanishone=document.getElementById("old"); // it hides the revealed text
   textVanishone.style.display="none";
   let rerevealone =document.getElementById("readtwo"); //reveals show more button
   rerevealone.style.display="flex";
   let buttonVanishone=document.getElementById("lessone");  //hides the showless button
   buttonVanishone.style.display="none";
  }
  let vanishone =document.getElementById("lessone"); //declaring a variable
  vanishone.addEventListener("click",hideTextOne);  // adding event listener to the variable
  


 // 3rd readmore button
function showTwo(){
  let africa =document.getElementById("african");
  africa.style.display="inline";
  let hidethree=document.getElementById("readthree");
  hidethree.style.display="none";
  let readlesstwo=document.getElementById("lesstwo");
    readlesstwo.style.display=("block");
  
}
let paraTwo =document.getElementById("readthree");
paraTwo.addEventListener("click",showTwo);

//showless
  function hideTexttwo(){  // when you click on the readless button,it disappears together with the text and the readmore button reappears
    let textVanishtwo=document.getElementById("african"); // it hides the revealed text
   textVanishtwo.style.display="none";
   let rerevealtwo=document.getElementById("readthree"); //reveals show more button
   rerevealtwo.style.display="flex";
   let buttonVanishtwo=document.getElementById("lesstwo");  //hides the showless button
   buttonVanishtwo.style.display="none";
  }
  let vanishtwo=document.getElementById("lesstwo"); //declaring a variable
  vanishtwo.addEventListener("click",hideTexttwo);  // adding event listener to the variable
  

// 4th readmore button
function showThree(){
  let fresh =document.getElementById("fresh");
  fresh.style.display="inline";
  let hidefour=document.getElementById("readfour");
  hidefour.style.display="none";
  let readlessthree=document.getElementById("lessthree");
    readlessthree.style.display=("block");
}
let paraThree=document.getElementById("readfour");
paraThree.addEventListener("click",showThree);


//showless
function hideTextthree(){  // when you click on the readless button,it disappears together with the text and the readmore button reappears
  let textVanishthree=document.getElementById("fresh"); // it hides the revealed text
 textVanishthree.style.display="none";
 let rerevealthree=document.getElementById("readfour"); //reveals show more button
 rerevealthree.style.display="flex";
 let buttonVanishthree=document.getElementById("lessthree");  //hides the showless button
 buttonVanishthree.style.display="none";
}
let vanishthree =document.getElementById("lessthree"); //declaring a variable
vanishthree.addEventListener("click",hideTextthree);  // adding event listener to the variable

// 5th readmore button
function showFive(){
  let green =document.getElementById("green");
  green.style.display="inline";
  let hidefive=document.getElementById("readfive");
  hidefive.style.display="none";
  let readlessfour=document.getElementById("lessfour");
    readlessfour.style.display=("block");
  
}
let paraFour =document.getElementById("readfive");
paraFour.addEventListener("click",showFive);

//showless
function hideTextfour(){  // when you click on the readless button,it disappears together with the text and the readmore button reappears
  let textVanishfour=document.getElementById("green"); // it hides the revealed text
 textVanishfour.style.display="none";
 let rerevealfour=document.getElementById("readfive"); //reveals show more button
 rerevealfour.style.display="flex";
 let buttonVanishfour=document.getElementById("lessfour");  //hides the showless button
 buttonVanishfour.style.display="none";
}
let vanishfour=document.getElementById("lessfour"); //declaring a variable
vanishfour.addEventListener("click",hideTextfour);  // adding event listener to the variable


// 6th readmore button
function showSix(){
  let brukina =document.getElementById("brukina");
  brukina.style.display="inline";
  let hidesix=document.getElementById("readsix");
  hidesix.style.display="none";
  let readlessfive=document.getElementById("lessfive");
  readlessfive.style.display=("block");
}
let paraFive =document.getElementById("readsix");
paraFive.addEventListener("click",showSix);

//showless
function hideTextfive(){  // when you click on the readless button,it disappears together with the text and the readmore button reappears
  let textVanishfive=document.getElementById("brukina"); // it hides the revealed text
 textVanishfive.style.display="none";
 let rerevealfive=document.getElementById("readsix"); //reveals show more button
 rerevealfive.style.display="flex";
 let buttonVanishfive=document.getElementById("lessfive");  //hides the showless button
 buttonVanishfive.style.display="none";
}
let vanishfive=document.getElementById("lessfive"); //declaring a variable
vanishfive.addEventListener("click",hideTextfive);  // adding event listener to the variable



// 7th readmore button
function showSeven(){
  let wood=document.getElementById("wood");
  wood.style.display="inline";
  let hideseven=document.getElementById("readseven");
  hideseven.style.display="none";
  let readlesssix=document.getElementById("lesssix");
  readlesssix.style.display=("block");

}
let paraSix =document.getElementById("readseven");
paraSix.addEventListener("click",showSeven);

//showless
function hideTextsix(){  // when you click on the readless button,it disappears together with the text and the readmore button reappears
  let textVanishsix=document.getElementById("wood"); // it hides the revealed text
 textVanishsix.style.display="none";
 let rerevealsix=document.getElementById("readseven"); //reveals show more button
 rerevealsix.style.display="flex";
 let buttonVanishsix=document.getElementById("lesssix");  //hides the showless button
 buttonVanishsix.style.display="none";
}
let vanishsix=document.getElementById("lesssix"); //declaring a variable
vanishsix.addEventListener("click",hideTextsix);  // adding event listener to the variable


// 8th readmore button
function showEight(){
  let seed=document.getElementById("seed");
  seed.style.display="inline";
  let hideeight=document.getElementById("readeight");
  hideeight.style.display="none";
  let readlessseven=document.getElementById("lessseven");
  readlessseven.style.display=("block");

}
let paraSeven=document.getElementById("readeight");
paraSeven.addEventListener("click",showEight);



//showless
function hideTextseven(){  // when you click on the readless button,it disappears together with the text and the readmore button reappears
  let textVanishseven=document.getElementById("seed"); // it hides the revealed text
 textVanishseven.style.display="none";
 let rerevealseven=document.getElementById("readeight"); //reveals show more button
 rerevealseven.style.display="flex";
 let buttonVanishseven=document.getElementById("lessseven");  //hides the showless button
 buttonVanishseven.style.display="none";
}
let vanishseven=document.getElementById("lessseven"); //declaring a variable
vanishseven.addEventListener("click",hideTextseven);  // adding event listener to the variable



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


