const upButton = document.getElementById("up")
const rightButton = document.getElementById("right")
const downButton = document.getElementById("down")
const leftButton = document.getElementById("left")
let arLeft = false, arRight = false, arUp = false,
    arDown = false
let declared_lfrtupdn = false, lfrtupdn_id 
//end main declarations for events-----------------------------------
//for responsive show to smaller width displays--------------------
let bodyWidth = document.body.getBoundingClientRect().width
if (bodyWidth <= 500) {
  let myDescription = document.getElementsByTagName("h2")[0]
  myDescription.style.fontSize = "18px"
}
//------------------------------------------------------

//for debug manner
var txt = document.getElementsByClassName("txt")[0]
let clicknumber = 0
//left right up down button actions
function lfrtupdn(){
  if (arLeft){   //left
    // do what ever you want 
    txt.innerHTML = `left arrow holded ${++clicknumber}`
  }
  else if (arRight){  //right 
    // do what ever you want 
    txt.innerHTML = `right arrow holded ${++clicknumber}`
  }  
  else if (arUp){    //up 
    // do what ever you want 
    txt.innerHTML = `up arrow holded ${++clicknumber}`
  }
  else if (arDown){  //down 
  // do what ever you want 
  txt.innerHTML = `right arrow holded ${++clicknumber}`
  }
  else if (!(arLeft || arUp || arRight || arDown)) {
    //if all keys released then disable flags
    clearInterval(lfrtupdn_id)
    declared_lfrtupdn = false
  }

}

// events for pc ---------------------------------
upButton.onmousedown = () => {
  arUp = true
  if (!declared_lfrtupdn){
    lfrtupdn_id = setInterval(lfrtupdn, 12);
    declared_lfrtupdn = true
  }
}
rightButton.onmousedown = () => {
  arRight = true
  if (!declared_lfrtupdn){
    lfrtupdn_id = setInterval(lfrtupdn, 12);
    declared_lfrtupdn = true
  }
}
downButton.onmousedown = () => {
  arDown = true
  if (!declared_lfrtupdn){
    lfrtupdn_id = setInterval(lfrtupdn, 12);
    declared_lfrtupdn = true
  }
}
leftButton.onmousedown = () => {
  arLeft = true
  if (!declared_lfrtupdn){
    lfrtupdn_id = setInterval(lfrtupdn, 12);
    declared_lfrtupdn = true
  }
}

//counter mouse events
upButton.onmouseout = ()=>{
  arUp = false
  clicknumber = 0
}
rightButton.onmouseout = ()=>{
  arRight = false
  clicknumber = 0
}
downButton.onmouseout = ()=>{
  arDown = false
  clicknumber = 0
}
leftButton.onmouseout = ()=>{
  arLeft = false
  clicknumber = 0
}
// end pc events ----------------------------------

// events for phones ------------------------------
upButton.ontouchstart = () => {
  arUp = true
  if (!declared_lfrtupdn){
    lfrtupdn_id = setInterval(lfrtupdn, 12);
    declared_lfrtupdn = true
  }
}
rightButton.ontouchstart = () => {
  arRight = true
  if (!declared_lfrtupdn){
    lfrtupdn_id = setInterval(lfrtupdn, 12);
    declared_lfrtupdn = true
  }
}
downButton.ontouchstart = () => {
  arDown = true
  if (!declared_lfrtupdn){
    lfrtupdn_id = setInterval(lfrtupdn, 12);
    declared_lfrtupdn = true
  }
}
leftButton.ontouchstart = () => {
  arLeft = true
  if (!declared_lfrtupdn){
    lfrtupdn_id = setInterval(lfrtupdn, 12);
    declared_lfrtupdn = true
  }
}

//counter touch events

upButton.ontouchend = ()=>{
  arUp = false
  clicknumber = 0
}
rightButton.ontouchend = ()=>{
  arRight = false
  clicknumber = 0
}
downButton.ontouchend = ()=>{
  arDown = false
  clicknumber = 0
}
leftButton.ontouchend = ()=>{
  arLeft = false
  clicknumber = 0
}
// end phone events ---------------------------------------