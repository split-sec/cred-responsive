function toggleNavbar(index) {
    let button = document.getElementsByClassName('hamburger')[index];
    console.log(index);
    let fullNavbarElem = document.getElementsByClassName('toggle-navbar-screen')[0];
    console.log(fullNavbarElem);
    button.classList.toggle('is-active');
    fullNavbarElem.classList.toggle('is-opened');
}