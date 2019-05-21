// "use strict";

function smoothScroll(destination, duration) {
    var target = document.getElementById(destination);
    var destinationPosition = target.getBoundingClientRect().top;
    var startingPosition = window.pageYOffset;
    var distance = destinationPosition - startingPosition;
    var startTime = null;

    // console.log(position);

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run  = ease(timeElapsed, startingPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(time, startValue, change, duration) {
     time /= duration / 2;
     if (time < 1)  {
          return change / 2 * time * time + startValue;
     }

     time--;
     return -change / 2 * (time * (time - 2) - 1) + startValue;
 };


    requestAnimationFrame(animation);
}



document.addEventListener("click",smoothScroll("contact", 1000));