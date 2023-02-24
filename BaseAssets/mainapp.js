window.onload = function(){
    let header1 = document.querySelector('.header1');
    let moon = document.querySelector('.moon');

    header1.style.opacity = "1";
    moon.style.opacity = "1";
}

window.addEventListener('scroll', function() {
    let screenPosition = window.innerHeight;

    // Mascot
    const slideInDiv1 = document.querySelector('.HomeMascot');
    let slideInPosition1 = slideInDiv1.getBoundingClientRect().top + (slideInDiv1.offsetHeight / 2);

    if (slideInPosition1 < screenPosition) {
        slideInDiv1.classList.add('show1');
    }else{
        slideInDiv1.classList.remove('show1');
    }

    // About Us Box
    const slideInDiv2 = document.querySelector('.aboutCon');
    let slideInPosition2 = slideInDiv2.getBoundingClientRect().top + (slideInDiv2.offsetHeight / 2);

    if (slideInPosition2 < screenPosition) {
        slideInDiv2.classList.add('show2');
    }else{
        slideInDiv2.classList.remove('show2');
    }

    // subBox 
    const slideSubDiv2 = document.querySelector('.Box1');
    let slideSubPos2 = slideSubDiv2.getBoundingClientRect().top + (slideSubDiv2.offsetHeight / 2);

    if(slideSubPos2 < screenPosition){
        slideSubDiv2.classList.add('subShow3');
    }else{
        slideSubDiv2.classList.remove('subShow3');
    }

    const upButton = document.querySelector('.ButDiv');
    let ButtonPos = upButton.getBoundingClientRect().top + (upButton.offsetHeight / 2);

    if(ButtonPos < screenPosition){
        upButton.classList.add('up1');
    }else{
        upButton.classList.remove('up1');
    }

});
