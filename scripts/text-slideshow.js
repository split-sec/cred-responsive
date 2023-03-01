let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex = n;
    slides[n-1].style.display = "block";
    dots[n-1].className += " active";
} 

showSlides(1);

let handler = setInterval(() => {
    if(++slideIndex > 5) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
}, 5000);