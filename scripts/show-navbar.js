let floatElem = document.getElementsByClassName('float-navbar-placeholder')[0];
let previousY = window.scrollY;

window.addEventListener('scroll', () => {
    let currentY = window.scrollY;

    if(currentY > 1000) {
        if((currentY - previousY) < 0) {
            // floatElem.style.display = "block";  
            // floatElem.style.top = "-50px";
            // console.log(floatElem.className);
            if(!floatElem.className.includes("navbar-active")) {
                floatElem.className = floatElem.className.replace("float-navbar-placeholder", "float-navbar-placeholder navbar-active");
            }

        } else if (currentY == previousY) {
            ;
        } else {
            // floatElem.style.display = "none";  
            // floatElem.style.top = "-50px";
            // console.log(floatElem.className);
            floatElem.className = floatElem.className.replace(" navbar-active", "");
        }
    } else {
        // floatElem.style.display = "none";  
        // floatElem.style.top = "-50px";
        floatElem.className = floatElem.className.replace(" navbar-active", "");
    }

    previousY = currentY;
});