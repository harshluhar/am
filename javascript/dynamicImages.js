function dynamicImages(){
    document.getElementById("first-image-div").style.backgroundImage= "url('/images/dynamicImage1.jpg')";
    document.getElementById("floating-text").innerHTML = "Go for the<br>best in<br>the locality.";
    setTimeout(dynamicImages2, 10000);
}

function dynamicImages2(){
    document.getElementById("first-image-div").style.backgroundImage= "url('/images/dynamicImage2.jpg')";
    document.getElementById("floating-text").innerHTML = "Shipping<br>Nationwide!";
    setTimeout(dynamicDefault, 10000);
}

function dynamicDefault(){
    document.getElementById("first-image-div").style.backgroundImage= "url('/images/dynamicImage0.jpg')";
    document.getElementById("floating-text").innerHTML = "Looking for<br>PET Preform Moulds?";
    setTimeout(dynamicImages, 10000);
}
