let collapsedElem = document.getElementsByClassName('collapsed-text');

let collapsibleElem = document.getElementsByClassName('collapsible');

function toggleView(index) {
    console.log(index);
    let toggleElem = document.getElementsByClassName("expand-icon")[index];

    if(collapsedElem[index].style.display == "block") {
        toggleElem.className = "expand-icon";

        collapsedElem[index].style.display = "none";
    } else {
        toggleElem.className = "expand-icon-active";

        for(let i = 0; i < collapsedElem.length; i++) {
            collapsedElem[i].style.display = "none";
        }
    
        if(collapsedElem[index].style.display == "block") {
            collapsedElem[index].style.display = "none";
            toggleElem.className = "expand-icon";
        } else {
            collapsedElem[index].style.display = "block";
            toggleElem.className = "expand-icon";
        }
    }
}