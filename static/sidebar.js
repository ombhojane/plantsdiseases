// function toggleSidebar() {
//     var sidebar = document.getElementById("sidebar");
//     var hamburger = document.getElementById("hamburger-menu");
    
//     if (sidebar.classList.contains("opened")) {
//         sidebar.classList.remove("opened");
//         sidebar.classList.add("closed");
//         hamburger.innerHTML = "&#9776;";
//     } else {
//         sidebar.classList.remove("closed");
//         sidebar.classList.add("opened");
//         hamburger.innerHTML = "&times;";
//     }
// }

// const dropZone = document.getElementById("drop-zone");
// const fileInput = document.getElementById("file-input");

// dropZone.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     dropZone.classList.add("drag-over");
// });

// dropZone.addEventListener("dragleave", () => {
//     dropZone.classList.remove("drag-over");
// });

// dropZone.addEventListener("drop", (e) => {
//     e.preventDefault();
//     dropZone.classList.remove("drag-over");
//     const files = e.dataTransfer.files;
//     if (files.length > 0) {
//         fileInput.files = files;
//     }
// });

// fileInput.addEventListener("change", () => {
//     const fileName = fileInput.value.split("\\").pop();
//     if (fileName) {
//         dropZone.querySelector("p").textContent = fileName;
//     }
// });

// const sidebar = document.getElementById("sidebar");
// const menuButton = document.getElementById("menu-button");

// function toggleSidebar() {
//     if (sidebar.classList.contains("closed")) {
//         sidebar.classList.remove("closed");
//     } else {
//         sidebar.classList.add("closed");
//     }
// }

// menuButton.addEventListener("click", toggleSidebar);

// Get references to the sidebar and menu button
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menu-button");

// Function to toggle the sidebar
function toggleSidebar() {
    if (sidebar.classList.contains("closed")) {
        sidebar.classList.remove("closed");
    } else {
        sidebar.classList.add("closed");
    }
}

// Add a click event listener to the menu button
menuButton.addEventListener("click", toggleSidebar);
