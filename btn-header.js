function btnHeader(){
    var el = document.querySelector(".btn-header");
    if(window.innerWidth > 800){
        el.parentNode.removeChild(el);
    }
    else el.parentNode.appendChild(el);
}

btnHeader();

window.addEventListener("resize", ()=>{
    btnHeader();
});