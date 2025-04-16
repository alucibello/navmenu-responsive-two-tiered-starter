const navigationMenu = document.getElementById("navmenu")
const navigationbutton = document.getElementById("toggle-menu")





function toggleMenu() {
    let isVisible = navigationMenu.getAttribute("data-visible");

    if (isVisible === "false") {
        if (navigationMenu.classList.contains("active")) {
            navigationMenu.setAttribute("data-visible", "true");
            navigationbutton.setAttribute("data-visible", "true");
        }
        else {
            dataDisplay();
            setTimeout(toggleMenu, 100);
        }

    }
    else {
        navigationMenu.setAttribute("data-visible", "false")
        navigationbutton.setAttribute("data-visible", "false")
        setTimeout(dataDisplay, 300);
    }

    function dataDisplay() {
        navigationMenu.classList.toggle("active");
    }

}
navigationbutton.addEventListener("click", toggleMenu);


//  Yet another way to add the current year to the footer
document.querySelector("#copyright").textContent = new Date().getFullYear();