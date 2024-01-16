function changeBg(){
    const header = document.getElementsByTagName('header')[0];
    const scrollValue = window.scrollY;
    if(scrollValue > 0) {
        header.classList.add('bgColor');
    } else {
        header.classList.remove('bgColor');
    }
}

window.addEventListener('scroll', changeBg);
