// function for send message
// changes color of send message when you mouseenter and adds transition duration to it
function Info(){
    let raw=document.getElementById("message");
    raw.innerHTML=`contact us now`;
    raw.style.transitionDuration="800ms";
  }
  let write=document.getElementById("message");
  write.addEventListener("mouseenter",Info);
  
  // function for mouseleave
  function info(){
    let Raw=document.getElementById("message");
    Raw.style.color="white";
    Raw.innerHTML=`Send us a message`;
    Raw.style.transitionDuration="800ms";
  }
  let Write=document.getElementById("message");
  Write.addEventListener("mouseleave",info);
