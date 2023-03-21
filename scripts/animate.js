let contentElem = document.getElementsByClassName('content-section-invisible');
let sectionElem = document.getElementsByClassName("animation-section")[0];
let imageHolderElem = document.getElementsByClassName("changing-image")[0];

let options = { 
    rootMargin: "-100px 0px -100px 0px",
};

const iObserver = new IntersectionObserver((items) => {
    for(let item of items) {
        if(item.isIntersecting) {
            item.target.classList.add('content-section-visible');

            let imageId = item.target.className.match(/\d/);
            console.log("here", imageId);

            imageHolderElem.src = `/images/scrolling-mockup/neopop-fold${imageId}.webp`
        } else {
            item.target.classList.remove('content-section-visible');
        }
    }
}, 
options);

for (i = 0; i < contentElem.length; i++) {
  iObserver.observe(contentElem[i]);
}
