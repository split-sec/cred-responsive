let floatElem = document.getElementsByClassName('float-navbar-placeholder')[0];
let previousY = window.scrollY;

window.addEventListener('scroll', () => {
    let currentY = window.scrollY;

    if(currentY > 800) {
        if((currentY - previousY) < 0) {
            if(!floatElem.className.includes("navbar-active")) {
                floatElem.className = floatElem.className.replace("float-navbar-placeholder", "float-navbar-placeholder navbar-active");
            }

        } else if (currentY == previousY) {
            ;
        } else {
            floatElem.className = floatElem.className.replace(" navbar-active", "");
        }
    } else {
        floatElem.className = floatElem.className.replace(" navbar-active", "");
    }

    previousY = currentY;
});