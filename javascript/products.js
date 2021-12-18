//import productsAnimation from "./jsAnimations.js"
var id = null;
function productsAnimation(){
  //DECLARATION
  var firstImage = document.getElementById("first-image-upper-div");
  var firstImageInternal = document.getElementById("first-image-div");
  var firstImageTextDiv = document.getElementById("floating-text-div");
  var firstImageText = document.getElementById("floating-text");
  var productsDiv = document.getElementById("products");
  var pi = 3.141592;

  //COUNTERS
  var angle = 0 ;
  
  //TIMERS FOR ANIMATION
  clearInterval(id); 
  id = setInterval(frame, 1);
  function frame() {
  if (angle >= pi) { // angle pi is the final stage
   clearInterval(id);
  } 
   else {
    /***********INCREMENT/DECREMENT*****/
   angle = angle + pi/200 ; 
   var valueOfEverything = 55 + (172.5 * (1 + Math.cos(angle)));
    /************FINAL CALULATION***/
    firstImage.style.height =  valueOfEverything + 'px';
    firstImageInternal.style.backgroundPositionY = 172.5 * (Math.cos(angle)-1) + 'px';
    firstImageTextDiv.style.height = valueOfEverything + 'px';
    firstImageText.style.top = 100 + 172.5 * (Math.cos(angle)-1) + 'px';
    productsDiv.style.height = 200*(1 - Math.cos(angle)) + 'px';
    }
  } 
}
  
function products(){
  //Making the button inactive
  document.getElementById("home-button").setAttribute('onclick','home()');
  document.getElementById("products-button").setAttribute('onclick',''); 
  document.getElementById("responsive-home-button").setAttribute('onclick','home()');
  document.getElementById("responsive-products-button").setAttribute('onclick',''); 
/*******BASIC*********/
document.getElementById("second-text").innerHTML = "PRODUCTS";

//TITLE PRODUCTS Text Alignment
// We are just making new elements instead of complex manipulation
document.getElementById("products-title").style.visibility = "visible";
document.getElementById("second-text").style.visibility = "hidden";
document.getElementById("second-image").style.display = "none";
/****Animation******/
productsAnimation();
}