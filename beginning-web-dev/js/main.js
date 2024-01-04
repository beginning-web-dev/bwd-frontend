function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);