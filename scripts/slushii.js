'use strict'

// Clickable Dropdown
function clickable() {
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
function flyout() {
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

// Basic Navbar Toogle 
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

// List Box Toggle

let button = document.getElementById('list-box-toggle');

button.onclick = function () {
    let div = document.getElementById('up-panel');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};