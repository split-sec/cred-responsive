let collapsedElem = document.getElementsByClassName('collapsed-text');
console.log(collapsedElem);

let collapsibleElem = document.getElementsByClassName('collapsible');
console.log(collapsibleElem);

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