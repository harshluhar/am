function responsiveNavigation(){
  var navbarOffset = document.getElementById("responsive-navbar");
  var initialOffset = 
  (-1 * document.documentElement.clientHeight) + 75;
  var pi = 3.141592;

  if(navbarOffset.style.top == "0px"){
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

  else{
    var angle = 0;
    //TIMERS FOR ANIMATION
    clearInterval(id); 
    id = setInterval(frame, 1);
    function frame() {
        if (angle >= pi) { // angle pi is the final stage
        clearInterval(id);
        navbarOffset.style.top = "0px"; //because of irrational numbers, the "top" can never be exactly equal to zero.
        } 
        else {
        /***********INCREMENT/DECREMENT*****/
            angle = angle + pi/200 ;
        /************FINAL CALULATION***/
        navbarOffset.style.top =  1/2 * initialOffset  * (Math.cos(angle)+1) + 'px';
        console.log(navbarOffset.style.top);
    }
  } 
}

}

// if(navbarOffset.style.top == "0px"){
//   navbarOffset.style.top = "calc(-100vh + 75px)";
//   }
// else{
//   navbarOffset.style.top = '0';
// }



//animation end me daal yeh : document.getElementById("responsive-navigation-button").innerHTML = "x";
