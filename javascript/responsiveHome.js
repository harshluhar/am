
function responsiveHomeNavigation(){
  var navbarOffset = document.getElementById("responsive-navbar");
  var initialOffset = 
  (-1 * document.documentElement.clientHeight) + 75;
  var pi = 3.141592;

  var id = null;
    var angle = pi;
    //TIMERS FOR ANIMATION
    clearInterval(id); 
    id = setInterval(frame, 1);
    function frame() {
        if (angle <= 0) { // angle pi is the final stage
        clearInterval(id);
        } 
        else {
        /***********INCREMENT/DECREMENT*****/
            angle = angle - pi/200 ;
        /************FINAL CALULATION***/
        navbarOffset.style.top =  1/2 * initialOffset  * (Math.cos(angle)+1) + 'px';
        console.log(navbarOffset.style.top);
    
  }
}
}
var id = null;
function responsiveHomeAnimation(){
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
   var valueOfEverything = 75 + (162.5 * (1 + Math.cos(angle)));
    /************FINAL CALULATION***/
    firstImage.style.height =  valueOfEverything + 'px';
    firstImageInternal.style.backgroundPositionY = 162.5 * (Math.cos(angle)-1) + 'px';
    firstImageTextDiv.style.height = valueOfEverything + 'px';
    firstImageText.style.opacity =  (1 + Math.cos(angle));
    //the actual products area, where listing will occur
    productsDiv.style.height = 200*(1 - Math.cos(angle)) + 'px'; 
    }
  } 
}
  function responsiveHome(){
  //Making the button inactive (THIS CODE IS AWESOMEEEEEEEEEEEEE!!!!!!!!!!!!!!!)
  document.getElementById("products-button").setAttribute('onclick','products()');
  document.getElementById("home-button").setAttribute('onclick','');
  document.getElementById("responsive-products-button").setAttribute('onclick','responsiveProducts()');
  document.getElementById("responsive-home-button").setAttribute('onclick','');


  //Realignment
document.getElementById("second-text").style.visibility = "visible";
document.getElementById("products-title").style.visibility = "hidden";

  //responsive design
  document.getElementById("responsive-navbar").style.top = "calc(-100vh + 75px)";
  
  /****Animation******/
  responsiveHomeAnimation();
  responsiveHomeNavigation();
}
