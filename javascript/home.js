var id = null;
function homeAnimation(){
  //DECLARATION
  var firstImage = document.getElementById("first-image-upper-div");
  var firstImageInternal = document.getElementById("first-image-div");
  var firstImageTextDiv = document.getElementById("floating-text-div");
  var firstImageText = document.getElementById("floating-text");
  var productsDiv = document.getElementById("products");
  var pi = 3.141592;

  //COUNTERS
  var angle = pi ;
  
  //TIMERS FOR ANIMATION
  clearInterval(id); 
  id = setInterval(frame, 1);
  function frame() {
  if (angle <= 0) { //angle zero is the final stage
   clearInterval(id);
  } 
   else {
    /***********INCREMENT/DECREMENT*****/
   angle = angle - pi/200 ; 
   var valueOfEverything = 55 + (172.5 * (1 + Math.cos(angle)));
    /************FINAL CALULATION***/
    firstImage.style.height =  valueOfEverything + 'px';
    firstImageInternal.style.backgroundPositionY = 172.5 * (Math.cos(angle)-1) + 'px';
    firstImageTextDiv.style.height = valueOfEverything + 'px';
    firstImageText.style.top = -245 + 172.5 * (Math.cos(angle)+1) + 'px'; 
    productsDiv.style.height = 200*(1 - Math.cos(angle)) + 'px';
    }
  } 
}
  function home(){
  //Making the button inactive (THIS CODE IS AWESOMEEEEEEEEEEEEE!!!!!!!!!!!!!!!)
  document.getElementById("products-button").setAttribute('onclick','products()');
  document.getElementById("home-button").setAttribute('onclick','');
  document.getElementById("responsive-products-button").setAttribute('onclick','products()');
  document.getElementById("responsive-home-button").setAttribute('onclick','');
  /*******BASIC*********/
  document.getElementById("second-text").innerHTML = "Manufacturer of <br> PET Preform Moulds";
  //Realignment
// document.getElementById("second-blue-div").style =
// "display: block;"
// document.getElementById("second-div").style = 
// "position:relative; width: 50%";
// document.getElementById("second-text").style =
// "position:relative; width: auto;";
  

//Simple Realignment by visibility property
document.getElementById("second-text").style.visibility = "visible";
document.getElementById("second-image").style.display = "block";
document.getElementById("products-title").style.visibility = "hidden";

  //responsive design
  document.getElementById("responsive-navbar").style.top = "calc(-100vh + 75px)";
  
  /****Animation******/
  homeAnimation();
}
