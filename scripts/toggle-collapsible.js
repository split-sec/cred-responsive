let collapsedElem = document.getElementsByClassName('collapsed-text');

let collapsibleElem = document.getElementsByClassName('collapsible');

function toggleView(index) {
    if(collapsedElem[index].style.display == "block") {
        collapsedElem[index].style.display = "none";
    } else {
        for(let i = 0; i < collapsedElem.length; i++) {
            collapsedElem[i].style.display = "none";
        }
    
        if(collapsedElem[index].style.display == "block") {
            collapsedElem[index].style.display = "none";
        } else {
            collapsedElem[index].style.display = "block";
        }
    }
}