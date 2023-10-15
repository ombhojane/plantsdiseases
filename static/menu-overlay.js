const menuOverlay = document.getElementById("menu-overlay");
const menuButton = document.getElementById("menu-button");

function toggleMenu() {
    if (menuOverlay.classList.contains("closed")) {
        menuOverlay.classList.remove("closed");
        menuOverlay.classList.add("opened");
    } else {
        menuOverlay.classList.remove("opened");
        menuOverlay.classList.add("closed");
    }
}

document.addEventListener("click", (e) => {
    if (!menuOverlay.contains(e.target) && e.target !== menuButton) {
        if (menuOverlay.classList.contains("opened")) {
            toggleMenu();
        }
    }
});
