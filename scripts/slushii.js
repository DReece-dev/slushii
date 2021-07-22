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

// Flyout menu 1
function myFunction2() {
    document.getElementById("flyout-dropdown").classList.toggle("flyout-dropdown-show");
}

window.onclick = function (event) {
    if (!event.target.matches('.flyout-dropbutton')) {
        let dropdowns = document.getElementsByClassName("flyout-dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('flyout-dropdown-show')) {
                openDropdown.classList.remove('flyout-dropdown-show');
            }
        }
    }
}