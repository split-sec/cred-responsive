window.addEventListener('scroll', () => {
    let scrollPos = this.scrollY;

    let centerElem = document.getElementsByClassName('center-image')[0];
    let rightElem1 = document.getElementsByClassName('right-image-1')[0];
    let leftElem1 = document.getElementsByClassName('left-image-1')[0];
    let rightElem2 = document.getElementsByClassName('right-image-2')[0];
    let leftElem2 = document.getElementsByClassName('left-image-2')[0];

    if(scrollPos > 500) {
        centerElem.style.animation = "animate-center-image 2s ease 0s forwards";
        leftElem1.style.animation = "animate-left-image-1 2s ease 0s forwards";
        leftElem2.style.animation = "animate-left-image-2 2s ease 0s forwards";
        rightElem1.style.animation = "animate-right-image-1 2s ease 0s forwards";
        rightElem2.style.animation = "animate-right-image-2 2s ease 0s forwards";
    }
});