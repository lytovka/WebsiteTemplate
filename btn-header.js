function btnHeader(){
    var element = document.querySelector(".btn-header");

    if(window.innerWidth > 768) { 
        element.parentNode.removeChild(element);
    }
    else return;
}

window.addEventListener("resize",btnHeader());


