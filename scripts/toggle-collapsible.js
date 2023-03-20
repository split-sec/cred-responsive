let collapsedElem = document.getElementsByClassName('collapsed-text');

let collapsibleElem = document.getElementsByClassName('collapsible');

let allToggle = document.getElementsByClassName("expand-icon");

function toggleView(index) {
    let toggleElem = document.getElementsByClassName("expand-icon")[index];

    if(collapsedElem[index].style.display == "block") {
        toggleElem.classList.toggle("expand-icon-active");

        collapsedElem[index].style.display = "none";
    } else {
        for(let i = 0; i < collapsedElem.length; i++) {
            collapsedElem[i].style.display = "none";
            allToggle[i].className = "expand-icon";
        }
    
        if(collapsedElem[index].style.display == "block") {
            collapsedElem[index].style.display = "none";
            toggleElem.classList.toggle("expand-icon-active");
        } else {
            collapsedElem[index].style.display = "block";
            toggleElem.classList.toggle("expand-icon-active");
        }
    }
}