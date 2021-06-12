'use strict'

// This is a JavaScript file with scripts for some components and functionality.

// Clickable Dropdown Menu
function myFunction() {
    document.getElementById("clickable-dropdown").classList.toggle("clickable-dropdown-show");
}

window.onclick = function (event) {
    if (!event.target.matches('.clickable-dropbutton')) {
        let dropdowns = document.getElementsByClassName("clickable-dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('clickable-dropdown-show')) {
                openDropdown.classList.remove('clickable-dropdown-show');
            }
        }
    }
}